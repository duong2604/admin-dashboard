import AuthService from "../services/auth.js";

class AuthController {
  static signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      throw new Error("Bad request!");
    }

    const newUser = await AuthService.signup(req.body);

    res.status(201).json({
      message: "sign up success!",
      metadata: { user: newUser },
    });
  };

  static signin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Bad request!");
    }

    const { foundedUser, accessToken } = await AuthService.signin(req.body);

    res.status(200).json({
      message: "sign in success!",
      metadata: {
        user: foundedUser,
        accessToken: accessToken,
      },
    });
  };
}

export default AuthController;
