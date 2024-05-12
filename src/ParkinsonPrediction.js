import React, { useState } from "react";
import "./diabetes.css";
import axios from "axios";
export default function DiabetesPrediction() {
  const [isDisease, setIsDisease] = useState("");
  const [status, setStatus] = useState(null);
  const [drugs, setDrugs] = useState(null);
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
    field12: "",
    field13: "",
    field14: "",
    field15: "",
    field16: "",
    field17: "",
    field18: "",
  });
  const sendDataTobackend = () => {
    const url = "http://localhost:4000";
    console.log("data to sent", formData);
    axios
      .post(url, {
        data: formData,
      })
      .then((res) => {
        // setIsDisease(res.data);
        console.log(res.data);
        setStatus(res.data?.status);
        setDrugs(res.data?.drugs);
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
      <h1>Parkinson Disease Prediction Using ML</h1>

      <form className="grid-form">
        <div>
          <label htmlFor="field1">Name:</label>
          <input
            type="text"
            name="field1"
            id="field1"
            value={formData.field1}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field2">
            MDVP:Fo(Hz) (Average vocal fundamental frequency):
          </label>
          <input
            type="text"
            name="field2"
            id="field2"
            value={formData.field2}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field3">
            MDVP:Fhi(Hz)(Maximum vocal fundamental frequency):
          </label>
          <input
            type="text"
            name="field3"
            id="field3"
            value={formData.field3}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field4">
            MDVP:Flo(Hz)(Minimum vocal fundamental frequency):
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
          <label htmlFor="field5">MDVP:Jitter(%):</label>
          <input
            type="text"
            name="field5"
            id="field5"
            value={formData.field5}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field6">MDVP:Jitter(Abs):</label>
          <input
            type="text"
            name="field6"
            id="field6"
            value={formData.field6}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field7">MDVP:RAP :</label>
          <input
            type="text"
            name="field7"
            id="field7"
            value={formData.field7}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field8">MDVP:PPQ :</label>
          <input
            type="text"
            name="field8"
            id="field8"
            value={formData.field8}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="field9">Jitter:DDP </label>
          <input
            type="text"
            name="field9"
            id="field9"
            value={formData.field9}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="field10">MDVP:Shimmer</label>
          <input
            type="text"
            name="field10"
            id="field10"
            value={formData.field10}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="field11">MDVP:Shimmer(dB)</label>
          <input
            type="text"
            name="field11"
            id="field11"
            value={formData.field11}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="field12">Shimmer:APQ3</label>
          <input
            type="text"
            name="field12"
            id="field12"
            value={formData.field12}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="field13">Shimmer:APQ5</label>
          <input
            type="text"
            name="field13"
            id="field13"
            value={formData.field13}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="field14">MDVP:APQ</label>
          <input
            type="text"
            name="field14"
            id="field14"
            value={formData.field14}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="field15">Shimmer:DDA</label>
          <input
            type="text"
            name="field15"
            id="field15"
            value={formData.field15}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="field16">NHR </label>
          <input
            type="text"
            name="field16"
            id="field16"
            value={formData.field16}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="field17">HNR </label>
          <input
            type="text"
            name="field17"
            id="field17"
            value={formData.field17}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="field18">
            Status - Health status (1) - Parkinson's (0){" "}
          </label>
          <input
            type="text"
            name="field18"
            id="field18"
            value={formData.field18}
            onChange={handleChange}
          />
        </div>
      </form>
      <button className="submitButton" onClick={sendDataTobackend}>
        Predict Parkinson Result
      </button>
      <div className="greenstrip">
        {status === true && <div>Person have heart disease.</div>}
        {status === false && <div>Person is fine.</div>}
        {drugs && status == true && (
          <div>
            <div style={{ marginTop: 10 }}>Recommended Medicines : -</div>
            <ul>
              {drugs?.map((drug) => {
                return <li>{drug}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
