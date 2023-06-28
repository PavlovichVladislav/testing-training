import React, { useState } from "react";

const E2ETest = () => {
   const [value, setValue] = useState("");
   const [visible, setVisible] = useState(false);

   const onChange = (e) => setValue(e.target.value);
   const toggle = () => value === "hello" && setVisible((visible) => !visible);

   return (
      <div>
         <input id="search" type="text" value={value} onChange={onChange} />
         <button id="toggle" onClick={toggle}>
            btn
         </button>
         {visible && <h1 id="hello">title</h1>}
      </div>
   );
};

export default E2ETest;
