export const getGifs = async (category) => {
	// const url = 'api.giphy.com/v1/gifs/search?api_key=Sa77le4Lgv4z4OlD31enGcxp0OPDZCqs&q=comida&limit=10';
	const url = `https://api.giphy.com/v1/gifs/search?api_key=Sa77le4Lgv4z4OlD31enGcxp0OPDZCqs&q=${category}&limit=10`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images.downsized_medium.url,
		};
	});

	return gifs;
};
