import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import Navbar from "./shared/Navbar";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobs from "./AppliedJobs";

const skillArray = ["HTML", "CSS", "JavaScript", "Reactjs"];
function Profile() {
  const haveResume = true;
  return (
    <div>
      <Navbar />
      <div className="bg-white max-w-4xl mx-auto my-5 p-8 rounded-2xl border border-gray-200">
        <div className="flex justify-between">
          <div className="items-center flex gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg" />
            </Avatar>

            <div>
              <h1 className="font-medium text-xl">FullName</h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>email@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center gap-3 my-2">
          <Contact />
          <span>1234567890</span>
        </div>
        <div>
          <h1 className="my-5 font-bold">Skills</h1>
          <div className="flex items-center gap-2">
            {skillArray.length ? (
              skillArray.map((item, index) => {
                return (
                  <Badge
                    className="text-red-600 font-bold"
                    variant="ghost"
                    key={index}
                  >
                    {item}
                  </Badge>
                );
              })
            ) : (
              <span className="text-sm ">Add Some Skills.</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1 my-5">
          <Label className="text-md font-bold ">Resume</Label>
          {haveResume ? (
            <a
              target="blank"
              className="text-blue-500 hover:underline cursor-pointer"
              href="https://global.rel.tunnels.api.visualstudio.com/auth/postback?pb=https%3A%2F%2Fdr2nj9hk-5173.inc1.devtunnels.ms%2Fauth%2Fpostback%2Fgithub%3Ftunnel%3D1&scheme=github"
            >
              Download
            </a>
          ) : (
            <p>No resume attached</p>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto rounded-2xl bg-white p-8">
        <h1 className="font-bold text-xl mb-4">Applied Jobs</h1>
        <AppliedJobs />
      </div>
    </div>
  );
}

export default Profile;
