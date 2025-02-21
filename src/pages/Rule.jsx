import { useContext } from "react";
import assets from "../assets/assets.js";
import { QuizContext } from "../context/QuizContext.jsx";

const Rule = () => {
  const { isDarkMode, navigate } = useContext(QuizContext);
  return (
    <div className="w-full h-screen bg-[#FFF8E7] bg-[url(/bg_img_dark.png)] dark:bg-[url(/bg_img.png)] bg-center dark:bg-[#121212] text-black dark:text-white flex justify-center items-center ">
      <div className="w-[80%] border-2 border-black dark:border-white rounded-lg bg-[#FFDD67] dark:bg-[#1E1E1E] [box-shadow:5px_5px_0px_#000000] dark:[box-shadow:5px_5px_0px_#FFFFFF]">
        <div className="flex justify-between items-center px-4 py-2 border-b-2 border-black dark:border-white">
          <section className="">
            <img className="h-6" src={assets.logo} alt="logo" />
          </section>
          <section>
            <img
              src={isDarkMode ? assets.cross_dark : assets.cross}
              alt="cross"
            />
          </section>
        </div>
        <div className="bg-[#FFF8E7] dark:bg-[#121212] p-5 rounded-b-lg">
          <h1 className="font-ibm text-2xl">INSTRUCTIONS:</h1>
          <div className="space-y-3 font-ibm pt-5">
            <p>
              1. For multiple-choice questions, select the one best answer (A,
              B, C, or D).
            </p>
            <p>
              2. For integer-type questions, write your numerical answer
              clearly.
            </p>
            <p>3. No calculators unless specified.</p>
            <p>4. You have 30 seconds for each question to answer.</p>
          </div>
          <div className="w-full flex justify-end pt-10">
            <div className="[box-shadow:5px_5px_0px_#000000] dark:[box-shadow:5px_5px_0px_#FFFFFF] rounded-full active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]">
              <button
                onClick={() => navigate("/quiz")}
                className="bg-[#FF5733] hover:bg-[#C70039] border-2 border-black dark:border-white dark:bg-[#F1C40F] dark:hover:bg-[#FFA500] dark:text-white text-black font-medium px-5 py-3 rounded-full font-ibm text-2xl"
              >
                START
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rule;
