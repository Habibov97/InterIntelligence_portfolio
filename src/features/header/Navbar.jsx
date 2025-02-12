import { useState } from "react";
import NavLinks from "./NavLinks";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className="mx-auto flex w-full max-w-[1300px] items-center justify-between bg-[#eee] py-3">
        <div className="items-left flex h-[40px] w-[40px] justify-center">
          <img className="h-full w-full" src="/logo.png" alt="logo.png" />
        </div>

        <nav
          aria-label="main"
          className="hidden lg:flex lg:items-center lg:justify-end"
        >
          <NavLinks type="main" />
        </nav>

        <button
          className="cursor-pointer text-5xl lg:hidden"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </section>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
          isOpen
            ? "visible bg-black/50 opacity-100 backdrop-blur-sm"
            : "invisible opacity-0"
        }`}
        onClick={toggleMenu}
      ></div>

      <nav
        aria-label="mobile"
        className={`fixed top-0 left-0 z-50 h-full w-[300px] bg-[#eee] px-5 pt-20 shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="mb-5 text-3xl leading-10 opacity-50">
          TAPAJYOTI <span className="text-7xl">Bose</span>{" "}
        </h1>
        <NavLinks type="mobile" />
      </nav>
    </>
  );
}

export default Navbar;
