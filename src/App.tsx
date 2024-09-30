import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import SideBar from "./Components/SideBar";

// Your other component imports (e.g., Home, Plan, AddOns, Summary)
import Home from "./Pages/Home";
import Plan from "./Pages/Plan";
import AddOns from "./Pages/AddOns";
import Summary from "./Pages/Summary";
import { PlanProvider } from "./context/PlanContext";
import ErrorPage from "./Pages/ErrorPage";
import Finished from "./Pages/Finished";

function App() {
  return (
    <PlanProvider>
      <Router>
        <div className="container">
          <div className="sub-container">
            <SideBar />
            {/* Define your routes here */}
            <Routes>
              <Route index element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/plan" element={<Plan />} />
              <Route path="/addons" element={<AddOns />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/finished" element={<Finished />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </PlanProvider>
  );
}

export default App;
