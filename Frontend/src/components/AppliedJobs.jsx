import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

const AppliedJobsData = [1, 2, 3, 4];
function AppliedJobs() {
  return (
    <div>
      <Table>
        <TableCaption>List of Applied Jobs</TableCaption>
        <TableHeader>
          <TableRow className="font-bold text-lg">
            <TableHead>Date</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {AppliedJobsData.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell>12nov2024</TableCell>
                <TableCell>frontend</TableCell>
                <TableCell>google</TableCell>
                <TableCell className="text-right">
                  <Badge className="text-green-600">accepted</Badge>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default AppliedJobs;
