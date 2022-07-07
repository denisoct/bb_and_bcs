import CharacterList from "../Character/CharacterList";

const BreakingBadScreen = () => {
  return (
    <>
      <div style={{
      backgroundImage: "url(/Br-Ba.jpg)" ,height: "300px",backgroundRepeat: "no-repeat"}}>
        <div className="mt-3 min-h-screen w-full px-2 ">
          <CharacterList category="Breaking Bad" />
        </div>
      </div>
    </>
  );
};

export default BreakingBadScreen;
