import Heading from "../../ui/Heading";

function Achievements({ children }) {
  return (
    <section
      id="achievement"
      className="mx-auto flex w-full max-w-[1300px] flex-col gap-5 py-30"
    >
      <Heading>Achievements</Heading>
      {children}
    </section>
  );
}

export default Achievements;
