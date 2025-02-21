import { useContext } from "react";
import Navbar from "../components/Navbar";
import { QuizContext } from "../context/QuizContext";

const Home = () => {
    const {navigate} = useContext(QuizContext);
  return (
    <div className=" w-full h-screen bg-[#FFF8E7] bg-[url(/bg_img_dark.png)] dark:bg-[url(/bg_img.png)] bg-center dark:bg-[#121212] text-black dark:text-white ">
      <Navbar />
      <div className="p=6 w-full h-[80vh] flex flex-col justify-center  items-center pt-28">
        <div className="w-fit space-y-3">
          <h1 className="font-archivo text-7xl sm:text-8xl md:text-9xl dark:[text-shadow:_5px_5px_0px_#F1C40F] [text-shadow:_5px_5px_0px_#FF5733]">
            QUIZART
          </h1>
          <div className="w-full flex items-center font-medium justify-around font-ibm text-[#333333] dark:text-[#bbbbbb] text-sm sm:text-base">
            <p>QUIZ</p>
            <p>CONQUER</p>
            <p>REPEAT</p>
          </div>
        </div>
        <div className="mt-20 [box-shadow:5px_5px_0px_#000000] dark:[box-shadow:5px_5px_0px_#FFFFFF] rounded-full active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]">
          <button onClick={() => navigate("/rule")} className="bg-[#FF5733] hover:bg-[#C70039] border-2 border-black dark:border-white dark:bg-[#F1C40F] dark:hover:bg-[#FFA500] dark:text-white text-black font-medium px-5 py-3 rounded-full font-ibm text-2xl">
            START QUIZ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
