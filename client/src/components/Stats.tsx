import { Stack } from "@mui/material";
import BiaxialLineChart from "./BiaxialLineChart";
import BasicLineChart from "./BasicLineChart";
import BarChart from "./BarChart";

const Stats = () => {
  return (
    <Stack className="">
      <Stack direction={`row`}>
        <BiaxialLineChart />
        <BasicLineChart />
      </Stack>
      <Stack>
        <BarChart />
      </Stack>
    </Stack>
  );
};
export default Stats;
