import React from "react";

// import SignIn from "./components/auth/SignIn";
// import SignUp from "./components/auth/SignUp";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar/Navbar";
// import Carousel from "./components/Home/Slider";
// import HomePage from "./Pages/Home/Page";
import NotFound from "./Pages/NotFount/Page";
import HomePage from "./Pages/Home/Page";

const App: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <TopBar />
      <Navbar />
      <div className="">
        <HomePage />
      </div>
      {/* <NotFound /> */}
    </React.Fragment>
  );
};

export default App;

    
