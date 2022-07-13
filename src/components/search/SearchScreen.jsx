import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getCharacterByName } from "../../selectors/getCharacterByName";
import queryString from "query-string";
import CharacterCard from "../Character/CharacterCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [value, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = value;

  const CharacterFiltered = useMemo(() => getCharacterByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <div className={"fixed inset-0 -z-10 bg-zinc-900"}></div>
      <div className="mt-4 w-full px-4 font-[Nunito] text-zinc-50">
        <div className="grid grid-cols-[1fr,1fr] gap-40">
          <div>
            <div className="text-2xl text-zinc-50">Buscar</div>
            <hr />
            <form onSubmit={handleSearch} className="mt-2 flex flex-row gap-5">
              <input
                type="text"
                placeholder="Buscar un personaje"
                className="w-full rounded-md border border-slate-500 bg-transparent py-2 px-4 text-[1.33rem] focus:border-slate-900"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={handleInputChange}
              />
              <button
                className="flex flex-row gap-3 rounded-md border-none border-slate-500 bg-slate-700 py-2 px-4 text-[1.33rem] text-zinc-200 transition-all duration-300 ease-linear hover:border-none hover:bg-slate-800 hover:text-white"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 self-center"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
                Buscar
              </button>
            </form>
          </div>
          <div>
            <div className="text-2xl text-zinc-50">Resultados</div>
            <hr />
            {q === "" ? (
              <div className="mt-2 rounded-md py-2 text-[1.33rem] text-white/70">
                Busque un personaje
              </div>
            ) : (
              CharacterFiltered.length === 0 && (
                <div className="my-2 rounded-md py-2 text-[1.33rem] text-red-400">
                  No hay resultado para: <span className="font-bold">{q}</span>
                </div>
              )
            )}

            <div className="my-2">
              <div className="flex flex-col items-center gap-3">
                {CharacterFiltered.map((character) => (
                  <CharacterCard key={character.char_id} {...character} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
