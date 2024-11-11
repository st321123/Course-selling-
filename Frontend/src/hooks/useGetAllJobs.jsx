import axios from "axios";
import React, { useEffect } from "react";
import { jobUrl } from "@/utils/constants";
import { useDispatch } from "react-redux";
import { setAllJobs } from "@/redux/jobSlice";

function useGetAllJobs() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${jobUrl}/alljobs`, {
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllJobs();
  }, []);
}

export default useGetAllJobs;
