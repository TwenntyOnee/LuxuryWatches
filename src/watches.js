import "./App.css";


function Watches(props) {
  return (
    <div className="w-full bg-black justify-center  flex h-5/6  py-20 text-white font-basic">
<div className={`w-5/6 flex ${props.direction}`}>
      <div className="flex w-full ">
        <img src={props.image} className="object-cover" alt="" />
      </div>

      <div className="flex-column mt-60 pr-20">
        <p className="font-rolex text-6xl tracking-[.2em] font-medium">
          {props.name}
        </p>
        <p className=" text-xl mt-3 font-thin tracking-[.25em]">
          {props.title}
        </p>
        <p className="mt-6 font-thin">{props.describtion}</p>
        <button className=" hover:shadow-lg hover:shadow-[#787951] w-44 h-12 mt-10 border-2 rounded-3xl hover:bg-[#CCCD7D] transition-all ease-in-out duration-300 hover:text-black  border-[#CCCD7D]">
          Discover more
        </button>
      </div>

</div>

    </div>
  );
}
export default Watches;
