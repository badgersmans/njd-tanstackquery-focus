const JWT_TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTI5MzAyNjk2YzFmNTY1NmNmNGIxODc4Mjk3ODQzOSIsIm5iZiI6MTYzMzkzODgzOC41NjA5OTk5LCJzdWIiOiI2MTYzZWQ5NmNlZTQ4MTAwNjJlOGIxYzAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fWCPCONvc6Ux3dooODvicGCstc6vjnkxROlmw_LBxY4`
const BASE_URL = `https://api.themoviedb.org/3/`

const headers = {
  accept: 'application/json',
  Authorization: `Bearer ${JWT_TOKEN}`
}

export const getTopRatedMovies = async () => {
  const url = `${BASE_URL}movie/top_rated?language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers
  };

  try {
    const response = await fetch(url, options)
    const json = await response.json()
    // console.log(json.results)
    return json.results
  } catch (error) {
    throw error
  }
}

export const getMovieById = async (id: number) => {
  const url = `${BASE_URL}movie/${id}?language=en-US`;
  const options = {
    method: 'GET',
    headers
  };

  try {
    const response = await fetch(url, options)
    const json = await response.json()
    return json
  } catch (error) {
    throw error
  }
}