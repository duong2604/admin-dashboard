import { Button, FormHelperText, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from "../features/productApiSlice";
import Loading from "./Loading";
import useAuth from "../hooks/auth";

const UpdateProduct = () => {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<any>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<any>();

  const navigate = useNavigate();
  const { id } = useParams();

  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const { isAuth } = useAuth();

  const { data: product } = useGetProductQuery(id);
  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setPrice(product.price);
      setDescription(product.description);
    }
  }, [product]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isAuth) return toast.warning("Please sign in...");
    if (!title || !price || !description) {
      return toast.error("Please input all fields.");
    }
    const data = new FormData();
    data.append("title", title);
    data.append("price", price);
    data.append("description", description);

    if (image && image[0]) {
      data.append("image", image[0]);
    }

    await updateProduct({ id: id, data }).then(() => {
      toast.success(`Updated successfully!`);
      navigate("/products");
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <form
        encType="multipart/form-data"
        className="flex flex-col gap-2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <FormHelperText id="outlined-weight-helper-text">Title</FormHelperText>
        <TextField
          fullWidth
          variant="outlined"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormHelperText id="outlined-weight-helper-text">Price</FormHelperText>
        <TextField
          fullWidth
          variant="outlined"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <FormHelperText id="outlined-weight-helper-text">
          Description
        </FormHelperText>
        <TextField
          fullWidth
          variant="outlined"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files)}
        />
        <Button variant="contained" type="submit">
          Update
        </Button>
      </form>
    </div>
  );
};
export default UpdateProduct;
