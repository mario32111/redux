import './App.css';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import { Col, Spin } from 'antd'
import 'antd/dist/reset.css';
import logo from './components/statics/logo.svg'
import { useEffect, useState } from 'react';
import { getPokemon } from './api';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsWithDetails, setLoading } from './components/actions';

function App() {

  const pokemons = useSelector(state => state.pokemons);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true))
      const pokemonsRes = await getPokemon();
      //esto separa las responsabnilidades y hace que el otro action creator sea asincrono
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false))
    };

    fetchPokemons();
  }, []);
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='pokedux'></img>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? <Col offset={12}>
        <Spin spinning size='large' />
      </Col> : <PokemonList pokemons={pokemons} />}

    </div>
  );
}

export default App;
