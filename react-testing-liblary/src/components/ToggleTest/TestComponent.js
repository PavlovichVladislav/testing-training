import { useEffect, useState } from "react";

export const TestComponent = () => {
   const [data, setData] = useState(null);
   const [toggle, setToggle] = useState(false);
   const [value, setValue] = useState(false);

   const onClick = () => setToggle((prev) => !prev);

   useEffect(() => {
      setTimeout(() => {
         setData({});
      }, 1000);
   }, []);

   return (
      <div className="App-test">
         <h1 data-testid="value-elem">{value}</h1>
         {toggle && <div data-testid="toggle-elem">toggle</div>}
         {data && <div style={{ color: "red" }}>data</div>}
         <h1>Hello world</h1>
         <button onClick={onClick} data-testid="toggle-button">
            click me
         </button>
         <input
            type="text"
            placeholder="input value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
         />
      </div>
   );
}