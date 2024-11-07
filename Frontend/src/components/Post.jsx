import { Search } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

function Post() {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="text-[#1995AD]font-medium bg-gray-400 rounded-full px-4 py-2 mx-auto">
          No.1 Job Hunt Website
        </span>
        <h1 className="text-4xl font-bold">
          Search, Apply & <br />
          Get Your <span className="text-[#1995AD]">Dream Job</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
          labore quos est asperiores adipisci officia laborum animi possimus
          praesentium architecto voluptas expedita unde. Vel aliquam saepe
          voluptatum! Eligendi, quidem sunt.
        </p>
        <div className="flex w-[40%] shadow-lg border-gray-200 overflow-hidden rounded-full mx-auto">
          <input
            type="text"
            placeholder="find your dream job"
            className="outline-none border-none w-full pl-3"
          />
          <Button className="rounded-r-full bg-[#A1D6E2]">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Post;
