import Heading from "../../ui/Heading";

function Contact({ children }) {
  return (
    <section
      id="contact"
      style={{
        clipPath:
          "polygon(50% 9%, 100% 0, 100% 100%, 75% 100%, 25% 100%,0 100%, 0 0)",
      }}
      className="w-full bg-[#00ACFF] py-10"
    >
      <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-5 py-10">
        <div className="h-6"></div>
        <Heading type="foot">Contact</Heading>
        {children}
      </div>
    </section>
  );
}

export default Contact;
