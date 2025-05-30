export const getTopRatedMovies = async () => {
  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTI5MzAyNjk2YzFmNTY1NmNmNGIxODc4Mjk3ODQzOSIsIm5iZiI6MTYzMzkzODgzOC41NjA5OTk5LCJzdWIiOiI2MTYzZWQ5NmNlZTQ4MTAwNjJlOGIxYzAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fWCPCONvc6Ux3dooODvicGCstc6vjnkxROlmw_LBxY4'
    }
  };

  try {
    const response = await fetch(url, options)
    const json = await response.json()
    console.log(json.results)
    return json
  } catch (error) {
    console.log(error)
  }
}