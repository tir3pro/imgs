const images = [
	{
		id: '1',
		title: 'Image 1',
		src: require("url-loader?mimetype=image/jpg!./../../imgs/1.jpg")
	},
	{
		id: '2',
		title: 'Image 2',
		src: require("url-loader?mimetype=image/jpg!./../../imgs/2.jpg")
	},
	{
		id: '3',
		title: 'Image 3',
		src: require("url-loader?mimetype=image/jpg!./../../imgs/3.jpg")
	},
	{
		id: '4',
		title: 'Image 4',
		src: require("url-loader?mimetype=image/jpg!./../../imgs/4.jpg")
	},
];

export default images;