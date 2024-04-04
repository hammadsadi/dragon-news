import BreakingNews from "../../components/BreakingNews/BreakingNews";
import Header from "../Shared/Header/Header";
import LeftCategory from "../Shared/LeftCategory/LeftCategory";
import Navbar from "../Shared/Navbar/Navbar";
import RightCategory from "../Shared/RightCategory/RightCategory";

const Home = () => {
  return (
    <div>
      <Header />
      {/* Breaking News */}
      <div className="my-6">
        <BreakingNews />
      </div>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border-red-400 border col-span-1">
          <LeftCategory />
        </div>
        <div className="border-red-400 border col-span-2">
          <h2>Home</h2>
        </div>
        <div className="border-red-400 border col-span-1">
          {" "}
          <RightCategory />
        </div>
      </div>
    </div>
  );
};

export default Home;
