import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0f1041";
      showAlert("Dark Mode is Enabled", "success");
      document.title = "Pathshala-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
      document.title = "Pathshala-Light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" 
          element={<div className="container my-3"> */}
              <TextForm showAlert={showAlert} heading="Enter the text to Analyze Below" mode={mode} />
            {/* </div>} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
