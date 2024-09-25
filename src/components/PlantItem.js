import '../styles/PlantItem.css'
import CareScale from './CareScale'

// function handleClick(plantName) {
//     // alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
//     console.log(plantName.preventDefault);   
// }

function PlantItem({ name, cover, id, light, water }) {
    
    return (
        <li key={id} className='lmj-plant-item' /*onClick={() => handleClick(name)}*/ /*onClick={handleClick}*/> 
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <CareScale
                careType='water'
                scaleValue={water}
            />
            <CareScale
                careType='light'
                scaleValue={light}
            /> 
        </li>
    )
}

export default PlantItem