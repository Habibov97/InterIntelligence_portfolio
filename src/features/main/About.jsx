import Heading from "../../ui/Heading";

function About({ children }) {
  return (
    <>
      <section
        id="about"
        className="mx-auto flex w-full max-w-[1300px] flex-col gap-5 py-5"
      >
        <Heading>About</Heading>
        {children}
      </section>
    </>
  );
}

export default About;
