import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import { applicationUrl, jobUrl } from "@/utils/constants";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "sonner";

function JobDescription() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const { user } = useSelector((store) => store.auth);
  const [applied, setApplied] = useState(
    job?.applications?.some(
      (application) => application.applicant === user?._id
    )
  );
  console.log("This is applied ",applied);
  

  const applyButtonHandler = async () => {
    try {
      const res = await axios.get(`${applicationUrl}/apply/${id}`, {
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setApplied(true);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${jobUrl}/get/${id}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          setJob(res.data.job);
          setApplied(
            res.data.job?.applications?.some(
              (application) => application.applicant === user?._id
            )
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [id]);

  return (
    <div>
      <Navbar />
      {!user ? (
        <h1 className="text-4xl text-center my-auto">
          You need to login first
        </h1>
      ) : (
        <div className="max-w-4xl mx-auto my-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-bold text-lg my-2">{job?.title}</h1>
              <div className="flex items-center gap-2 mt-4">
                <Badge className="text-blue-600 font-bold" variant="ghost">
                  {job?.openings} Position
                </Badge>
                <Badge className="text-red-600 font-bold" variant="ghost">
                  {job?.jobType}
                </Badge>
                <Badge className="text-purple-600 font-bold" variant="ghost">
                  {job?.salary / 100000} LPA
                </Badge>
              </div>
            </div>
            <Button
              disabled={applied}
              onClick={applyButtonHandler}
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
          <h1 className="border-b-2 font-bold my-1 border-b-gray-300 py-4">
            Description: <br></br>
            <span className="font-normal text-gray-800">
              {job?.description}
            </span>
          </h1>
          <div>
            <h1 className="font-bold my-1">
              Role:
              <span className="pl-4 font-normal text-gray-800">
                {job?.role}
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Location:
              <span className="pl-4 font-normal text-gray-800">
                {job?.location}
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Experience:
              <span className="pl-4 font-normal text-gray-800">
                {job?.experience} years
              </span>
            </h1>
            <h1 className="font-bold my-1">
              JobType:
              <span className="pl-4 font-normal text-gray-800">
                {job?.jobType}
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Salary:
              <span className="pl-4 font-normal text-gray-800">
                {job?.salary / 100000}LPA
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Total Openings:
              <span className="pl-4 font-normal text-gray-800">
                {job?.openings}
              </span>
            </h1>
            <h1 className="font-bold my-1">
              Date Posted:
              <span className="pl-4 font-normal text-gray-800">
                {job?.createdAt.split("T")[0]}
              </span>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobDescription;
