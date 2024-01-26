import mongoose from "mongoose";

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    if (process.env.NODE_ENV !== "production") {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    switch (type) {
      case "mongodb":
        mongoose
          .connect(process.env.MONGO_URI)
          .then(() => console.log(`Mongodb ::: connected`.blue))
          .catch((err) => console.log(`Failed to connect to mongodb`.red, err));

        break;

      default:
        console.log(`Something went wrong from database connection.`);
        break;
    }
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const mongodbInstance = Database.getInstance();

export default mongodbInstance;
