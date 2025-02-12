import Button from "./Button";
import { FaHeart } from "react-icons/fa6";
import { FaCommentDots } from "react-icons/fa";
import blogMock from "../mocks/blogMock";

function BlogSection() {
  const blogs = blogMock();

  return (
    <>
      {blogs?.map((blog) => (
        <div
          key={blog.id}
          className="flex min-h-[490px] w-full max-w-[420px] flex-col gap-4 rounded-xl bg-white transition-all duration-500 hover:scale-102 hover:shadow-lg hover:shadow-black/40"
        >
          {/* Image Section */}
          <div className="h-[200px] w-full overflow-hidden rounded-t-xl">
            <img
              className="h-full w-full transition-all duration-300"
              src={blog.image}
              alt="blogImg1"
            />
          </div>

          {/* Main Content Wrapper with flex-grow */}
          <div className="flex flex-grow flex-col px-3 pb-4">
            <div>
              <h2 className="font-secondary text-2xl font-bold uppercase">
                {blog.title}
              </h2>
              <span className="text-sm leading-4 opacity-50">{blog.date}</span>
              <div className="flex flex-wrap gap-3 pt-2">
                {blog.blogtag.map((tag, index) => (
                  <Button key={index} type="blogtags">
                    {tag}
                  </Button>
                ))}
              </div>
            </div>

            {/* Push Likes & Comments to Bottom */}
            <div className="mt-auto flex items-center justify-around gap-3 opacity-50">
              <div className="flex items-center gap-1">
                <FaHeart />
                <span>{blog.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCommentDots />
                <span>{blog.comments}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default BlogSection;
