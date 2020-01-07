import axios from 'axios';
const KEY = 'AIzaSyB4AyD7PJEHYeIARy-w_ETUMubygI8dsW4';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: `${KEY}`
	}
});
