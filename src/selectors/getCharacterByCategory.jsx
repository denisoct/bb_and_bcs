import { bb_and_bcs } from "../data/bb_and_bcs";

export const getCharacterByCategory = (category) => {
  const validCategory = ["Breaking Bad", "Better Call Saul"];

  if (!validCategory.includes(category)) {
    throw new Error(`Invalid category: ${category}`);
  }

  return bb_and_bcs.filter((character) =>
    character.category
      .split(",")
      .map((cat) => cat.trim())
      .includes(category)
  );
};
