import React, { useState, useEffect } from "react";
import axios from "axios";

function HandleFetchAPI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [newValue, setNewValue] = useState("");
  const [pokemonList, setPokemonList] = useState({});

  // 🟢 Load saved Pokémon list from localStorage (runs only once on mount)
  useEffect(() => {
    const savedData = localStorage.getItem("pokemonList");
    if (savedData) {
      try {
        setPokemonList(JSON.parse(savedData));
      } catch {
        console.error("Failed to parse saved data.");
      }
    }
  }, []);

  // 🟢 Save Pokémon list to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(pokemonList).length > 0) {
      localStorage.setItem("pokemonList", JSON.stringify(pokemonList));
    }
  }, [pokemonList]);

  useEffect(() => {
    if (!newValue) return; // ⛔ Skip if no input yet
    // If Pokémon already exists, show message instead of refetching
    if (pokemonList[newValue]) {
      setError(`${newValue.charAt(0).toUpperCase() + newValue.slice(1)} is already added!`);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${newValue.toLowerCase()}`
        );
        const newPokemon = response.data;

        if (newPokemon?.name) {
          setPokemonList((prev) => ({
            ...prev,
            [newPokemon.name]: {
              name: newPokemon.name,
              species: newPokemon.species.name,
              sprite:
                newPokemon.sprites.other["official-artwork"].front_default ||
                newPokemon.sprites.front_default,
              stats: newPokemon.stats.map((s) => ({
                name: s.stat.name,
                base: s.base_stat,
              })),
              abilities: newPokemon.abilities.map((a) => a.ability.name),
              types: newPokemon.types.map((t) => t.type.name),
            },
          }));
        }
      } catch (error) {
        console.error(error);
        setError("Pokémon not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [newValue]);

  function addData() {
    if (inputValue.trim() !== "") {
      setNewValue(inputValue.toLowerCase());
      setInputValue("");
    }
  }

  function deletePokemon(name) {
    setPokemonList((prev) => {
      const updatedList = { ...prev };
      delete updatedList[name]; // remove that one Pokémon
      localStorage.setItem("pokemonList", JSON.stringify(updatedList)); // update saved data
      return updatedList;
    });
  }

  return (
    <div className="pokemon-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter Pokémon name"
      />
      <button onClick={addData} className="primary">Fetch Data</button>

      <div className="content">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {Object.keys(pokemonList).length > 0 && (
          <ul>
            {Object.entries(pokemonList)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([name, pokemon]) => (
                <li key={name}>
                  <div className="pokemon">
                    <img
                      src={pokemon.sprite}
                      alt={pokemon.name}
                      width="100"
                      height="100"
                    />
                    <h3 style={{ textTransform: "capitalize" }}>{pokemon.name}</h3>
                    <button className="danger" onClick={() => deletePokemon(name)}>Remove</button>
                  </div>
                  <div className="pokemon-details">
                    <p>
                      <strong>Species:</strong> {pokemon.species}
                    </p>
                    <p>
                      <strong>Type:</strong> {pokemon.types.join(", ")}
                    </p>
                    <p>
                      <strong>Abilities:</strong> {pokemon.abilities.join(", ")}
                    </p>
                    <div className="stats">
                      <strong>Stats:</strong>
                      <ul>
                        {pokemon.stats.map((stat) => (
                          <li key={stat.name}>
                            {stat.name}: {stat.base}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default HandleFetchAPI;
