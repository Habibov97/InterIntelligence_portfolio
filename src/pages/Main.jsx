function Main({ children }) {
  console.log(children);

  return (
    <main className="transition-all duration-300">
      {children.map((child, index) =>
        child.type.name === "Contact" ? (
          <div key={index} className="w-full">
            {child}
          </div>
        ) : (
          <div key={index} className="px-[20px] md:px-[64px]">
            {child}
          </div>
        ),
      )}
    </main>
  );
}

export default Main;
