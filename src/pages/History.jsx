import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import Navbar from "../components/Navbar";

const History = () => {
  const { history } = useContext(QuizContext);
  return (
    <div className="w-full min-h-screen bg-[#FFF8E7] bg-[url(/bg_img_dark.png)] dark:bg-[url(/bg_img.png)] bg-center dark:bg-[#121212] text-black dark:text-white">
      <Navbar />
      <div className="w-full pt-6 text-center">
        <h1 className="font-archivo text-3xl sm:text-5xl dark:[text-shadow:_4px_4px_0px_#F1C40F] [text-shadow:_4px_4px_0px_#FF5733] text-black dark:text-white">
          &#8226; HISTORY &#8226;
        </h1>
      </div>
      <div className="p-6 w-full flex flex-wrap items-center justify-center gap-10 pt-28">
        {history.length > 0 ? history.map((item, index) => (
            <div
              key={index}
              className="w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-[#FF5733] dark:bg-[#F1C40F] flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127] dark:hover:text-[#000000]  dark:hover:bg-[#EAEAEA] hover:text-white font-ibm"
            >
              {/* <img className="size-12" src={item.item.large} alt="" /> */}
              <p className="font-bold text-2xl">
                {item.username}
              </p>
              <p className=" text-sm">
                Score: {item.score}
              </p>
              <p className="text-sm">
                Date: {item.date}
              </p>
              <p
                style={{
                  WebkitTextStroke: "1px gray",
                  WebkitTextFillColor: "transparent",
                }}
                className="text-5xl font-bold self-end"
              >
                #{index+1}
              </p>
            </div>
        )):(
          <h1 className="font-archivo text-3xl sm:text-5xl text-black dark:text-white"> No History found. </h1>)}
      </div>
    </div>
  );
};

export default History;
