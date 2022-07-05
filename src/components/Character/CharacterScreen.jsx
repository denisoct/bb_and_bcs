import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getCharacterById } from "../../selectors/getCharacterById";
import BBLogo from "../../assets/BBLogo.png";
import BCSLogo from "../../assets/BCSLogo.png";

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
    portrayed,
    birthday,
    status,
    category,
    appearance,
    better_call_saul_appearance,
  } = character;
  // lg:grid lg:grid-flow-col lg:grid-cols-[1fr,2fr]

  const categories = category.split(",").map((c) => c.trim());

  return (
    <>
      <div className="my-3 ml-3 flex flex-col lg:grid lg:grid-cols-[2fr,2fr] lg:justify-items-center">
        <img
          src={img}
          alt={character}
          className="h-[600px] w-auto animate-fadeInDown rounded-sm object-scale-down object-top lg:h-[800px] lg:animate-fadeInLeft"
        />
        <div className="lg:animate ml-6 mt-6 animate-fadeInUp animate-fadeInRightBig lg:justify-self-start">
          <h3 className="mb-4 text-2xl font-bold">{name}</h3>
          <ul className="flex flex-col gap-3">
            <li className="">
              <b>Nickname: </b>
              {nickname}
            </li>
            <li className="">
              <b>Status: </b>
              {status}
            </li>
            <li>
              <b>Portrayed: </b>
              {portrayed}
            </li>
            <li>
              <b>Birthday: </b>
              {birthday}
            </li>
          </ul>
          <div className="flex flex-row">
            {categories.includes("Breaking Bad") && (
              <>
                <img
                  src={BBLogo}
                  alt="BB logo"
                  className="h-36 object-center"
                />
                <div className="flex flex-row items-center gap-3">
                  {appearance.map((value, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-black py-2 px-4 text-white"
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
                <div className="ml-12 flex flex-row items-center gap-3">
                  {better_call_saul_appearance.map((value, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-black py-2 px-4 text-white"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          <button
            className="mt-6 rounded-md bg-blue-500 py-2 px-4 font-bold text-zinc-200 transition-all duration-300 ease-linear hover:bg-blue-800 hover:text-white"
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
