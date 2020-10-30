import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [info, setInfo] = useState("");

  async function getInformation() {
    const response = await Axios.get("https://api.spacexdata.com/v3/info");
    setInfo(response.data);
  }

  useEffect(() => {
    getInformation();
  }, []);
  return (
    <div className="home">
      <li>
        <strong>Founder: </strong>
        {info.founder}
      </li>
      <li>
        <strong>Date Founded: </strong>
        {info.founded}
      </li>
      <li>{info.summary}</li>
      <div>
        <Link to="/history" style={{ margin: "20px", color: "white" }}>
          History
        </Link>
        <Link to="/missions" style={{ color: "white" }}>
          Missions
        </Link>
      </div>
    </div>
  );
};

export default Home;
