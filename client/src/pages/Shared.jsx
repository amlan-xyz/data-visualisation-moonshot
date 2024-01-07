import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DATA_URL } from "../baseUrl";
import { LineChart } from "../components/LineGraph";
import { Navbar } from "../components/Navbar";
import { useData } from "../context/data.context";
export const Shared = () => {
  const { encodedData } = useParams();
  const { dispatch } = useData();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(DATA_URL);
        dispatch({ type: "FETCH_DATA", payload: data });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);
  useEffect(() => {
    const decodedData = decodeURIComponent(encodedData); // Only decode URL encoding
    const { gender, age, user } = JSON.parse(decodedData);
    setUser(user);
    if (gender) {
      dispatch({ type: "FILTER_BY_GENDER", payload: gender });
    }
    if (age) {
      dispatch({ type: "FILTER_BY_AGE", payload: age });
    }
  }, [encodedData, dispatch]);

  return (
    <div className="details">
      <Navbar />
      <div className="details__container">
        <Link to="/">Back</Link>
        {user && (
          <div className="">
            <LineChart user={user} />
          </div>
        )}
      </div>
    </div>
  );
};
