import "./App.css";
import TopLayout from './Layouts/TopLayout/TopLayout';
import MapLayout from './Layouts/MapLayout/MapLayout';
import useGetIP from "./hooks/useGetIP";

function App() {
    const {IP} = useGetIP()
    console.log(IP);
    
  return (
    <div className="container">
      <TopLayout />
      <MapLayout />
    </div>
  );
}

export default App;
