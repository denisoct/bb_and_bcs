import { bb_and_bcs } from "../data/bb_and_bcs";

export const getCharacterById = (char_id = "") => {
  return bb_and_bcs.find(
    (character) => character.char_id === parseInt(char_id)
  );
};
