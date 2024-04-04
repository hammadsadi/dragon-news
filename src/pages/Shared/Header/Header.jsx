import logo from "../../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="text-center mt-2">
      <img src={logo} alt="" className="mx-auto" />
      <h2 className="md:mt-4 mt-3 text-dark-03 font-normal">
        Journalism Without Fear or Favour
      </h2>
      <p className="mt-1 font-medium">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
