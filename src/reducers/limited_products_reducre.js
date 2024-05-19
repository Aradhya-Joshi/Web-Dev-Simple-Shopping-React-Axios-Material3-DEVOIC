const initialState = {
    products: [],
    loading: false,
    error: null,
  };

  const limitedProductsReducer = (state = initialState, action) => {

    switch (action.type){
         
        case 'data/fetchLimitedProducts/pending':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'data/fetchLimitedProducts/fulfilled':
        return {
          ...state,
          loading: false,
          products: action.payload,
        };
      case 'data/fetchLimitedProducts/rejected':
        return {
          ...state,
          loading: false,
          error: action.error.message,
        };
      default:
        return state;
    }
}

export default limitedProductsReducer;
  