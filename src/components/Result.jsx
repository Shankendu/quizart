import { useContext } from "react";
import { integer, mcq } from "../data/data";
import { QuizContext } from "../context/QuizContext";

const Result = () => {
  const {
    selectMCQAnswer,
    intAnswer,
    mcqScore,
    intScore,
    navigate,
    setActiveTab,
    setMcqScore,
    setIntScore,
    setCurrentIntQuestion,
    setCurrentQuestion,
    setSelectMCQAnswer,
    setIntAnswer,
    setIntFeedback,
    setMcqFeedback, setUsername
  } = useContext(QuizContext);

  return (
    <div className="p-5 sm:p-10 flex items-center justify-center flex-col w-full font-ibm">
      <div>
        <h1 className="font-archivo text-3xl sm:text-5xl dark:[text-shadow:_4px_4px_0px_#F1C40F] [text-shadow:_4px_4px_0px_#FF5733] text-black dark:text-white">
          &#8226; RESULT &#8226;
        </h1>
      </div>
      <div className="pt-5 w-full sm:block hidden ">
        <table className="w-full ">
          <thead className="w-full">
            <tr className="border-b-2 border-black dark:border-white w-[100%]">
              <th className="pr-10 w-[60%] text-left">Question</th>
              <th className="pr-10 w-[20%] text-left">Answer</th>
              <th className="w-[20%] text-left">Correct Answer</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {mcq.map((question, index) => (
              <tr
                key={question.id}
                className="border-b-1 border-black dark:border-white w-full text-sm"
              >
                <td className="pr-10 w-[60%] text-left py-1">
                  {question.question}
                </td>
                <td
                  className={`pr-10 w-[20%] text-left py-1 ${
                    selectMCQAnswer[index] === question.answer
                      ? "text-green-500"
                      : "text-red-700"
                  }`}
                >
                  {selectMCQAnswer[index]}
                </td>
                <td className="w-[20%] text-left py-1">{question.answer}</td>
              </tr>
            ))}
            {integer.map((question, index) => (
              <tr
                key={question.id}
                className="border-b-1 border-black dark:border-white w-full text-xs sm:text-sm"
              >
                <td className="pr-10 w-[60%] text-left py-1">
                  {question.question}
                </td>
                <td
                  className={`pr-10 w-[20%] text-left py-1 ${
                    parseInt(intAnswer[index]) === question.answer
                      ? "text-green-500"
                      : "text-red-700"
                  }`}
                >
                  {intAnswer[index]}
                </td>
                <td className="w-[20%] text-left py-1">{question.answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 rounded-lg text-center w-full">
        <h1 className="font-archivo text-2xl sm:text-5xl dark:[text-shadow:_4px_4px_0px_#F1C40F] [text-shadow:_4px_4px_0px_#FF5733] text-black dark:text-white">
          Your Score: {mcqScore + intScore} / {mcq.length + integer.length}
        </h1>
      </div>
      <div className="flex justify-center pt-5">
        <button
          onClick={() => {
            navigate("/");
            setActiveTab(0);
            setIntScore(0);
            setMcqScore(0);
            setCurrentIntQuestion(0);
            setCurrentQuestion(0);
            setSelectMCQAnswer(Array(mcq.length).fill(null));
            setIntAnswer(Array(integer.length).fill(null));
            setIntFeedback(Array(integer.length).fill(""));
            setMcqFeedback(Array(mcq.length).fill(""));
            setUsername("")
          }}
          className="font-ibm font-medium [box-shadow:5px_5px_0px_#000000] dark:[box-shadow:5px_5px_0px_#FFFFFF] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)] cursor-pointer bg-[#FF5733] hover:bg-[#C70039] border-2 border-black dark:border-white dark:bg-[#F1C40F] dark:hover:bg-[#FFA500] dark:text-white text-black px-5 py-2 rounded-full"
        >
          Go to HOME
        </button>
      </div>
    </div>
  );
};

export default Result;
