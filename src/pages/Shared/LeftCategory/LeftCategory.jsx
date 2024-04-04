import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftSideSingleNews from "../../../components/BreakingNews/LeftSideSingleNews/LeftSideSingleNews";

const LeftCategory = () => {
  const [catagory, setCategory] = useState([]);

  // Get Category
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  console.log(catagory);
  return (
    <div className="space-y-4">
      {/* Category */}
      <div>
        <h2 className="font-semibold text-xl text-dark-02 mb-6">
          All Caterogy
        </h2>
        <div>
          <ul className="text-center space-y-1">
            {catagory.map((cat) => (
              <li key={cat.id}>
                <Link className="py-4 bg-dark-07 inline-block w-full rounded text-base md:text-lg font-medium text-dark-02">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* News */}
      <div className="space-y-4">
        <LeftSideSingleNews />
        <LeftSideSingleNews />
        <LeftSideSingleNews />
      </div>
    </div>
  );
};

export default LeftCategory;
