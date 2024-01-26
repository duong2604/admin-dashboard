import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../components";
import { Stack } from "@mui/material";

const DashboardLayout = () => {
  return (
    <Stack direction={`row`}>
      <div className="min-w-[250px]">
        <Sidebar />
      </div>
      <Stack className="w-full">
        <Header />
        <div className="p-5">
          <Outlet />
        </div>
      </Stack>
    </Stack>
  );
};
export default DashboardLayout;
