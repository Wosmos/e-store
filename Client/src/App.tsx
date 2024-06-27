import React from "react";

// import SignIn from "./components/auth/SignIn";
// import SignUp from "./components/auth/SignUp";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar/Navbar";
// import Carousel from "./components/Home/Slider";
import HomePage from "./components/Home/Page";

function App() {
  return (
    <React.Fragment>
      <TopBar />
      <Navbar />
      <div className="">
        <HomePage />
      </div>

      {/* <SignIn/> */}
      {/* <SignUp/> */}
    </React.Fragment>
  );
}

export default App;
