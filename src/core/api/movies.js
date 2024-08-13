import {apiUrl} from "@/core/api/index.js";

export class Movies {
    static async getMovies () {
        const response = await fetch(`${apiUrl}movies`)
        return await response.json()
    }

    static async getMovieById (id) {
        const response = await fetch(`${apiUrl}movie/${id}`)
        return await response.json()
    }
}