import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../Styles/PokemonAPI.css';

const PokemonAPI = () => {
    const [val, setVal] = useState();
    const [name, setName] = useState("");
    const [move, setMove] = useState();

    const handleChange = (e) => {
        setVal(e.target.value);
    }

    useEffect(() => {
        if (val) {
            const getData = async () => {
                const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${val}`);
                setName(data.data.name);
                setMove(data.data.moves.length);
            }
            getData();
        }
    }, [val])

    return (
        <div className='api'>
            <h1>You choose <span style={{ color: "red" }}>{val}</span> value</h1>
            <h1>My name is <span style={{ color: "red" }}>{name}</span></h1>
            <h1>I have moves <span style={{ color: "red" }}>{move}</span></h1>
            <select value={val} onChange={handleChange}>
                <option value="" disabled selected style={{ display: "none" }} >Select Value</option>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    )
}

export default PokemonAPI