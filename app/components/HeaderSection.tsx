"use client"
import Link from "next/link";
import React, { JSXElementConstructor, useState } from "react";
import NavLink from "./NavLink";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import { MenuOverlay } from "./MenuOverlay";

const navLinks =[
  {
    title: "LinkedIn",
    path: "http://www.linkedin.com/in/jakub-wolniewicz-134ab4277"
  },
  {
    title: "GitHub",
    path: "https://github.com/Woolny?tab=repositories"
  },
  {
    title: "Get my resume",
    path: "../CV_Jakub_Wolniewicz.pdf"
  }
]

export const HeaderSection: React.FC = (): JSX.Element => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav>
      <div className="flex flex-wrap mx-auto items-center justify-between p-8">
        <Link href={"/"} className="text-xl">
          jakubwolniewicz.com
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
              <button onClick={() => setNavbarOpen(true)} className="flex items-center">
                <Bars3Icon className="h-5 w-5"/>
              </button>
            ) : (
              <button onClick={() => setNavbarOpen(false)} className="flex items-center">
                <XMarkIcon className="h-5 w-5"/>
              </button>
            )
          }
        </div>
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks}/>}
    </nav>
  );
}