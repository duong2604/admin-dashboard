import DeleteIcon from "@mui/icons-material/Delete";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../features/productApiSlice";
import useAuth from "../hooks/auth";
import Loading from "./Loading";

const ProductsList = () => {
  const { data: products, isLoading } = useGetAllProductsQuery();
  const { isAuth } = useAuth();

  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    if (!isAuth) return toast.warning("Please sign in...");
    await deleteProduct(id).then(() => {
      toast.success("Deleted success!");
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Stack gap={2} className="overflow-y-scroll">
      <div>
        <Link to={"/add-product"}>
          <Button variant="outlined" className="mb-4">
            Add new product
          </Button>
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell align="center">No</TableCell>
              <TableCell align="left">Image</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="overflow-y-scroll">
            {products &&
              products.map((item, index) => {
                return (
                  <TableRow key={`${item._id}`}>
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="center" className="flex items-center">
                      <div>
                        <img
                          src={item.image}
                          alt=""
                          className="w-[80px] h-[80px] "
                        />
                      </div>
                    </TableCell>
                    <TableCell align="center">{item.title}</TableCell>
                    <TableCell align="center">
                      {isAuth ? item.price : "Contact"}
                    </TableCell>
                    <TableCell align="center">
                      {item.description.substring(0, 50)}
                    </TableCell>
                    <TableCell align="center">
                      <Link to={`/update-products/${item._id}`}>
                        <Button>
                          <EditCalendarIcon />
                        </Button>
                      </Link>
                      <Button onClick={(e) => handleDelete(e, item._id!)}>
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default ProductsList;
