import React,{ useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getCharacterByName } from "../../selectors/getCharacterByName";
import  queryString  from 'query-string';
import CharacterCard from "../Character/CharacterCard";

export const SearchScreen = ()=>{
    const navigate=useNavigate();
    const location=useLocation();
    const {q=''}=queryString.parse(location.search);


    const[value, handleInputChange]=useForm({
        searchText:q,
    })
    const {searchText}=value;

    const CharacterFiltered =useMemo(() => getCharacterByName(q), [q])

    const handleSearch=(e)=>{
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }

    
    return(
        <div class="bg-neutral-700 text-zinc-50">
            <hr/>
            <div class="grid grid-cols-2 justify-items-center">
                <div class=''>
                <div class="text-2xl text-zinc-50">Buscar </div>  
                    <hr/>
                    <form onSubmit={(e)=>handleSearch(e) }>
                    {/*<form onSubmit={handleSearch}>*/}
                        <input
                        type='text'
                        placeholder='Buscar un personaje'
                        class='rounded-lg bg-transparent rounded-md border-[1px] border-slate-500 py-2 px-4'
                        name='searchText'
                        autoComplete='off'
                        value={searchText}
                        onChange={handleInputChange}
                        />
                        <button class="mx-4 my-2 rounded-md border-[1px] border-slate-500 py-2 px-4 text-zinc-200 transition-all duration-300 ease-linear hover:text-white group-hover:border-none group-hover:bg-slate-800"
                        type='submit'
                        >
                            Buscar...
                        </button>

                    </form>
                </div>
                <div className=''>
                    <div class="text-2xl text-zinc-50">Resultados</div>
                    <hr/>
                    {
                        (q==='')
                            ?<div className='my-2 rounded-md border-[1px] border-lime-600 py-2 px-4'>Buscar un personaje</div>
                            :(CharacterFiltered.length===0)
                                && <div className='my-2 rounded-md border-[1px] border-red-700 py-2 px-4'>No hay resultado para:" {q}"</div>
                    }

                    <div class='my-2'>
                    {
                        CharacterFiltered.map( character =>(
                            <CharacterCard
                            key={character.char_id}
                            { ...character} 
                            /> 
                        ))
                    }
                    </div>
                </div>

            </div>
        </div>
    )
}