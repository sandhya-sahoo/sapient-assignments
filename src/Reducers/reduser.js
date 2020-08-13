const product = [];
const reducer = (state = product ,action) => {
    switch (action.type) {
        case "GET-DATA":
          return {
            ...state,
            product: action.payload
          };
    
        case "GET-ALL-FILTER_ITEMS":
          return {
            ...state,
            product: action.payload
          };
    
        case "API-ERROR":
          return {
            message: action.message,
          };
    
        default:
          return state;
    }
}
export default reducer;