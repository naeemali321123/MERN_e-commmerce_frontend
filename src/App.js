import React, { useEffect } from "react";
import Routing from "./routing/Routing";

export default function App() {
  const getUserdata = ()=>{
  }
  useEffect(() => {
    getUserdata();
  }, []);
  return (
    <div>
      <Routing />
    </div>
  );
}
