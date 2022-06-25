export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const TOGGLE_FAVORITES = "ADD_FAVORITE";
const API_KEY = "f5a2708cbe7349749e592cf7b152d566";

export const fetchArticles = () => {
  return async (dispatch) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2022-05-25&sortBy=publishedAt&apiKey=${API_KEY}`
    );
    const responseData = await response.json();
    dispatch({
      type: FETCH_ARTICLES,
      payload: responseData.articles,
    });
  };
};

export const toggleFav=(url)=>{
    return{
        type:TOGGLE_FAVORITES,
        payload:url
    }
}