import "./App.css";
import BarChart from "./Components/BarChart/BarChart";
import LineChart from "./Components/Chart/LineChart";
// import DaisyNav from "./Components/DaisyNav/DaisyNav";
import NavBar from "./Components/NavBar/NavBar";
import Phones from "./Components/Phones/Phones";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <BarChart></BarChart>
      <Phones></Phones>
    </>
  );
}

export default App;
