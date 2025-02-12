import navMock from "../../mocks/navbarMock";

function NavLinks({ type }) {
  const navItems = navMock();

  if (type === "main") {
    return (
      <ul className="lg:flex-end flex items-center gap-8">
        {navItems?.map((item) => (
          <li key={item.id} className="">
            <a
              href=""
              className="text-sm font-bold opacity-50 transition-all duration-300 hover:border-b-2 hover:border-[#00ACFF] hover:text-[#00ACFF]"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    );
  }
  if (type === "mobile") {
    return (
      <ul className="flex flex-col items-start gap-3">
        {navItems?.map((item) => (
          <li key={item.id} className="">
            <a
              href=""
              className="text-sm font-bold opacity-50 transition-all duration-300 hover:border-b-2 hover:border-[#00ACFF] hover:text-[#00ACFF]"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default NavLinks;
