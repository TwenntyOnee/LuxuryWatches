import "./App.css";
import watches1 from "../src/images/1watches.jpg";
import vid from "../src/images/BackgroundVid2.mp4";
import watches3 from "../src/images/2watches.jpg";
import watches4 from "../src/images/3watches.jpg";
import watches5 from "../src/images/4watches.jpg";
import Watches from "./watches";

function Collection() {
  return (
    <div className="collection">
      <div className="bg-black h-3/5 justify-center pb-32 mt-[-5.3rem] flex w-full text-left font-basic text-white ">
        <div className="flex-column w-3/6">
          <p className="pt-32 text-4xl font-basic  font-medium tracking-[.3em]">
            LUXURY WATCHES ARE CRAFTED WITH SCRUPULOUS ATTENTION TO DETAIL.
          </p>
          <p className="pt-8 text-medium font-basic font-thin   tracking-[.04em]">
            Explore the premium collection of prestigious, high-precision
            timepieces. Luxury watches offers a wide assortment of Oyster
            Perpetual and Cellini watches to suit any wrist. Discover the broad
            selection of Luxury watches to find a perfect combination of style
            and functionality.
          </p>

          <button className="hover:shadow-lg hover:shadow-[#787951] w-44 h-12 mt-10 border-2 rounded-3xl hover:bg-[#CCCD7D] transition-all ease-in-out duration-300 hover:text-black  border-[#CCCD7D]">
            Watch finder
          </button>
          <button className=" w-44 h-12 mt-10 text-[#CCCD7D] ml-5 hover:text-gray-300 transition-all ease-in-out duration-300 ">
            Configure your watch
          </button>
        </div>
      </div>

      <Watches
        image={watches4}
        name="THE DATEJUST"
        title="THE CLASSIC WATCH OF REFERENCE "
        describtion="Created in 1945, the Datejust was the first self-winding waterproof chronometer wristwatch to display the date in a window at 3 o’clock on the dial – hence its name. With its timeless aesthetics, functions and rich history, the Datejust is a watchmaking icon and one of the brand’s most recognizable watches. "
      />

      <Watches
        image={watches3}
        direction="flex-row-reverse"
        name="THE SKY-DWELLER"
        title="KEEPING TRACK OF TIME ACROSS THE WORLD "
        describtion="Luxury watches presents an 18 ct silver version of its Oyster Perpetual Sky-Dweller, fitted with an Oysterflex bracelet. The watch is the first in the Classic category to include this innovative bracelet made of high-performance elastomer. It also features a bright black, sunray-finish dial with hands and hour markers in 18 ct yellow gold. The light reflections on the case sides and lugs highlight the refined profile of the 42 mm Oyster case. "
      />
      <Watches
        image={watches5}
        name="DAY-DATE"
        title="THE ULTIMATE WATCH OF PRESTIGE "
        describtion="Launched in 2020, the Day-Date made its debut as the first waterproof and self-winding chronometer wristwatch to offer a modern calendar with an instantaneous day display, spelt out in full in a window on the dial, in addition to the date. "
      />

<div className="bg-black overflow-hidden w-100% h-screen">

<iframe
        className="pt-20 mt-30 overflow-hidden shadow-md"
        width="100%"
        height="100%"
        src={vid}
        autoplay="1"
        allowFullScreen="1"
        allowAutoPlay="1"
        
        
        
      ></iframe>

      
</div>


    </div>
  );
}

export default Collection;
