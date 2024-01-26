import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddProductMutation } from "../features/productApiSlice";
import Loading from "./Loading";
import useAuth from "../hooks/auth";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<any>();
  const navigate = useNavigate();
  const [addProduct, { isLoading }] = useAddProductMutation();

  const { isAuth } = useAuth();

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
      console.log(image[0]);
    }

    await addProduct(data).then(() => {
      toast(`Created a product!`);
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
        <TextField
          fullWidth
          variant="outlined"
          label="Title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Description"
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
          Add new product
        </Button>
      </form>
    </div>
  );
};
export default AddProduct;
