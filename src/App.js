import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function App() {
	//Arreglo donde guardaremos los datos ingresado por el usario
	const [categories, setCategories] = useState([]);

	//funcion que tomara los datos del usuario y lo guarda en el state
	const onAddCategory = (newCategory) => {
		setCategories([newCategory, ...categories]);
	};

	return (
		<div className="App">
			<h1>React Gif</h1>

			{/* componente del input para leer lo que ingrese el usuario */}
			<AddCategory onAddCategory={onAddCategory} />

			<ul>
				{/* Imprimimos la tabla con todos los datos en el html */}
				{categories.map((category, i) => {
					return <GifGrid />;
				})}
			</ul>
		</div>
	);
}

export default App;
