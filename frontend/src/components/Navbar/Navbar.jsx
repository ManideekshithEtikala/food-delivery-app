import React, { useState } from "react";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const [menu ,setMenu]= useState("home")
  const { loginWithRedirect } = useAuth0()
  return (
    <main className="flex justify-between bg-blue-300 px-2 h-[10vh]">
      <div className="logo flex items-center justify-center">
        <p>logo</p>
      </div>
      <ul className="components flex justify-center items-center">
        <li className={menu==="home"?"navsub":""} onClick={()=>setMenu("home")}>Home</li>
        <li className={menu==="menu"?"navsub":""}  onClick={()=>setMenu("menu")}>Menu</li>
        <li className={menu==="about"?"navsub":""}  onClick={()=>setMenu("about")}>About us</li>
        <li className={menu==="contact"?"navsub":""}  onClick={()=>setMenu("contact")}>Contact us</li>
      </ul>
      <div className="right flex">
        <p className="flex justify-center items-center mx-2">search</p>
        <p className="flex justify-center items-center mx-2">kart functionality</p>
        <button className="flex justify-center items-center mx-2" onClick={()=>{loginWithRedirect()}}>signin</button>
      </div>
    </main>
  );
};

export default Navbar;
