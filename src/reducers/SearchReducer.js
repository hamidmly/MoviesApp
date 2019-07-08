import {
	IS_SEARCHING,
    CHANGE_SEARCH_TEXT,
    SEARCH_MOVIE,
} from '../actions/types';

export const INITIAL_STATE = {
    search_movies_items: [],
	is_searching: false,
	search_text: ''
};

export default ( state=INITIAL_STATE, action ) => {
	switch (action.type) {
		case SEARCH_MOVIE:
			return { ...state, search_movies_items: action.payload, is_searching: false};
		case IS_SEARCHING:
			return { ...state, is_searching: action.payload, search_movies_items: [] }
		case CHANGE_SEARCH_TEXT:
			return { ...state, search_text: action.payload }
		default:
			return state;

	}
};
