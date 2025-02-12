import socialLinks from "../mocks/socialMock";
import Button from "./Button";

function ContactSection() {
  const socialButtons = socialLinks();

  return (
    <>
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="flex flex-col items-center justify-center gap-10">
          <span className="w-full max-w-[400px] pt-10 text-center text-white">
            Have a question? Want to Collaborate? Just want to chat? React out
            on me
          </span>
          <div className="flex gap-4">
            {socialButtons?.map((item) => (
              <Button key={item.id} type="social">
                {item.icon}
              </Button>
            ))}
          </div>
          <span className="text-center text-white">Send me a message</span>
          <form className="mx-auto flex w-full max-w-[800px] flex-col gap-4 px-5">
            <div>
              <label htmlFor="fullName" className="sr-only">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                className="w-full rounded-lg bg-gray-200 px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full rounded-lg bg-gray-200 px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full rounded-lg bg-gray-200 px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                rows="4"
                className="w-full rounded-lg bg-gray-200 px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-[120px] rounded-lg bg-blue-700 px-5 py-2 text-white transition-all hover:bg-blue-900 hover:shadow-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
