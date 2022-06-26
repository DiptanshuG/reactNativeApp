export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITE";
// const API_KEY = "f5a2708cbe7349749e592cf7b152d566";

export const fetchArticles = () => {
  return async (dispatch) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=Apple&from=2022-06-26&sortBy=popularity&apiKey=f5a2708cbe7349749e592cf7b152d566`
    );
    const responseData = await response.json();
    dispatch({
      type: FETCH_ARTICLES,
      payload: responseData.articles,
    });
  };
};

export const toggleFav = (url) => {
  console.log(url, "bhaia");
  return {
    type: TOGGLE_FAVORITES,
    payload: url,
  };
};
