import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Link from "./Link";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Profile", path: "/profile" },
  ];
  return (
    <nav className="container mx-auto ">
      <div className=" md:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <AiOutlineClose className="text-2xl"></AiOutlineClose>
        ) : (
          <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
        )}
      </div>
      <ul
        className={`md:flex gap-5 absolute md:static duration-1000 px-10 md:py-4 bg-gray-400 ${
          open ? "top-8 left-8" : "top-8 -left-80"
        } `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
