import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="bg-dark-07 p-2 md:p-4 flex gap-5 items-center">
      <button className="bg-[#D72050] py-2 px-6 font-semibold text-lg md:text-xl text-white cursor-default">
        Latest
      </button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="text-base md:text-lg font-semibold text-dark-02">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
