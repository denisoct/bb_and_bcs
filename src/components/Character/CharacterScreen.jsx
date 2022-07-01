import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getCharacterById } from "../../selectors/getCharacterById";

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

  const { name, img, nickname, status } = character;

  return (
    <>
      <div className="my-3 ml-3 flex gap-4">
        <img
          src={img}
          alt={character}
          className="w-1/2 animate-backInUp rounded-sm"
        />
        <div className="ml-6">
          <h3 className="mb-2 text-2xl font-bold">{name}</h3>
          <ul className="flex flex-col gap-3">
            <li className="">
              <b>Name: </b>
              {name}
            </li>
            <li className="">
              <b>Nickname: </b>
              {nickname}
            </li>
            <li className="">
              <b>Status: </b>
              {status}
            </li>
            {/* <li className="list-group-item">
              <b>Publisher: </b>
              {publisher}
            </li>
            <li className="list-group-item">
              <b>First appearance: </b>
              {first_appearance}
            </li> */}
          </ul>
          {/* <h5 className="my-3">Characters</h5>
          <p className="ml-2">{characters}</p> */}

          <button
            className="mt-4 rounded-lg border-2 border-cyan-700 p-2 text-cyan-700 transition-all duration-500 ease-in-out hover:bg-cyan-500 hover:text-black"
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
