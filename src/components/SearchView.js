import Hero from "./Hero";

const MovieCard= ({movie})=>{
  const posterUrl= `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
  <div className="col-lg-3 col-md-3 col-2">
<div className="card" >
  <img src={posterUrl} className="card-img-top" alt={movie.original_title}/>
  
  <div className="card-body">
    <h5 className="card-title">{movie.original_title}</h5>
    <p className="card-text">{movie.overview}</p>
    <a href="a" className="btn btn-primary">Show details</a>
  </div>
</div>
</div>
  )
}




const SearchView = ({keyword, searchResults}) => {
    const title = `you are searching for ${keyword}`

const resultsHtml = searchResults.map ((obj, i)=>{
  return <MovieCard movie={obj} key={i} />
}) 


   // console.log (searchResults, 'are the search results')
  return (
    <>
      <Hero text={title} />
      {resultsHtml &&
      <div className="container">
        <div className="row">  
          {resultsHtml}
          </div>
          </div>}
    
    </>
  );
};

export default SearchView;
