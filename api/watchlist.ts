const JWT_TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTI5MzAyNjk2YzFmNTY1NmNmNGIxODc4Mjk3ODQzOSIsIm5iZiI6MTYzMzkzODgzOC41NjA5OTk5LCJzdWIiOiI2MTYzZWQ5NmNlZTQ4MTAwNjJlOGIxYzAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fWCPCONvc6Ux3dooODvicGCstc6vjnkxROlmw_LBxY4`
const BASE_URL = `https://api.themoviedb.org/3/`

const headers = {
  accept: 'application/json',
  'content-type': 'application/json',
  Authorization: `Bearer ${JWT_TOKEN}`
}

export const addMovieToWatchlist = async (movieId: string) => {
  // console.log(movieId)
  const url = `${BASE_URL}account/11252289/watchlist`;

  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify({media_type: 'movie', media_id: movieId, watchlist: true})
  };

  try {
    const response = await fetch(url, options)
    const json = await response.json()
    console.log(json)
    return json
  } catch (error) {
    throw error
  }
}