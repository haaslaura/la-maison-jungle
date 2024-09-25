import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'



function ShoppingList() {

	// reduce > transformer plantList en un tableau de catégories uniques
	const categories = plantList.reduce(

		// acc : accumulateur, commence comme un tableau vide []
		// plant : chaque élément du tableau plantList
		(acc, plant) =>

			// acc.includes(plant.category) : si la catégorie de la plante est déjà dans l'accumulateur
			// acc : si catégorie déjà présente, on retourne l'accumulateur tel quel
			// acc.concat(plant.categ ory) : Si la catégorie n'est pas présente, on l'ajoute à l'accumulateur
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ name, cover, id, light, water }) => (
					<PlantItem 
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul>
			
		</div>
	)
}

export default ShoppingList