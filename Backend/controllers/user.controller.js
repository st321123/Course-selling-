import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullname, email, phone, password, role } = req.body;

    if (!fullname || !email || !phone || !password || !role) {
      return res.status(400).json({
        message: "something is missing...",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "alredy registerd",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 8);
    const pattern = /^\d{10}$/;
    const validPhone = pattern.test(phone);
    if (!validPhone) {
      return res.status(401).json({
        message: "Invalid Phone Number(10 digits)",
        success: false,
      });
    }
    await User.create({
      fullname,
      email,
      phone,
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
      message: "Account Created Successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(401).json({
        message: "something is missing...",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Incorrect Email",
        success: false,
      });
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      return res.status(401).json({
        message: "Incorrect Password",
        success: false,
      });
    }
    if (role != user.role) {
      return res.status(401).json({
        message: "Account does not exit with current role",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };

    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: "Welcome Back " + user.fullname,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged Out Successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(400).json({
        message: " user Not found ",
        success: false,
      });
    }
    return res.status(201).json({
      message: " user found ",
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const update = async (req, res) => {
  try {
    const { email, password, phone, fullname, bio, skills } = req.body;

    const hashedPassword = await bcrypt.hash(password, 8);

    let skillArry = [];
    if (Array.isArray(skills)) {
      skillArry = skills;
    } else if (typeof skills === "string") {
      skillArry = skills.split(",");
    }

    const user = await User.findByIdAndUpdate(req.params.userId, {
      profile: { bio: bio || "", skills: skillArry },
      fullname,
      email,
      phone,
      password: hashedPassword,
    });
    await user.save();
    return res.status(201).json({
      message: "Profile Updated successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
