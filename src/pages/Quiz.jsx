import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";


const Quiz = () => {
  const {
    tabs,
    setActiveTab,
    activeTab,
    selectMCQAnswer,
    currentQuestion,
    mcqFeedback,
    intFeedback,
    currentIntQuestion,
  } = useContext(QuizContext);
  const ActiveComponent = tabs[activeTab].component;
  return (
    <div
      className={`w-full h-screen bg-[url(/bg_img_dark.png)] dark:bg-[url(/bg_img.png)] bg-center text-black dark:text-white flex justify-center items-center 
    ${
      activeTab === 0
        ? mcqFeedback[currentQuestion] === "Correct"
          ? "bg-green-200 dark:bg-green-700"
          : mcqFeedback[currentQuestion] === "Incorrect"
          ? "bg-red-200 dark:bg-red-800"
          : "bg-[#FFF8E7] dark:bg-[#121212]"
        : activeTab === 1
        ? intFeedback[currentIntQuestion] === "Correct"
          ? "bg-green-200 dark:bg-green-700"
          : intFeedback[currentIntQuestion] === "Incorrect"
          ? "bg-red-200 dark:bg-red-800"
          : "bg-[#FFF8E7] dark:bg-[#121212]"
        : "bg-[#FFF8E7] dark:bg-[#121212]"
    }`}
    >
      <div className="flex flex-col items-start w-[80%] ">
        <div className={`border-2 border-b-0 border-black dark:border-white rounded-t-lg bg-[#FFDD67] dark:bg-[#1E1E1E] [box-shadow:5px_5px_0px_#000000] dark:[box-shadow:5px_5px_0px_#FFFFFF] flex overflow-hidden ${activeTab === 2 ? "hidden " : ""}`}>
          {tabs.slice(0,2).map((tab, index) => (
            <p
              key={index}
              onClick={() => {
                if (tab.name === "Integer" && selectMCQAnswer.includes(null)) {
                  return; // Disable Integer tab
                }
                setActiveTab(index);
              }}
              className={`px-5 py-3 first:border-r-2 border-black dark:border-white ${
                tab.name === "Integer" && selectMCQAnswer.includes(null)
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              } ${
                activeTab === index
                  ? "bg-[#FF5733] dark:bg-[#F1C40F] dark:hover:bg-[#FFA500] hover:bg-[#C70039]"
                  : "bg-[#FFDD67] dark:bg-[#1E1E1E]"
              } font-ibm `}
            >
              {tab.name}
            </p>
          ))}
        </div>
        <div className={`w-[100%] border-2 border-black dark:border-white rounded-tr-lg rounded-b-lg bg-[#FFDD67] dark:bg-[#1E1E1E] [box-shadow:5px_5px_0px_#000000] dark:[box-shadow:5px_5px_0px_#FFFFFF] ${activeTab === 2 ? "rounded-lg " : ""}`}>
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
