import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthService {
  static signup = async ({ firstName, lastName, email, password }) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("This email have been used.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      password: hashedPassword,
      email,
    });

    return newUser;
  };

  static signin = async ({ email, password }) => {
    const foundedUser = await User.findOne({ email });
    if (!foundedUser) {
      throw new Error("Miss email or password!");
    }
    const isMatchedPassword = await bcrypt.compare(
      password,
      foundedUser.password
    );
    if (!isMatchedPassword) {
      throw new Error("Miss email or password!");
    }

    const accessToken = jwt.sign(
      { userId: foundedUser._id },
      process.env.ACCESS_TOKEN_KEY,
      { expiresIn: "15m" }
    );

    return { foundedUser, accessToken };
  };
}

export default AuthService;
