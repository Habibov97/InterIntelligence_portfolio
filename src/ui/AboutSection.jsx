import Button from "./Button";

function AboutSection() {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="mx-auto flex w-full max-w-[1300px] flex-col items-center justify-center gap-5 py-10 lg:flex-row lg:items-center lg:justify-center"
      >
        <div className="h-[260px] w-full max-w-[480px] transition-all duration-300 md:h-[280px] md:w-[750px]">
          <img className="h-full w-full" src="/aboutImg.webp" alt="aboutImg" />
        </div>
        <div className="flex w-full flex-col gap-5 transition-all duration-300">
          <p className="font-secondary text-[0.8rem] leading-5 opacity-50 md:text-[1rem]">
            I am Tapajyoti Bose, a Top Rated Freelancer on Upwork. I am also an
            avid Open Source Contributor with contributions ranging from Huge
            Feature Additions to Tiny Fixes and Documentation Changes at several
            Large Organizations (like Microsoft, Amazon, Material UI, Numpy,
            Webhint, etc.) The Client Review below, which you will find in my
            Upwork reviews and others like it, describes the quality of work and
            value that you can expect from working with me: Highly skilled
            frontend developer. I was continuously impressed with how quickly
            Tap could help turn a concept into working product. He will be an
            asset on any project he works on and I would happily work with him
            again
          </p>
          <div className="flex">
            <Button type="action">View Resume</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
