import { getCharacterByCategory } from "../../selectors/getCharacterByCategory";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ category }) => {
  const characters = getCharacterByCategory(category);
  // // add characters from Better Call Saul
  // characters.push(...getCharacterByCategory("Better Call Saul"));

  return (
    <>
      <div className="mb-4 grid animate-fadeIn grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {characters.map((character) => (
          <CharacterCard key={character.char_id} {...character} />
        ))}
      </div>
    </>
  );
};

export default CharacterList;
