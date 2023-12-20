import "./assets/css/tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" Component={Homepage}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
