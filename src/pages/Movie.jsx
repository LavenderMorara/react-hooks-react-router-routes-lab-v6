import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map(genre => (
        <span key={genre}>genre : {genre}</span>
      ))}
    </div>
  );
}

export default Movie;