import React from "react";
import Navbar from "./shared/Navbar";
import FilterJobs from "./FilterJobs";
import Job from "./Job";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function Jobs() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-[10%]">
            <FilterJobs />
          </div>

          {jobsArray.length <= 0 ? (
            <span>No Jobs Found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 grid-cols-1">
                {jobsArray.map((item, index) => (
                  <Job key={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
