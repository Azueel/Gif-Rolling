import React, { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {
	//estado donde leeremos y modifaremos el valor del input
	const [inputValue, setInputValue] = useState('');

	//leer el dato que ingreso el usuario
	const onInputChanged = (e) => {
		setInputValue(e.target.value);
	};

	//leemos el submit
	const onSubmit = (e) => {
		e.preventDefault();

		//validacion del input
		if (inputValue.trim().length <= 1) {
			return;
		}

		//mandamos el dato validado a la funcion padre para guardarlo en el estado
		onAddCategory(inputValue);

		//limpiamos el input haciendolo vale un string vacio
		setInputValue('');
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input type="text" value={inputValue} onChange={onInputChanged} />
			</form>
		</div>
	);
};
