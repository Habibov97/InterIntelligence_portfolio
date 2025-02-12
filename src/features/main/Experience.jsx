import Heading from "../../ui/Heading";

function Experience({ children }) {
  return (
    <section
      id="experience"
      className="mx-auto flex w-full max-w-[1300px] flex-col gap-5 py-10"
    >
      <Heading>Experience</Heading>
      {children}
    </section>
  );
}

export default Experience;
