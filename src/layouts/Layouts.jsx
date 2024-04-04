import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div className="font-popins max-w-6xl mx-auto">
      <Outlet />
    </div>
  );
};

export default Layouts;
