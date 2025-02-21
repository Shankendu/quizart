import { useContext, useEffect, useState } from "react";
import { mcq } from "../data/data.js";
import { QuizContext } from "../context/QuizContext";

const MCQ = () => {
  //Context
  const {
    setActiveTab,
    setMcqScore,
    selectMCQAnswer,
    setSelectMCQAnswer,
    mcqFeedback,
    setMcqFeedback,
    currentQuestion,
    setCurrentQuestion,
  } = useContext(QuizContext);

  //States
  const [timeLeft, setTimeLeft] = useState(30);

  //Timer
  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  //Function to handle next question
  const handleNext = () => {
    if (currentQuestion < mcq.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(30);
    } else if (currentQuestion === mcq.length - 1) {
      setActiveTab(1);
    }
  };

  //Function to handle answer
  const handleAnswer = (answer) => {
    const newSelectedAnswer = [...selectMCQAnswer];
    const newFeedback = [...mcqFeedback];
    newSelectedAnswer[currentQuestion] = answer;
    setSelectMCQAnswer(newSelectedAnswer);
    setMcqScore((prev) =>
      answer === mcq[currentQuestion].answer ? prev + 1 : prev
    );
    if (answer === mcq[currentQuestion].answer) {
      newFeedback[currentQuestion] = "Correct";
    } else {
      newFeedback[currentQuestion] = "Incorrect";
    }
    setMcqFeedback(newFeedback);
  };
  return (
    <div className="p-5 sm:p-10 flex flex-col items-center justify-center font-ibm">
      {/* Section for timer and question number */}
      <div className="flex justify-between w-full items-center">
        <p>
          Question: {currentQuestion + 1}/{mcq.length}
        </p>
        <p>Time left: 00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</p>
      </div>

      {/* Section for question */}
      <div className="pt-10 text-sm sm:text-base">
        <p className="font-ibm font-medium text-base sm:text-lg md:text-xl text-center">
          {mcq[currentQuestion].question}
        </p>
      </div>
      {/* Section for options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-10 justify-center items-center w-[100%] md:w-[70%]">
        {mcq[currentQuestion].options.map((option, index) => (
          <p
            onClick={() =>
              !selectMCQAnswer[currentQuestion] && handleAnswer(option)
            }
            key={index}
            className={` cursor-pointer px-10 py-2 border-2 border-black dark:border-white [box-shadow:5px_5px_0px_#000000] dark:[box-shadow:5px_5px_0px_#FFFFFF] rounded-full active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)] bg-[#FF5733] hover:bg-[#C70039] dark:bg-[#F1C40F] dark:hover:bg-[#FFA500] dark:text-white text-black text-sm sm:text-base md:text-lg ${
              selectMCQAnswer[currentQuestion] === option
                ? option === mcq[currentQuestion].answer
                  ? "bg-green-500 dark:bg-green-500 hover:bg-green-600 dark:hover:bg-green-600"
                  : "bg-red-700 dark:bg-red-700 hover:bg-red-800 dark:hover:bg-red-800"
                : selectMCQAnswer[currentQuestion] !== null &&
                  option === mcq[currentQuestion].answer
                ? "bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600"
                : ""
            }`}
          >
            {option}
          </p>
        ))}
      </div>
      {/* Section for feedback */}
      <div>
        {mcqFeedback[currentQuestion] && (
          <p className="pt-10 text-lg font-archivo italic">
            {mcqFeedback[currentQuestion] === "Correct"
              ? "Correct Answer!!!"
              : "Incorrect Answer!!!"}
          </p>
        )}
      </div>

      {/* Section for previous and next buttons */}
      <div className="w-full flex justify-end pt-10">
        <button
          onClick={
            currentQuestion === mcq.length ? setActiveTab(1) : handleNext
          }
          disabled={!selectMCQAnswer[currentQuestion]}
          className="cursor-pointer px-10 py-2 border-2 border-black dark:border-white [box-shadow:5px_5px_0px_#000000] dark:[box-shadow:5px_5px_0px_#FFFFFF] rounded-full active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)] hover:bg-[#FF5733] bg-[#C70039] dark:hover:bg-[#F1C40F] dark:bg-[#FFA500] dark:text-white text-black disabled:cursor-not-allowed"
        >
          {currentQuestion === mcq.length - 1 ? "GO TO INTEGER" : "NEXT"}
        </button>
      </div>
    </div>
  );
};

export default MCQ;
