function Heading({ children, type }) {
  return (
    <div className="flex items-center justify-center">
      <h2
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
        className={`font-primary text-3xl font-bold uppercase transition-all duration-300 after:mx-auto after:block after:h-[3px] after:w-[40px] after:content-[''] md:text-5xl ${type ? "text-white after:bg-white" : "text-black after:bg-black"} `}
      >
        {children}
      </h2>
    </div>
  );
}

export default Heading;
