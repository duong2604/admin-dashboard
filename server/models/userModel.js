import mongoose from "mongoose";

const COLLECTION_NAME = "Users";
const DOCUMENT_NAME = "User";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    avatar: String,
    avatarPublicId: String,
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

userSchema.method.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
};

export default mongoose.model(DOCUMENT_NAME, userSchema);
