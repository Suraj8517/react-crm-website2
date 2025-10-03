import React, { useState } from "react";
import logo from "../assets/Vmax Logo 2.png";
import {links} from "../datas/features";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 bg-[#8B4FE8] backdrop-blur-md z-40  border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <h1 className="w-30 h-14 text-white font-bold py-4" >EliMax.ai</h1>
          <nav className="hidden md:flex gap-16 text-sm text-white">
          {links.map((link)=>(
            <a key={link.href} href={link.href} className="hover:text-gray-900 transition py-2 font-bold" >{link.label}</a>
          ))}
          </nav>
          <div>
            <button onClick={()=>{setMenuOpen(!menuOpen)}} className=" md:hidden  p-2 rounded-lg bg-[#6E0ACE] text-white">☰</button>
                      <button className="hidden md:inline-flex items-center gap-2 bg-purple-600 text-white text-sm px-4 py-2 rounded-xl shadow-md hover:brightness-105 transition">Get started</button>
          </div>
        </div>
        {
          menuOpen && (
            <div className="bg-white border-t border-gray-200 px-4 py-3 flex flex-col gap-3">
              {links.map((link)=>(
            <a key={link.href} href={link.href} className="hover:text-gray-900 transition py-2" >{link.label}</a>
          ))}
           <button className=" bg-[#6E0ACE] text-white text-sm px-4 py-2 rounded-xl shadow-md hover:brightness-105 transition">Get started</button>
            </div>
          )
        }
      </header>
    </>
  );
}
