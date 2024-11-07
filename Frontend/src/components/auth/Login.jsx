import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userUrl } from "@/utils/constants";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

function Login() {
  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${userUrl}/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");

        toast.success(res.data.message);
      }
      console.log(input);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-grey-200 p-4 rounded-md my-10 bg-white"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label>Email </Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              className="rounded"
            />
          </div>
          <div className="my-2">
            <Label>Password </Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              className="rounded"
            />
          </div>
          <RadioGroup className="flex items-center space-x-5 my-5">
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                checked={input.role === "student"}
                value="student"
                id="student"
                onChange={changeEventHandler}
              />
              <Label htmlFor="student">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                checked={input.role === "recruiter"}
                value="recruiter"
                id="recruiter"
                onChange={changeEventHandler}
              />
              <Label htmlFor="recruiter">Recruiter</Label>
            </div>
          </RadioGroup>
          {loading ? (
            <Button
              variant="outline"
              className="w-full text-white bg-black rounded-md mb-3 rounded-xl "
            >
              <Loader2 className="animate-spin mr-2 hover:text-black" />
              Please Wait
            </Button>
          ) : (
            <Button
              type="Submit"
              variant="outline"
              className="w-full text-white bg-black rounded-md mb-3 hover:text-black rounded-xl"
            >
              Login
            </Button>
          )}

          <span className="text-sm ">
            Don't have an account?
            <Link to="/signup" className="text-blue-700 ml-3">
              SignUp
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
