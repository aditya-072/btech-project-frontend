import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Heart, Person, Message, Capsule } from "./icons";
export default function Box() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
    handlePrediction(newValue);
  };
  const handlePrediction = (newValue) => {
    newValue === 0 && navigate("/diabetes");
    newValue === 1 && navigate("/parkinson");
    newValue === 2 && navigate("/heart");
  };
  useEffect(() => {
    handlePrediction(0);
  }, []);

  return (
    <div
      style={{
        height: "270px",
        width: "90%",
        backgroundColor: "white",
        margin: "auto",
        position: "absolute",
        top: "200px",
        left: "0",
        right: "0",
        borderRadius: "10px",
      }}
    >
      <h2>&nbsp;{Message}&nbsp;&nbsp;Multi Disease &nbsp;Prediction System</h2>
      <Divider />

      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        orientation="vertical"
      >
        <Tab
          icon={Capsule}
          label=" Diabetes Prediction"
          value={0}
          sx={{ flexDirection: "row", justifyContent: "space-around" }}
        />
        <Tab
          icon={Heart}
          label=" Heart Prediction"
          value={2}
          sx={{
            flexDirection: "row",
            marginTop: "-25px",
            justifyContent: "space-around",
            marginLeft: "-12px",
          }}
        />
        <Tab
          icon={Person}
          label=" Parkinson's Prediction"
          value={1}
          sx={{
            flexDirection: "row",
            marginTop: "-25px",
            justifyContent: "space-around",
          }}
        />
      </Tabs>
    </div>
  );
}
