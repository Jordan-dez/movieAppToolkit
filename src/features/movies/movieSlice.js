import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/api/moviesApi"
import { APIKey } from "../../common/api/movieApiKey"

export const fetchAsyncMovies = createAsyncThunk(
    'movie/fetchAsyncMovies',
    async () => {
        const movieText = "amour"
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        return response.data
    }
)

export const fetchAsyncShows = createAsyncThunk(
    'movie/fetchAsyncShows',
    async () => {
        const movieText = "friends"
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=series`)
        return response.data
    }
)
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    'movie/fetchAsyncMovieOrShowDetail',
    async (id) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
        return response.data
    }
)


const initialState = {
    movies: {},
    shows:{},
    selectedMovieOrShow:{}
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("fullfilled")
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("rejected")
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("fullfilled shows")
            return { ...state, shows: payload }
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log("fullfilled shows")
            return { ...state, selectedMovieOrShow: payload }
        },
    }
})

export const { addMovies } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSeletecdOrShowMovie= (state) => state?.movies?.selectedMovieOrShow

export default movieSlice.reducer;