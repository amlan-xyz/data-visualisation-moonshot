import axios from "axios";
import { useEffect } from "react";
import { DATA_URL } from "../baseUrl";
import { BarChart } from "../components/BarGraph";
import { Filter } from "../components/Filter";
import { Navbar } from "../components/Navbar";
import { useData } from "../context/data.context";
export const Home = () => {
  const { dispatch } = useData();
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
  return (
    <div className="home">
      <Navbar />
      <div className="filter__container">
        <Filter />
      </div>

      <div className="content__container">
        <BarChart />
      </div>
    </div>
  );
};
