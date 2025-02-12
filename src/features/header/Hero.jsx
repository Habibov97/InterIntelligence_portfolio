import socialLinks from "../../mocks/socialMock";
import Button from "../../ui/Button";

function Hero() {
  const socialLink = socialLinks();

  return (
    <section className="mx-auto flex w-full max-w-[1300px] flex-col-reverse items-center justify-between gap-20 py-[150px] sm:py-[200px] lg:flex-row">
      {/* Hero Left  */}
      <div className="flex flex-col items-center justify-center transition-all duration-300 lg:items-start">
        <span className="rounded-2xl rounded-bl-none border border-none bg-[#00ACFF] px-4 py-2 text-xs text-white">
          Hello! I am
        </span>
        <h1 className="font-primary py-[0.5px] text-[2em] font-bold tracking-wide transition-all duration-300 sm:text-[2.8em] lg:text-[3.2em]">
          TAPAJYOTI BOSE
        </h1>
        <p className="text-xl opacity-70">Product Developer</p>
        <div className="flex gap-3 py-7">
          {socialLink?.map((item) => (
            <Button type="social" key={item.id}>
              {item.icon}
            </Button>
          ))}
        </div>
      </div>
      {/* Hero Right */}
      <div className="relative flex items-center justify-center">
        <div className="absolute h-[330px] w-[330px] rounded-full border-20 border-[#D5D5D5] transition-all duration-300 lg:h-[430px] lg:w-[430px]"></div>

        <div className="absolute h-[290px] w-[290px] rounded-full border-20 border-[#9B9B9B] transition-all duration-300 lg:h-[390px] lg:w-[390px]"></div>

        <div className="absolute h-[250px] w-[250px] rounded-full border-20 border-[#616161] transition-all duration-300 lg:h-[350px] lg:w-[350px]"></div>

        <div className="relative h-[210px] w-[210px] overflow-hidden rounded-full transition-all duration-300 lg:h-[310px] lg:w-[310px]">
          <img
            className="h-full w-full object-cover"
            src="/indian-qaqas.webp"
            alt="heroPhoto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
