import React, { useState } from "react";
import "./diabetes.css";
import axios from "axios";
export default function DiabetesPrediction() {
  const [isDisease, setIsDisease] = useState("");
  const [status, setStatus] = useState(null);
  const [drugs, setDrugs] = useState(null);
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
  });
  const sendDataTobackend = () => {
    const url = process.env.REACT_APP_diabetes;
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
      <h1>Diabetes Prediction Using ML</h1>

      <form className="grid-form">
        <div>
          <label htmlFor="field1">Age of Person:</label>
          <input
            type="text"
            name="field8"
            id="field8"
            value={formData.field8}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field2">Glucose level:</label>
          <input
            type="text"
            name="field2"
            id="field2"
            value={formData.field2}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field3">Blood Pressure:</label>
          <input
            type="text"
            name="field3"
            id="field3"
            value={formData.field3}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field6">BMI:</label>
          <input
            type="text"
            name="field6"
            id="field6"
            value={formData.field6}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field5">Insulin level:</label>
          <input
            type="text"
            name="field5"
            id="field5"
            value={formData.field5}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field6">Skin Thickness Level:</label>
          <input
            type="text"
            name="field4"
            id="field4"
            value={formData.field4}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field7">Number of Pregnancies:</label>
          <input
            type="text"
            name="field1"
            id="field1"
            value={formData.field1}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field8">Diabeties Pedigree Function Value:</label>
          <input
            type="text"
            value={formData.field7}
            onChange={handleChange}
            name="field7"
            id="field7"
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
        Predict Diabetes Result
      </button>
      <div className="greenstrip">
        {status === true && <div>Person have diabetes.</div>}
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
      </div>
    </div>
  );
}
