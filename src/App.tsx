import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Dialog from "./components/WinnerDialog";
import { showModal } from "./utils";

function App() {
  useEffect(() => {
    const interval = showModal();
    return () => {
      clearInterval(interval);
    };
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
