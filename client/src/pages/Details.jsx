import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LineChart } from "../components/LineGraph";
import { Navbar } from "../components/Navbar";
import { useData } from "../context/data.context";
export const Details = () => {
  const { user } = useParams();
  const {
    state: { gender, age },
  } = useData();
  const [sharedChartData, setSharedChartData] = useState(null);
  const [shareLink, setLink] = useState("");

  const handleShareChart = () => {
    const chartData = {
      user: user,
      gender,
      age,
    };
    setSharedChartData(chartData);
  };

  useEffect(() => {
    if (sharedChartData) {
      const stringifidData = JSON.stringify(sharedChartData);
      const encodedData = encodeURIComponent(stringifidData);
      const shareUrl = `/shared-chart/${encodedData}`;
      setLink(shareUrl);
    }
  }, [sharedChartData]);

  return (
    <div className="details">
      <Navbar />
      <div className="details__container">
        <div className="share">
          <Link to="/">Back</Link>
          {shareLink.length === 0 ? (
            <button onClick={handleShareChart}>Share Chart</button>
          ) : (
            <>
              <a href={`${shareLink}`}>Copy Link</a>
            </>
          )}
        </div>

        <div className="line__graph">
          <LineChart user={user} />
        </div>
      </div>
    </div>
  );
};
