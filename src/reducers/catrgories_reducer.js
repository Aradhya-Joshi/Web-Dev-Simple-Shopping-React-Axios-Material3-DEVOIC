const initialState = {
    categories: [],
    loading: false,
    error: null,
  };
  
  const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'data/fetchCategories/pending':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'data/fetchCategories/fulfilled':
        return {
          ...state,
          loading: false,
          categories: action.payload,
        };
      case 'data/fetchCategories/rejected':
        return {
          ...state,
          loading: false,
          error: action.error.message,
        };
      default:
        return state;
    }
  };
  
  export default categoriesReducer;