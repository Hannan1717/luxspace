import "./assets/css/tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Congratulation from "./pages/Congratulation";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div className="">
            <Router>
                <Routes>
                    <Route exact path="/" Component={Homepage}></Route>
                    <Route path="/categories/:idc" Component={Details}></Route>
                    <Route path="/cart" Component={Cart}></Route>
                    <Route
                        path="/congratulation"
                        Component={Congratulation}
                    ></Route>
                    <Route path="*" Component={NotFound}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
