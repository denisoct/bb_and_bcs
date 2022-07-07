import { getCharacterByCategory } from "../../selectors/getCharacterByCategory";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ category }) => {
  const characters = getCharacterByCategory(category);
  // ##07361f
  //#413b04
  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 -z-10 h-full w-full bg-gradient-to-t from-black ${
          category === "Breaking Bad" ? "via-[#07321d]" : "via-[#413b04]"
        } to-black`}
      ></div>
      <div className="mb-4 grid animate-fadeIn grid-cols-1 justify-items-stretch  gap-5 md:grid-cols-2 xl:grid-cols-3">
        {characters.map((character) => (
          <CharacterCard key={character.char_id} {...character} />
        ))}
      </div>
    </>
  );
};

export default CharacterList;
