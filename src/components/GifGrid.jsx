import React, { useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
	const [images, setImages] = useState([]);

	const getImages = async () => {
		const newImages = await getGifs(category);

		setImages(newImages);
	};

	getImages();

	return (
		<div>
			<h3>{category}</h3>
			<div className="card-grid">
				{images.map((img) => {
					return (
						<div key={img.id} className="card">
							<img src={img.url} alt={img.title} />
							<p>{img.title}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
