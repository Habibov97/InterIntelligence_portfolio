import Heading from "../../ui/Heading";
import AOS from "aos";
import { useEffect } from "react";
import Button from "../../ui/Button";
function Blog({ children }) {
  return (
    <>
      <section
        id="blog"
        className="mx-auto flex w-full max-w-[1300px] flex-col gap-5 py-30"
      >
        <Heading>Blog</Heading>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="flex flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-5"
        >
          {children}
        </div>
        <div className="flex w-full items-center justify-center pt-5">
          <Button type="blogtags">View All Blogs</Button>
        </div>
      </section>
    </>
  );
}

export default Blog;
