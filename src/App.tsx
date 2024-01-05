import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Dialog from "./components/WinnerDialog";

function App() {
  useEffect(() => {
    const dialog = document.getElementById("my_modal_1") as any;
    // show modol using attribute
    setTimeout(() => {
      dialog.showModal();
    }, 5000);
  }, []);

  return (
    <>
      <Dialog />

      <div className="bg-primary min-h-[100vh]">
        <Navbar>
          <Navbar.Title text="Dicktionary" />
        </Navbar>
        <Router>
          <Routes>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
