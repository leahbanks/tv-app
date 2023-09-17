import axios from "axios";

export const showsApi = axios.create({
  baseURL: "https://api.tvmaze.com",
});

export const fetchShows = (searchTerm) => {
    return showsApi.get(`/search/shows?q=${searchTerm}`)
}