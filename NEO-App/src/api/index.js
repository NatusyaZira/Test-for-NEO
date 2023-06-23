import axios from 'axios'

axios.defaults.baseURL = "https://api.nasa.gov/neo/rest/v1";
axios.defaults.params = {
  api_key: "CznHZisDYfMkucbcWwQZnzoKJdwRuKXPuLqB7FeY",
};

export default axios;