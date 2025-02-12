import rewardsMock from "../mocks/rewardsMock";

function Rewards() {
  const rewards = rewardsMock();

  return (
    <>
      <div className="mx-auto flex w-full max-w-[1300px] flex-col items-center justify-center gap-2 py-10">
        {rewards?.map((reward) => (
          <div
            key={reward.id}
            className="flex w-full max-w-[700px] items-center justify-start gap-1.5 md:gap-5"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div
              className={`flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full ${reward.bgColor} ${reward.color}`}
            >
              <span className="text-2xl">{reward.icon}</span>
            </div>
            <div className="flex flex-col py-4">
              <h5 className="font-secondary text-[1rem] font-bold tracking-wide uppercase transition-all duration-500 sm:text-[1.4rem] md:text-[1.6rem]">
                {reward.title}
              </h5>
              <p className="font-secondary text-[0.8rem] leading-3 font-bold opacity-60 transition-all duration-500 sm:text-[0.9rem] md:text-[1rem]">
                {reward.company}
              </p>
              <p className="font-secondary text-[0.8rem] opacity-50 transition-all duration-500 sm:text-[0.9rem] md:text-[1rem]">
                {reward.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Rewards;
