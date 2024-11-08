import { Popover } from "@radix-ui/react-popover";
import React from "react";
import { PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LogOut, User2 } from "lucide-react";
function Navbar() {
  const { user } = useSelector((store) => store.auth);
  return (
    <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
      <h1 className="text-2xl font-bold">
        Career<span className="text-[#1995AD]">Wave</span>
      </h1>
      <div className="flex items-center gap-12">
        <ul className="flex text-xl font-bold items-center gap-5">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/jobs">
            <li>Jobs</li>
          </Link>
          <Link to="/browse">
            <li>Browse</li>
          </Link>
        </ul>
        {!user ? (
          <div className="flex items-center gap-2 h-5 ">
            <Link to="/login">
              <Button
                variant="outline"
                className="bg-black text-white rounded-xl"
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                variant="outline"
                className="bg-black text-white hover:text-black rounded-xl"
              >
                SignUp
              </Button>
            </Link>
          </div>
        ) : (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar>
                <AvatarImage
                  className="h-10 rounded-full cursor-pointer"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="mr-3 bg-white">
              <div className="flex gap-5">
                <Avatar>
                  <AvatarImage
                    className="rounded-full h-10 w-10 max-w-none"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
                  />
                </Avatar>

                <div>
                  <h1 className="font-medium">Name</h1>
                  <p className="text-sm ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex flex-col text-gray-600">
                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <User2 />
                  <Button variant="link">
                    <Link to="/profile">View Profile</Link>
                  </Button>
                </div>
                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <LogOut />
                  <Button variant="link">Logout</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
}

export default Navbar;
