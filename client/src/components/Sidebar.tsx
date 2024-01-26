import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#1977bb] min-h-screen">
      <div className="font-semibold text-xl pt-4 px-4 text-white">
        <Link to={`/`}> Dashboard Admin</Link>
      </div>
      <div className="py-4">
        <Link
          to={"/products"}
          className="flex items-center p-4 gap-4 border-b-2  hover: cursor-pointer hover:bg-[#32c26e] text-white"
        >
          <Inventory2OutlinedIcon className="" />
          <h2 className=" font-semibold ">Products</h2>
        </Link>
        <div className="flex items-center p-4 gap-4 border-b-2  hover: cursor-pointer hover:bg-[#32c26e] text-white">
          <PersonOutlineOutlinedIcon className="" />
          <h2 className=" font-semibold ">Users</h2>
        </div>
        <div className="flex items-center p-4 gap-4 border-b-2  hover: cursor-pointer hover:bg-[#32c26e] text-white">
          <EditNoteOutlinedIcon className="" />
          <h2 className=" font-semibold ">Orders</h2>
        </div>
        <div className="flex items-center p-4 gap-4 border-b-2  hover: cursor-pointer hover:bg-[#32c26e] text-white">
          <QueryStatsOutlinedIcon className="" />
          <h2 className=" font-semibold ">Stats</h2>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
