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
        <div class="mx-12">
            <div class="text-4xl border-4 border-b-black">Busquedas</div>
            <hr/>
            <div class="grid grid-cols-3 gap-4 ">
                <div className='colums-5 space-y-4'>
                    <p class="text-xl my-6">Buscar</p>   
                    <hr/>
                    <form onSubmit={(e)=>handleSearch(e) }>
                    {/*<form onSubmit={handleSearch}>*/}
                        <input
                        type='text'
                        placeholder='Buscar un personaje'
                        class='rounded-lg'
                        name='searchText'
                        autoComplete='off'
                        value={searchText}
                        onChange={handleInputChange}
                        />
                        <button class="border-solid border-2 border-sky-500 rounded-lg ml-2 "
                        type='submit'
                        >
                            Buscar...
                        </button>

                    </form>
                </div>
                <div className='col-7 space-y-4'>
                    <div class="text-xl my-6">Resultados</div>
                    <hr/>
                    {
                        (q==='')
                            ?<div className='border-2 border-lime-400 rounded-lg'>Buscar un personaje</div>
                            :(CharacterFiltered.length===0)
                                && <div className='border-2 border-rose-500 rounded-lg'>No hay resultado para:" {q}"</div>
                    }

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
    )
}