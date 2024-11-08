import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Location",
    arr: ["Delhi", "Banglore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Role",
    arr: ["Frontend", "Backend", "FullStack"],
  },
  {
    filterType: "Salary",
    arr: ["0-40K", "41-1lakh", "1lakh-5lakh"],
  },
];

function FilterJobs() {
  return (
    <div className="w-full bg-white p-3 rounded">
      <h1 className="font-bold text-lg">FilterJobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => {
          return (
            <div>
              <h1 className="text-lg font-bold">{data.filterType}</h1>
              {data.arr.map((item, index) => {
                return (
                  <div className="flex items-center space-x-2 my-2">
                    <RadioGroupItem value={item} />
                    <Label className="">{item}</Label>
                  </div>
                );
              })}
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
}

export default FilterJobs;
