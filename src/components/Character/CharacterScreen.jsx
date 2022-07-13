import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getCharacterById } from "../../selectors/getCharacterById";
import BCSLogo from "../../assets/BCSLogo.png";
import BBdark from "../../assets/BBdark.png";

const CharacterScreen = () => {
  const { charId } = useParams();
  const navigate = useNavigate();
  const character = useMemo(() => getCharacterById(charId), [charId]);

  const handleReturn = () => {
    navigate(-1);
  };

  if (!character) {
    return <Navigate to="/" />;
  }

  const {
    name,
    img,
    nickname,
    occupation,
    portrayed,
    birthday,
    status,
    category,
    appearance,
    better_call_saul_appearance,
  } = character;

  const categories = category.split(",").map((c) => c.trim());

  return (
    <>
      <div className={"fixed inset-0 -z-10 bg-zinc-900"}></div>
      <div className="mt-14 flex w-full flex-col text-white lg:grid lg:grid-cols-[2fr,2fr] lg:justify-items-center">
        <img
          src={img}
          alt={character}
          className="h-[400px] w-auto animate-fadeInDown rounded-sm object-scale-down object-top lg:h-[800px] lg:animate-fadeInLeft"
        />
        <div className="lg:animate ml-6 mt-6 animate-fadeInUp animate-fadeInRightBig lg:mt-0 lg:justify-self-start">
          <h3 className="mb-4 text-2xl font-bold">{name}</h3>
          <ul className="flex flex-col gap-3 ">
            <li className="">
              <b>Nickname: </b>
              {nickname}
            </li>
            <li>
              <b>Ocuppation: </b>
              {occupation.join(", ")}
            </li>
            <li>
              <b>Birthday: </b>
              {birthday}
            </li>
            <li>
              <b>Portrayed: </b>
              {portrayed}
            </li>
            <li className="">
              <b>Status: </b>
              {status}
            </li>
          </ul>
          <div className="flex flex-row">
            {categories.includes("Breaking Bad") && (
              <>
                <img
                  src={BBdark}
                  alt="BB logo"
                  className="h-36 object-center"
                />
                <div className="flex flex-row items-center gap-3">
                  {appearance.map((value, index) => (
                    <span
                      key={index}
                      className="cursor-pointer select-none rounded-full bg-slate-600 py-2 px-4 text-white hover:bg-cyan-700"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="flex flex-row">
            {categories.includes("Better Call Saul") && (
              <>
                <img
                  src={BCSLogo}
                  alt="BCS logo"
                  className="h-36 object-center"
                />
                <div className="ml-10 flex flex-row items-center gap-3">
                  {better_call_saul_appearance.map((value, index) => (
                    <span
                      key={index}
                      className="cursor-pointer select-none rounded-full bg-slate-600 py-2 px-4 text-white hover:bg-cyan-700"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          <button
            className="mt-6 flex flex-row gap-3 rounded-md border-none border-slate-500 bg-slate-700 py-2 px-4 text-[1.33rem] text-zinc-200 transition-all duration-300 ease-linear hover:border-none hover:bg-slate-800 hover:text-white"
            onClick={handleReturn}
          >
            Regresar
          </button>
        </div>
      </div>
    </>
  );
};

export default CharacterScreen;
