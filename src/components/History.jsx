import Axios from "axios";
import React, { useState, useEffect } from "react";

const History = () => {
  const [history, setHistory] = useState([]);

  async function renderHistory() {
    const response = await Axios.get("https://api.spacexdata.com/v3/history");
    console.log(response);
    setHistory(response.data);
  }

  useEffect(() => {
    renderHistory();
  }, []);
  return (
    <div className="history">
      <h1>Brief History Of SpaceX</h1>
      {history.map((showHis) => {
        return (
          <ul>
            <li>{showHis.title}</li>
            <li> {showHis.event_date_utc}</li>
            <li>{showHis.details}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default History;
