import './App.css';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import { Col } from 'antd'
import 'antd/dist/reset.css';
import logo from './components/statics/logo.svg'
import { useEffect, useState } from 'react';
import { getPokemon } from './api';
import { connect } from 'react-redux';
import { setPokemons as setPokemonsActions} from './components/actions';

function App({ pokemons, setPokemons }) { 


  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes =await getPokemon();
      setPokemons(pokemonsRes);
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
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

//funcion que recibe el estado y retorna un objeto 
//cuyas propiedades son eviadas a los props del componente que se esta conectando a redux
//es como el state en la sintaxis anterior
const mapStateToProps= (state) => ({
  pokemons: state.pokemons,
});


//esta funcion recibe el dispatch de redux
//y retorna un objeto que va a ser mapeado a las propiedades
//con los action creators creados
//es como el dispatch en la sintaxis anterior
const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
});


//asi se conecta un componente a redux
export default connect(mapStateToProps, mapDispatchToProps) (App);
