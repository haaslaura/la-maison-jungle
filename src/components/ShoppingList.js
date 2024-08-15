import { plantList } from '../datas/plantList'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	// reduce : Cette méthode est utilisée pour transformer plantList en un tableau de catégories uniques.
	// acc : L'accumulateur, qui commence comme un tableau vide [].
	// plant : Chaque élément du tableau plantList.
	// Fonction callback :
	// acc.includes(plant.category) : Vérifie si la catégorie de la plante est déjà dans l'accumulateur.
	// acc : Si la catégorie est déjà présente, on retourne l'accumulateur tel quel.
	// acc.concat(plant.category) : Si la catégorie n'est pas présente, on l'ajoute à l'accumulateur.
	// Résultat : categories sera un tableau de catégories uniques extraites de plantList

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id}>
						{plant.name} {plant.isBestSale ? <span>🔥</span> : null}
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList