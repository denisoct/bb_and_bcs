import { Link } from "react-router-dom";

const CharacterCard = ({ char_id, img, name, nickname, portrayed }) => {
  return (
    <>
      <div className="group flex animate-fadeIn gap-4 overflow-hidden rounded-[4px] border-2 border-zinc-300 transition-all duration-200 ease-in-out hover:border-2 hover:border-cyan-600 hover:bg-zinc-200 hover:shadow-lg hover:ring-2 hover:ring-cyan-500 hover:ring-offset-1">
        <div className="relative w-1/2 flex-none">
          <img
            src={img}
            alt="img"
            className="h-full w-full object-cover group-hover:animate-pulse"
          />
        </div>
        <div className="my-3 flex w-full flex-col justify-between pr-2">
          <div className="flex flex-col gap-3">
            <span className="block text-[1.4rem] font-bold">{name}</span>
            <span className="block text-[1.1rem] text-zinc-700">
              {nickname}
            </span>
            <span className="text-md mt-4 block text-right font-[Nunito]">
              {portrayed}
            </span>
          </div>

          <div className="self-end">
            <Link to={`/character/${char_id}`}>
              <button className="rounded-md bg-blue-500 py-2 px-4 font-bold text-zinc-200 transition-all duration-300 ease-linear hover:bg-blue-800 hover:text-white">
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
