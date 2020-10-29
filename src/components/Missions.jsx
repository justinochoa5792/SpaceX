import React, { useState, useEffect } from "react";
import Axios from "axios";

const Missions = () => {
  const [mission, setMission] = useState([]);

  async function renderMissions() {
    const response = await Axios.get("https://api.spacexdata.com/v3/missions");
    console.log(response.data);
    setMission(response.data);
  }

  useEffect(() => {
    renderMissions();
  }, []);
  return (
    <div className="missions">
      <h1>Missions</h1>
      {mission.map((missions) => {
        return (
          <ul>
            <li>
              <strong>{missions.mission_name}</strong>
            </li>
            <li>{missions.description}</li>
            <a href={missions.website}> {missions.website}</a>
          </ul>
        );
      })}
    </div>
  );
};

export default Missions;
