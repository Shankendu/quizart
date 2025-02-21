import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFF8E7] bg-[url(/bg_img_dark.png)] dark:bg-[url(/bg_img.png)] bg-center dark:bg-[#121212] text-black dark:text-white">
      <Navbar />
      <div className="w-full h-[80vh] flex justify-center items-center font-archivo text-5xl sm:text-7xl md:text-9xl">
    ABOUT.
      </div>
    </div>
  );
};

export default About;
