import { Popover } from "@radix-ui/react-popover";
import React from "react";
import { PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

function Navbar() {
  return (
    <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
      <h1 className="text-2xl font-bold">
        Career<span className="text-[#F83200]">Wave</span>
      </h1>
      <div className="flex items-center gap-12">
        <ul className="flex text-x2l font-bold items-center gap-5">
          <li>Home</li>
          <li>Jobs</li>
          <li>Browse</li>
        </ul>
        <Popover>
          <PopoverTrigger asChild>
            <Avatar>
              <AvatarImage
                className="h-10 rounded-full"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
              />
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="mr-3">hellooo</PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default Navbar;
