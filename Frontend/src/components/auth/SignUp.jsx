import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { userUrl } from "../../utils/constants.js";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
function SignUp() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   submitHandler();
  // }, []);
  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${userUrl}/register`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  }

  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-grey-200 p-4 rounded-md my-10 bg-white"
        >
          <h1 className="font-bold text-xl mb-5">SignUp</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              className="rounded"
            />
          </div>
          <div className="my-2">
            <Label>Email </Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              className="rounded"
            />
          </div>
          <div className="my-2">
            <Label>Password </Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              className="rounded"
            />
          </div>
          <div className="my-2">
            <Label>Phone </Label>
            <Input
              type="phone"
              value={input.phone}
              name="phone"
              onChange={changeEventHandler}
              className="rounded"
            />
          </div>
          <RadioGroup className="flex items-center space-x-5 my-5">
            <div className="flex items-center space-x-2 ">
              <Input
                type="radio"
                name="role"
                value="student"
                id="student"
                checked={input.role === "student"}
                onChange={changeEventHandler}
              />
              <Label htmlFor="student">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="recruiter"
                id="recruiter"
                checked={input.role === "recruiter"}
                onChange={changeEventHandler}
              />
              <Label htmlFor="recruiter">Recruiter</Label>
            </div>
          </RadioGroup>
          <div>
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
                SignUp
              </Button>
            )}
          </div>

          <span className="text-sm ">
            Already have an account?
            <Link to="/login" className="text-blue-700 ml-3">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
