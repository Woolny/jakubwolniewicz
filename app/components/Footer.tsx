import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-4 text-sm md:text-xl">
        <div className="flex justify-between items-center">
          <p>2024 &copy; </p>
          <a className="m-1">jakubwolniewicz.com</a>
        </div>
        <div className="flex justify-around">
          <Link href="https://github.com/Woolny?tab=repositories" className="mr-4">GitHub</Link>
          <Link href="http://www.linkedin.com/in/jakub-wolniewicz-134ab4277">LinkedIn</Link>
        </div>
    </footer>
  );
}

export default Footer