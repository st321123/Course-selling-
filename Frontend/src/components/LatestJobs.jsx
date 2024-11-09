import React from "react";
import JobCard from "./JobCard";

const jobArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function LatestJobs() {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#1995AD]">Latest & Top </span>Job openings...
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5 ">
        {jobArray.slice(0, 6).map((item, index) => {
          return <JobCard key={index} />;
        })}
      </div>
    </div>
  );
}

export default LatestJobs;
