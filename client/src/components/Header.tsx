import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { Button, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../features/authSlice";
import useAuth from "../hooks/auth";

const Header = () => {
  const dispatch = useDispatch();

  const { isAuth } = useAuth();

  return (
    <Stack
      direction={`row`}
      justifyContent={"space-between"}
      alignItems={"center"}
      className="p-2 bg-[#1977bb]"
    >
      <h2 className="text-white hover:cursor-pointer">
        <ListOutlinedIcon fontSize="large" />
      </h2>

      {isAuth ? (
        <div className="mr-4 flex gap-2">
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              dispatch(signOut());
            }}
          >
            Sign out
          </Button>
        </div>
      ) : (
        <div className="mr-4 flex gap-2">
          <Button variant="contained" color="success">
            <Link to={`/login`}>Sign in</Link>
          </Button>

          <Button variant="contained" color="secondary">
            <Link to={`/register`}>Sign up</Link>
          </Button>
        </div>
      )}
    </Stack>
  );
};
export default Header;
