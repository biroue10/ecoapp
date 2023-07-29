import { useState } from "react";
import "./App.css";
import { Footer } from "./Footer";
import { Header } from "./Header";
function Main() {
  const [Name_of_the_App, setName_of_the_App] = useState("");
  const [Number_of_CPUs, setNumber_of_CPUs] = useState("");
  const [CPU_Power_Consumption, setCPU_Power_Consumption] = useState("");
  const [Memory_Power_Consumption, setMemory_Power_Consumption] = useState("");
  const [Number_of_GPUs, setNumber_of_GPUs] = useState("");
  const [GPU_Power_Consumption, setGPU_Power_Consumption] = useState("");
  const [time, setTime] = useState("");
  const [code, setCode] = useState("");
  const [result, setresult] = useState("");
  const [carbon, setCarbon] = useState("");
  function handlesubmit(e) {
    e.preventDefault();
  }
  function calculate() {
    setresult(
      Number_of_CPUs * CPU_Power_Consumption +
        Memory_Power_Consumption +
        (Number_of_GPUs * GPU_Power_Consumption) / 1000,
    );
    function biroue(e) {
      const options = {
        method: "GET",
        headers: {
          "auth-token": "5oVI8h7lSIYZILqfv9IiI8RsN81bLhq7",
        },
      };
      fetch(
        `https://api-access.electricitymaps.com/2w97h07rvxvuaa1g/carbon-intensity/latest?zone=${e}`,
        options,
      )
        .then((response) => response.json())
        .then((response) => setCarbon(response.carbonIntensity));
    }
    biroue(code);
  }
  function reset() {
    setName_of_the_App("");
    setNumber_of_CPUs("");
    setCPU_Power_Consumption("");
    setMemory_Power_Consumption("");
    setNumber_of_GPUs("");
    setGPU_Power_Consumption("");
    setresult("");
    setTime("");
    setCode("");
  }
  return (
    <div className="formulaire">
      <form onSubmit={handlesubmit}>
        <h3>Calculate the power and energy consume by an app</h3>
        <label htmlFor="first">Name of the App:</label>
        <input
          type="text"
          name="first"
          id="first"
          onChange={(e) => setName_of_the_App(e.target.value)}
          value={Name_of_the_App}
          placeholder="Enter the name of the App here..."
          autoComplete="off"
        />
        <label htmlFor="second">Number of CPUs:</label>
        <input
          type="number"
          name="second"
          id="second"
          onChange={(e) => setNumber_of_CPUs(Number(e.target.value))}
          value={Number_of_CPUs}
          placeholder="Number Of CPUs..."
          autoComplete="off"
        />
        <label htmlFor="third">CPU Power Consumption:</label>
        <input
          type="number"
          name="third"
          id="third"
          onChange={(e) => setCPU_Power_Consumption(Number(e.target.value))}
          value={CPU_Power_Consumption}
          placeholder="CPU Power Consumption..."
          autoComplete="off"
        />
        <label htmlFor="fourth">Memory Power Consumption:</label>
        <input
          type="number"
          name="fourth"
          id="fourth"
          onChange={(e) => setMemory_Power_Consumption(Number(e.target.value))}
          value={Memory_Power_Consumption}
          placeholder="Memory Power Consumption..."
          autoComplete="off"
        />
        <label htmlFor="fifth">Number of GPUs:</label>
        <input
          type="number"
          name="fifth"
          id="fifth"
          onChange={(e) => setNumber_of_GPUs(Number(e.target.value))}
          value={Number_of_GPUs}
          placeholder="Number of GPUs..."
          autoComplete="off"
        />
        <label htmlFor="sixth">GPU Power Consumption:</label>
        <input
          type="number"
          name="sixth"
          id="sixth"
          onChange={(e) => setGPU_Power_Consumption(Number(e.target.value))}
          value={GPU_Power_Consumption}
          placeholder="GPU Power Consumption"
          autoComplete="off"
        />
        <label htmlFor="time">Hours:</label>
        <input
          type="number"
          placeholder="Enter the number of hours you are running the app..."
          name="seventh"
          id="seventh"
          onChange={(e) => setTime(Number(e.target.value))}
          value={time}
          autoComplete="off"
        />
        <label htmlFor="">Country Code (ISO Code):</label>
        <input
          type="text"
          placeholder="Enter Your Country Code to to get the CO2eq of the energy released"
          onChange={(e) => setCode(e.target.value)}
          value={code}
          name="eigth"
          id="eigth"
          autoComplete="off"
        />
        <div className="boutons">
          <button onClick={calculate} className="calculer">
            Calculate
          </button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>
      </form>
      <div className="result">
        {result
          ? `The power consume by ${Name_of_the_App} during ${time} hours is ${result} kWh
          The carbon intensity in this Area is ${carbon} which give us ${
            carbon * result
          } grams of C02eq emissions over the same period`
          : ""}
      </div>
    </div>
  );
}
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
export default App;
