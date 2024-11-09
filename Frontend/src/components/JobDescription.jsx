import React from "react";
import Navbar from "./shared/Navbar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

function JobDescription() {
  const applied = true;
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-lg my-2">Job Title</h1>
            <div className="flex items-center gap-2 mt-4">
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
          <Button
            disabled={applied}
            className={`rounded-full ${
              applied
                ? "bg-gray-400 cursor-not-allowed "
                : " bg-[#1995AD] text-white cursor-pointer"
            }`}
            variant="outline"
          >
            {applied ? "Already Applied" : "Apply Now"}
          </Button>
        </div>
        <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
          Job Description
        </h1>
        <div>
          <h1 className="font-bold my-1">
            Role:
            <span className="pl-4 font-normal text-gray-800">Frontend</span>
          </h1>
          <h1 className="font-bold my-1">
            Location:
            <span className="pl-4 font-normal text-gray-800">Banglore</span>
          </h1>
          <h1 className="font-bold my-1">
            Experience:
            <span className="pl-4 font-normal text-gray-800">5years</span>
          </h1>
          <h1 className="font-bold my-1">
            Salary:
            <span className="pl-4 font-normal text-gray-800">5LPA</span>
          </h1>
          <h1 className="font-bold my-1">
            Total Applications:
            <span className="pl-4 font-normal text-gray-800">15</span>
          </h1>
          <h1 className="font-bold my-1">
            Date Posted:
            <span className="pl-4 font-normal text-gray-800">14-Nov-2024</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
