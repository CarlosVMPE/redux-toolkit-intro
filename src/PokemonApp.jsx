import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {

    const { page, pokemons = [], isLoading } = useSelector(state => state.pokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, []);


    return (
        <>
            <h1>Pokemon App</h1>
            <hr />
            <span>{isLoading ? 'Loading...' : ''}</span>

            <ul>
                {
                    pokemons.map(({name}) => (
                        <li key={name}>
                            <span>{name}</span>
                        </li>

                    ))
                }
            </ul>


            <button 
                disabled={isLoading}
                onClick={ () => dispatch( getPokemons(page) ) }>
                Next
            </button>
        </>
    )
}
