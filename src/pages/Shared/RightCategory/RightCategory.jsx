import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import bg from "../../../assets/bg.png";

const RightCategory = () => {
  return (
    <div className="space-y-5">
      {/* Login  */}
      <div className="p-2">
        <h2 className="font-semibold text-xl text-dark-02 mb-6">Login With</h2>
        <div className="flex flex-col gap-2">
          <button className="btn btn-outline btn-info">
            <FaGoogle /> Google
          </button>
          <button className="btn btn-outline btn-ghost">
            <FaGithub /> Github
          </button>
        </div>
      </div>
      {/* Find Us */}
      <div className="">
        <h2 className="font-semibold text-xl text-dark-02 mb-6">Find Us On</h2>
        <div className="flex flex-col">
          <Link className="font-medium text-dark-03 flex gap-2 items-center p-4 border rounded-t-md">
            <span className="p-4 bg-gray-50 rounded-full">
              <FaFacebookF className="text-blue-700" />
            </span>{" "}
            Facebook
          </Link>
          <Link className="font-medium text-dark-03 flex gap-2 items-center p-4 border-x rounded-t-md">
            <span className="p-4 bg-gray-50 rounded-full">
              <FaTwitter className="text-sky-400" />
            </span>
            Twitter
          </Link>
          <Link className="font-medium text-dark-03 flex gap-2 items-center p-4 border rounded-t-md">
            <span className="p-4 bg-gray-50 rounded-full">
              <FaInstagram className="text-rose-500" />
            </span>
            Instagram
          </Link>
        </div>
      </div>
      {/* Q Zone */}
      <div className="bg-dark-07">
        <h2 className="font-semibold text-xl text-dark-02 mb-6 p-3">Q-Zone</h2>
        <div className="px-1">
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
      {/* Ads */}
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="py-14 px-10 space-y-5 "
      >
        <h2 className="text-white font-bold text-3xl">
          Create an Amazing Newspaper
        </h2>
        <p className="font-normal text-white">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="bg-[#D72050] py-2 px-6 font-semibold text-lg md:text-xl text-white cursor-pointer">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default RightCategory;
