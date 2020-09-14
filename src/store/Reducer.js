export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_NOMINATELIST":
      return {
        ...state,
        nominatelist: [action.payload, ...state.nominatelist],
      };
    case "REMOVE_MOVIE_FROM_NOMINATELIST":
      return {
        ...state,
        nominatelist: state.nominatelist.filter(
          (info) => info.imdbID !== action.payload
        ),
      };
    default:
      return state;
  }
};

// export const initialState = {
//   loading: true,
//   movies: [],
//   errorMessage: null,
// };

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case "SEARCH_MOVIES_REQUEST":
//       return {
//         ...state,
//         loading: true,
//         errorMessage: null,
//       };
//     case "SEARCH_MOVIES_SUCCESS":
//       return {
//         ...state,
//         loading: false,
//         movies: action.payload,
//       };
//     case "SEARCH_MOVIES_FAILURE":
//       return {
//         ...state,
//         loading: false,
//         errorMessage: action.error,
//       };
//     default:
//       return state;
//   }
// };
