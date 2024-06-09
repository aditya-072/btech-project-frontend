import React, { useState } from "react";
import "./diabetes.css";
import axios from "axios";
import { margin } from "@mui/system";
export default function HeartDiseasePrediction() {
  const [status, setStatus] = useState(null);
  const [drugs, setDrugs] = useState(null);
  const [isDisease, setIsDisease] = useState("");
  const [medineRequired, setMedicineRequired] = useState("");
  const [medicine, setMedicine] = useState("");
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: "",
    field7: "",
    field8: "",
    field9: "",
    field10: "",
    field11: "",
  });

  const sendDataTobackend = () => {
    const url = process.env.REACT_APP_heart;
    const arr = Object.values(formData);
    const arrOfNumbers = arr.map((element) => {
      const numberValue = parseFloat(element);
      return isNaN(numberValue) ? 0 : numberValue;
    });
    let dataToSend = { arr: arrOfNumbers, textArea: medineRequired };
    console.log("data to sent", dataToSend);
    axios
      .post(url, {
        data: dataToSend,
      })
      .then((res) => {
        // setIsDisease(res.data);
        console.log(res.data);

        setStatus(res.data?.status);
        setDrugs(res.data?.drugs);
        setMedicine(res.data?.medicine);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div
      style={{
        marginLeft: "250px",
        marginTop: "100px",
        width: "100%",
      }}
    >
      <h1>Heart Disease Prediction Using ML</h1>

      <form className="grid-form">
        <div>
          <label htmlFor="field1">Age of Person:</label>
          <input
            type="text"
            name="field1"
            id="field1"
            value={formData.field1}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field2">Sex:</label>
          <input
            type="text"
            name="field2"
            id="field2"
            value={formData.field2}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field3">Chest pain type(Among 4 values):</label>
          <input
            type="text"
            name="field3"
            id="field3"
            value={formData.field3}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field5">Serum Cholesterol (in mg/dl) :</label>
          <input
            type="text"
            name="field5"
            id="field5"
            value={formData.field5}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field4">
            Resting Cardiographic Result(Values=1/2/3):
          </label>
          <input
            type="text"
            name="field4"
            id="field4"
            value={formData.field4}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field8">Max Heart Rate Achieved (in BPM):</label>
          <input
            type="text"
            name="field8"
            id="field8"
            value={formData.field8}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field10">Old Peak:</label>
          <input
            type="text"
            name="field10"
            id="field10"
            value={formData.field10}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field11">Slope of peak:</label>
          <input
            type="text"
            name="field11"
            id="field11"
            value={formData.field11}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field9">Excersise Angina:</label>
          <input
            type="text"
            name="field9"
            id="field9"
            value={formData.field9}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field6">Fasting BS:</label>
          <input
            type="text"
            name="field6"
            id="field6"
            value={formData.field6}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field">Resting ECG:</label>
          <input
            type="text"
            name="field7"
            id="field7"
            value={formData.field7}
            onChange={handleChange}
          />
        </div>
      </form>

      <div style={{ width: "95%", paddingTop: "5px" }}>
        <textarea
          placeholder="Enter the type of medine you want to have"
          style={{ width: "100%" }}
          value={medineRequired}
          onChange={(event) => setMedicineRequired(event.target.value)}
        >
          {" "}
        </textarea>
      </div>
      <button className="submitButton" onClick={sendDataTobackend}>
        Predict Heart Result
      </button>

      <div className="greenstrip">
        {status === true && <div>Person have heart disease.</div>}
        {status === false && <div>Person is fine.</div>}
        {medicine && status == true && (
          <div>
            <div style={{ marginTop: 10 }}>Recommended Medicines : -</div>
            <ul>
              {medicine?.map((drug) => {
                return <li>{drug}</li>;
              })}
            </ul>
          </div>
        )}

        {/* {medicine && status == true && <div>{medicine}</div>} */}
      </div>
    </div>
  );
}
