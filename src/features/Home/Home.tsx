import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Home
      <Link to="/auth/login">Login</Link>
      <Link to="/student/dashboard">Student Dashboard</Link>
    </div>
  );
}

export default Home;
