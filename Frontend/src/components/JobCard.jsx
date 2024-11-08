import React from "react";
import { Badge } from "./ui/badge";

function JobCard() {
  return (
    <div className="p-5 rounded-xl shadow-xl bg-white border border-gray-200 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">CompanyName</h1>
        <p className="text-sm text-gray-500">contry</p>
      </div>
      <div>
        <h1 className="font-medium text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-500">description</p>
      </div>
      <div className="space-x-2">
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
    </div>
  );
}

export default JobCard;
