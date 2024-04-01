// Dada la siguiente watchlist, crear una función que tome el array original
// y devuelva un arreglo de objetos que solo contenga las películas:
// 1. Dirigidas por Cristopher Nolan.
// 2. Con un imdbRating > 8.0
// El arreglo que se devuelve SOLO DEBE CONTENER el nombre de la película, ningún otra información
// Es obligatorio para este CC resolverlo con la función map()
import "./App.css";
import watchList from "./movies";

function App() {
  const returnMovieTitle = (watchlist) => {
    return watchlist
      .filter(
        (movie) =>
          movie.Director === "Christopher Nolan" &&
          parseFloat(movie.imdbRating) > 8.0
      )
      .map((movie) => ({ Title: movie.Title }));
  };

  const titlesArray = returnMovieTitle(watchList);

  return (
    <div>
      <h2>
        Películas dirigidas por Christopher Nolan con imdbRating `{">"}` 8.0:
      </h2>
      <ul>
        {titlesArray.map((movie, index) => (
          <li key={index}>{movie.Title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
