import React from "react";
import Navbar from "./shared/Navbar";
import Post from "./Post";
import CategoryCrousel from "./CategoryCrousel";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Post />
      <CategoryCrousel />
      <LatestJobs />
      <Footer />
    </div>
  );
}

export default Home;
