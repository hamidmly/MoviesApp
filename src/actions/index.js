import {
    CHANGE_SEARCH_TEXT,
    SEARCH_MOVIE,
    IS_SEARCHING
} from './types';


export const changeSearchText = (search="") =>  {
    return {
        type: CHANGE_SEARCH_TEXT,
        payload: search
    };
}

export const searchMovie = (search="") => dispatch =>{
	if(search==='') return
	
	const url = 'https://api.themoviedb.org/3/'; 
	const api_key = '65c08253ef2fa08cb466eecee421cee2';

	dispatch({
		type: IS_SEARCHING,
		payload: true
	});

	if (search !== null ){
		fetch(url+'search/movie?'+'query='+search+'&api_key='+api_key)
			.then((response) => response.json())
			.then(json => {
				dispatch({
					type: SEARCH_MOVIE,
					payload: json.results
				});
		}, error => {
			alert('Connexion error')
			dispatch({
				type: IS_SEARCHING,
				payload: false
			})
		})
	}
}


