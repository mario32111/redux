import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import './PokemonList.css'
import { StarOutlined } from '@ant-design/icons';
const PokemonCard = ({name}) => {
    return (
        <Card  
            title={name}
            cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' alt='Charmander' />}
            extra= {<StarOutlined />}
            >
                <Meta description='fire, magic' />
        </Card>
    );
}
export default PokemonCard;