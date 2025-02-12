import { useState } from "react";
import testimonialsMock from "../mocks/testimonialsMock";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function TestimonialsSection() {
  const [change, setChange] = useState(1);
  const testimonials = testimonialsMock();

  function handleRight() {
    setChange((cha) => cha + 1);
    if (change === 4) {
      setChange(1);
    }
  }

  function handleLeft() {
    setChange((cha) => cha - 1);
    if (change === 1) {
      setChange(4);
    }
  }

  const activeTestimonial = testimonials.find((item) => item.id === change);

  return (
    <>
      <div className="relative">
        <div className="flex flex-col gap-5 py-15">
          <h4 className="text-lg leading-5 font-bold uppercase lg:text-2xl lg:leading-7">
            {activeTestimonial.title}
          </h4>
          <div className="flex items-center gap-3">
            <div className="h-[40px] w-[40px]">
              <img
                className="h-full w-full rounded-full"
                src={activeTestimonial.userImage}
                alt="userImg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold uppercase">
                {activeTestimonial.username}
              </span>
              <span className="text-sm leading-3 opacity-50">
                {activeTestimonial.userPosition}
              </span>
            </div>
          </div>
        </div>
        <span
          onClick={handleLeft}
          className="absolute top-[100px] left-[-40px] cursor-pointer text-2xl lg:text-3xl"
        >
          <MdKeyboardArrowLeft />
        </span>
        <span
          onClick={handleRight}
          className="absolute top-[100px] right-[-40px] cursor-pointer text-2xl lg:text-3xl"
        >
          <MdKeyboardArrowRight />
        </span>
      </div>
    </>
  );
}

export default TestimonialsSection;
