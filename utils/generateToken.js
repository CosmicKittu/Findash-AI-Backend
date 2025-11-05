import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config();

const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET, // define this in .env
    { expiresIn: "30d" } // token expires in 30 days
  );
};

export default generateToken;
