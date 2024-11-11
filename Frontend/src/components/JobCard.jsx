import React from "react";
import { Badge } from "./ui/badge";

function JobCard({ job }) {
  return (
    <div className="p-5 rounded-xl shadow-xl bg-white border border-gray-200 cursor-pointer">
      <div>
        <h1 className="font-medium text-lg">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">{job?.location}</p>
      </div>
      <div>
        <h1 className="font-medium text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-500">{job?.description}</p>
      </div>
      <div className="space-x-2">
        <Badge className="text-blue-600 font-bold" variant="ghost">
          {job.openings} Position
        </Badge>
        <Badge className="text-red-600 font-bold" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-purple-600 font-bold" variant="ghost">
          {job?.salary / 100000} LPA
        </Badge>
      </div>
    </div>
  );
}

export default JobCard;
