import { Link } from "react-router-dom";

const CharacterCard = ({ char_id, img, name, nickname, portrayed }) => {
  return (
    <>
      <div className="group flex animate-fadeIn gap-4 overflow-hidden rounded-lg border-[1px] border-[#FAF3E3] text-white transition-all duration-200 ease-in-out hover:border-[2px] hover:border-[#FAF3E3] hover:shadow-lg ">
        <div className="relative w-1/2 flex-none">
          <img
            src={img}
            alt="img"
            className="h-full w-full object-cover group-hover:animate-pulse"
          />
        </div>
        <div className="my-3 flex w-full flex-col justify-between pr-2">
          <div className="flex flex-col gap-3">
            <span className="block text-[1.33rem] font-bold">{name}</span>
            <span className="block text-[1.1rem] text-zinc-400">
              {nickname}
            </span>
            <span className="text-md mt-4 block text-right font-[Nunito]">
              {portrayed}
            </span>
          </div>

          <div className="self-end">
            <Link to={`/character/${char_id}`}>
              <button className="rounded-md border-[1px] border-slate-500 py-2 px-4 text-zinc-200 transition-all duration-300 ease-linear hover:text-white group-hover:border-none group-hover:bg-slate-800">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
