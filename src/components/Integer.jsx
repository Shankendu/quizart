import { useContext, useEffect, useState } from "react";
import { integer } from "../data/data.js";
import { QuizContext } from "../context/QuizContext.jsx";
import { get, set } from "idb-keyval";

const Integer = () => {
  //States
  const [timeLeft, setTimeLeft] = useState(30);
  const [input, setInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  //Context
  const {
    currentIntQuestion,
    setCurrentIntQuestion,
    intAnswer,
    setIntAnswer,
    intFeedback,
    setIntFeedback,
    setIntScore,
    setActiveTab,
    db,
    setHistory,
    mcqScore,
    intScore,
    username,
    history,
  } = useContext(QuizContext);

  //Function to submit answer
  const submitAnswer = () => {
    if (input.trim() === "") {
      // Check if the input is empty
      return; // If it is, do nothing
    }
    if (parseInt(input) === integer[currentIntQuestion].answer) {
      // Check if the answer is correct
      setIntScore((prev) => prev + 1); // Increment the score by 1
    }
    const newIntAnswer = [...intAnswer]; // Create a copy of the answer array
    const newIntFeedback = [...intFeedback]; // Create a copy of the feedback array
    newIntAnswer[currentIntQuestion] = input; // Add the input to the answer array
    setIntAnswer(newIntAnswer); // Update the answer array
    integer[currentIntQuestion].answer === parseInt(input) // Check if the answer is correct
      ? (newIntFeedback[currentIntQuestion] = "Correct") // Update the feedback array to "Correct"
      : (newIntFeedback[currentIntQuestion] = "Incorrect"); // Update the feedback array to "Incorrect"
    setIntFeedback(newIntFeedback); //Update the feedback array
    setIsSubmitted(true);
  };

  //Fetching saved answer
  useEffect(() => {
    const savedAnswer = intAnswer[currentIntQuestion] || ""; // Get the saved answer
    setInput(savedAnswer); // Set the input
    setIsSubmitted(savedAnswer !== ""); // If there's an answer, disable input
  }, [currentIntQuestion, intAnswer]);

  //Timer
  useEffect(() => {
    if (timeLeft === 0) {
      // Check if the timer has reached 0
      handleNext(); // Move to the next question  if the timer has reached 0
    }
    if (timeLeft === 0 && currentIntQuestion === integer.length - 1) {
      // Check if the timer has reached 0 for the last question
      setActiveTab(2); // Move to the result tab
    }
    const timer = setInterval(() => {
      // Start the timer
      setTimeLeft((prev) => prev - 1); // Decrement the timer by 1 second
    }, 1000);
    return () => clearInterval(timer); // Clean up the timer
  }, [timeLeft]);

  //Function to handle next question
  const handleNext = () => {
    if (currentIntQuestion < integer.length - 1) {
      // Check if there are more questions
      setCurrentIntQuestion((prev) => prev + 1); // Move to the next question
      setTimeLeft(30); // Reset the timer
    } else {
      setActiveTab(2);
      const newHistory = [
        ...history,
        {
          username,
          score: mcqScore + intScore,
          date: new Date().toLocaleString(),
        },
      ];
      set("attempt", newHistory, db);
      setHistory(newHistory);
    }
  };
  return (
    <div className="p-5 sm:p-10 flex flex-col items-center justify-center font-ibm">
      {/* Section for Time and Question Number */}
      <div className="flex justify-between w-full items-center text-sm sm:text-base">
        <p>
          Question: {currentIntQuestion + 1}/{integer.length}
        </p>
        <p>Time left: 00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</p>
      </div>
      {/* Section for Question */}
      <div className="pt-10">
        <p className="font-ibm font-medium text-xl">
          {integer[currentIntQuestion].question}
        </p>
      </div>
      {/* Section for Input and Submit Button */}
      <div className="mt-5 border-2 border-black dark:border-white rounded-full [box-shadow:5px_5px_0px_#000000] dark:[box-shadow:5px_5px_0px_#FFFFFF] pl-2 md:pl-4 py-1 md:py-2 pr-2 flex justify-between">
        <input
          disabled={isSubmitted}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          type="number"
        />
        <button
          disabled={isSubmitted}
          onClick={submitAnswer}
          className="disabled:cursor-not-allowed cursor-pointer h-12 w-12 rounded-full bg-[#FF5733] hover:bg-[#C70039] dark:bg-[#F1C40F] dark:hover:bg-[#FFA500]"
        >
          OK
        </button>
      </div>
      {/* Section for Feedback */}
      <div>
        {intFeedback[currentIntQuestion] && (
          <p className="pt-10 text-lg font-archivo italic">
            {intFeedback[currentIntQuestion] === "Correct"
              ? "Correct Answer!!!"
              : "Incorrect Answer!!!"}
          </p>
        )}
      </div>
      {/* Section for Previous and Next Button */}
      <div className="w-full flex justify-end pt-10">
        <button
          onClick={handleNext}
          disabled={
            currentIntQuestion === integer.length ||
            !intAnswer[currentIntQuestion]
          }
          className="cursor-pointer px-10 py-2 border-2 border-black dark:border-white [box-shadow:5px_5px_0px_#000000] dark:[box-shadow:5px_5px_0px_#FFFFFF] rounded-full active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)] hover:bg-[#FF5733] bg-[#C70039] dark:hover:bg-[#F1C40F] dark:bg-[#FFA500] dark:text-white text-black disabled:cursor-not-allowed"
        >
          {currentIntQuestion === integer.length - 1 ? "SUBMIT" : "NEXT"}
        </button>
      </div>
    </div>
  );
};

export default Integer;
