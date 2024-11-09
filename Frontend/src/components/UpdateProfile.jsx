import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { userUrl } from "@/utils/constants";
import { setUser } from "../redux/authSlice.js";
import { toast } from "sonner";
import axios from "axios";

function UpdateProfile({ update, setUpdate }) {
  const { user } = useSelector((store) => store.auth);

  const id = user._id;
  const [inputData, setInputData] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phone: user?.phone,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills,
    password: user?.password,
    //resume: user?.profile?.resume,
  });
  const dispatch = useDispatch();
  const changeEventHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${userUrl}/profile/update/${id}`,
        inputData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUpdate(false);
  };
  return (
    <div>
      <Dialog open={update}>
        <DialogContent
          className="bg-white sm:max-w[425px]"
          onInteractOutside={() => setUpdate(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  value={inputData.fullname}
                  id="name"
                  name="name"
                  className="col-span-3"
                  onChange={changeEventHandler}
                  type="text"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  value={inputData.email}
                  id="email"
                  name="email"
                  type="email"
                  className="col-span-3"
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <Input
                  value={inputData.password}
                  id="password"
                  name="password"
                  className="col-span-3"
                  onChange={changeEventHandler}
                  type="text"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone
                </Label>
                <Input
                  value={inputData.phone}
                  id="phone"
                  name="phone"
                  type="number"
                  className="col-span-3"
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input
                  value={inputData.bio}
                  id="bio"
                  name="bio"
                  className="col-span-3"
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <Input
                  value={inputData.skills}
                  id="skills"
                  name="skills"
                  type="text"
                  className="col-span-3"
                  onChange={changeEventHandler}
                />
              </div>
              {/* <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="resume" className="text-right">
                  Resume
                </Label>
                <Input
                  value={inputData.profile.resume}
                  id="resume"
                  type="file"
                  name="resume"
                  accept="application/pdf"
                  className="col-span-3"
                  onChange={changeEventHandler}
                />
              </div> */}
            </div>
            <DialogFooter>
              <Button
                type="Submit"
                variant="outline"
                className="w-full text-white bg-black rounded-md mb-3 hover:text-black rounded-xl"
              >
                Update
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UpdateProfile;
