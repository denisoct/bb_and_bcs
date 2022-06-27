import { Link } from "react-router-dom";

const CharacterCard = ({ char_id, img, name, nickname, portrayed }) => {
  return (
    <>
      <div className="flex gap-4 border-2 border-black hover:border-dotted hover:shadow-lg hover:shadow-cyan-800">
        <img src={img} alt="img" className="w-1/2" />
        <div className="my-3 flex w-full flex-col justify-between pr-2">
          <div className="flex flex-col gap-3">
            <span className="block text-[1.4rem] font-bold">{name}</span>
            <span className="block text-[1.1rem] text-gray-700">
              {nickname}
            </span>
            <span className="mt-4 block text-right font-[Nunito] text-sm">
              {portrayed}
            </span>
          </div>

          <div className="self-end">
            <Link to={`/character/${char_id}`}>
              <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
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
