import { generateMoviesHTML } from './movie-converter.js';
import { renderMoviesToDOM } from './movie-render.mjs';

const movieHTML = generateMoviesHTML();
renderMoviesToDOM(movieHTML);