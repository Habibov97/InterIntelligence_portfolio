import "aos/dist/aos.css";
import articleMock from "../mocks/articleMock";

function Article() {
  const articles = articleMock();

  return (
    <>
      {articles?.map((article) => {
        return (
          <div
            key={article.id}
            className={`flex w-full items-start justify-start ${article.id % 2 == 0 ? "flex-row-reverse" : "flex-row"} pt-15`}
            data-aos={`${article.id % 2 == 0 ? "fade-right" : "fade-left"}`}
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <article
              className={`flex flex-col gap-4 ${article.id % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"} `}
            >
              <div
                className={`flex h-[80px] w-[150px] sm:h-[170px] sm:w-[300px] ${article.id % 2 == 0 ? "self-end" : "self-start"} overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-black/50`}
              >
                <img
                  className={`h-full w-full scale-100 transition-all duration-300 hover:scale-102`}
                  src={article.image}
                  alt="upwork"
                />
              </div>
              <div
                className={`flex flex-col ${article.id % 2 == 0 ? "text-right" : "text-left"} `}
              >
                <h4 className="font-secondary text-lg font-bold uppercase sm:text-2xl">
                  {article.title}
                </h4>
                <p className="font-secondary sm:text-md text-sm leading-4 font-bold opacity-70">
                  {article.type}
                </p>
                <p className="font-secondary sm:text-md text-sm opacity-50">
                  {article.date}
                </p>

                <p className="w-full max-w-[480px] pt-2 text-[0.7em] leading-4 opacity-50 sm:text-[0.9em]">
                  {article.description}
                </p>
              </div>
            </article>
          </div>
        );
      })}
    </>
  );
}

export default Article;
