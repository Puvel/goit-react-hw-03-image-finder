import axios from 'axios';

const baseUrl = 'https://pixabay.com/api/';
const API_KEY = '16013941-0b7abfb5c3f07bad798dbf718';

export const fetchImages = (query = '', page = 1) =>
  axios.get(
    `${baseUrl}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`
  );
