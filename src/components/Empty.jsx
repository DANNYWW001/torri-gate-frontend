import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineAddHome } from "react-icons/md";

const Empty = () => {
  return (
    <div>
      <h1>NO PROPERTIES POSTED YET</h1>
      <div>
        <Link
          to="/dashboard/create"
          className="flex gap-3 items-center rounded-lg bg-black text-white px-3 py-4"
        >
          <span className="hidden md:block text-[16px] font-semibold">
            Create New Property
          </span>
          <MdOutlineAddHome size={25} />
        </Link>
      </div>
    </div>
  );
};

export default Empty;
