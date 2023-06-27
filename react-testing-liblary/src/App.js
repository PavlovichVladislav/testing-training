// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//    const [data, setData] = useState(null);
//    const [toggle, setToggle] = useState(false);
//    const [value, setValue] = useState(false);

//    const onClick = () => setToggle((prev) => !prev);

//    useEffect(() => {
//       setTimeout(() => {
//          setData({});
//       }, 1000);
//    }, []);

//    return (
//       <div className="App">
//         <h1 data-testId="value-elem">{value}</h1>
//          {toggle && <div data-testid="toggle-elem">toggle</div>}
//          {data && <div style={{ color: "red" }}>data</div>}
//          <h1>Hello world</h1>
//          <button onClick={onClick} data-testid="toggle-button">
//             click me
//          </button>
//          <input
//             type="text"
//             placeholder="input value"
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//          />
//       </div>
//    );
// }

// export default App;

import React from "react";
import { Link } from "react-router-dom";
import AppRouter from "./router/AppRouter";

const App = () => {
   return (
      <>
         <Link to={"/"} data-testid="main-link">
            Main
         </Link>
         <Link to={"/about"} data-testid="about-link">
            About
         </Link>
         <Link to={"/users"} data-testid="users-link">
            Users
         </Link>
         <AppRouter />
      </>
   );
};

export default App;
