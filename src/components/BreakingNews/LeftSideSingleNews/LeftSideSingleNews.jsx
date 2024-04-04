import { CiCalendar } from "react-icons/ci";

const LeftSideSingleNews = () => {
  return (
    <div className="card">
      <img
        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes"
        className="rounded"
      />
      <div>
        <h2 className="my-4 text-dark-02 text-xl font-semibold">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <div className="flex gap-4 items-center">
          <h5 className="text-dark-02 font-medium text-base">Sports</h5>
          <p className="flex gap-2 items-center text-base text-dark-03 font-medium">
            <CiCalendar />
            <span>Jan 4, 2022</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSideSingleNews;
