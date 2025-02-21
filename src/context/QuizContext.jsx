/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MCQ from "../components/MCQ";
import Integer from "../components/Integer";
import { integer, mcq } from "../data/data.js";
import Result from "../components/Result.jsx";
import { createStore, get } from "idb-keyval";

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  //States
  const [username, setUsername] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [mcqScore, setMcqScore] = useState(0);
  const [intScore, setIntScore] = useState(0);
  const [history, setHistory] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentIntQuestion, setCurrentIntQuestion] = useState(0);
  const [selectMCQAnswer, setSelectMCQAnswer] = useState(
    Array(mcq.length).fill(null)
  );
  const [mcqFeedback, setMcqFeedback] = useState(Array(mcq.length).fill(""));
  const [intAnswer, setIntAnswer] = useState(Array(integer.length).fill(""));
  const [intFeedback, setIntFeedback] = useState(
    Array(integer.length).fill("")
  );
  const navigate = useNavigate();

  const db = createStore("quiz-store", "quiz-history");

  //Toggling dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    get('attempt', db).then((data) => setHistory(data || []));
  }, []);

  //Tabs for the quiz
  const tabs = [
    {
      name: "MCQ",
      component: MCQ,
    },
    {
      name: "Integer",
      component: Integer,
    },
    {
      name: "Result",
      component: Result,
    },
  ];
console.log(history);
console.log(username);


  //Context values
  const value = {
    isDarkMode,
    setIsDarkMode,
    toggleDarkMode,
    navigate,
    tabs,
    activeTab,
    setActiveTab,
    mcqScore,
    intScore,
    setMcqScore,
    setIntScore,
    selectMCQAnswer,
    setSelectMCQAnswer,
    mcqFeedback,
    setMcqFeedback,
    currentIntQuestion,
    setCurrentIntQuestion,
    currentQuestion,
    setCurrentQuestion,
    intAnswer,
    setIntAnswer,
    intFeedback,
    setIntFeedback,
    username,
    setUsername, history, setHistory, db
  };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export default QuizProvider;
