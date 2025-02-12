import Heading from "../../ui/Heading";

function Testimonials({ children }) {
  return (
    <section
      id="testimonials"
      className="mx-auto flex h-full min-h-[60vh] w-full max-w-[1250px] flex-col gap-5 px-5 py-10 md:min-h-[55vh]"
    >
      <Heading>Testimonials</Heading>
      {children}
    </section>
  );
}

export default Testimonials;
