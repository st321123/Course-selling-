import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

function Job() {
  const navigate = useNavigate();
  const jobId = "sdfjk";
  return (
    <div className="w-[80%] mx-auto p-5 rounded shadow-xl bg-white border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">CompanyName</h1>
          <p className="text-sm text-gray-500">contry</p>
        </div>
      </div>
      <div>
        <h1 className="font-medium text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-500">description</p>
      </div>
      <div>
        <Badge className="text-blue-600 font-bold" variant="ghost">
          12 positions
        </Badge>
        <Badge className="text-red-600 font-bold" variant="ghost">
          PartTime
        </Badge>
        <Badge className="text-purple-600 font-bold" variant="ghost">
          24LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          variant="outline"
          className="rounded-full bg-[#1995AD] text-white"
          onClick={() => navigate("/description/" + { jobId })}
        >
          Details
        </Button>
        <Button
          variant="outline"
          className="rounded-full bg-[#1995AD] text-white"
        >
          Save for Later
        </Button>
      </div>
    </div>
  );
}

export default Job;
