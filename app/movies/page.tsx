"use client";

import { useState, useEffect } from "react";
import { Header } from "../../components/Header";

interface Movie {
  id: string;
  fields: {
    title: string;
    category_name: string;
  };
}

function Movies() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [movies, setMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    fetch("/movies/api")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="mt-6" style={{ textAlign: "center" }}>
      <Header>Movies</Header>
      {isError ? <p>Error!</p> : null}
      {isLoading && <span className="loader"></span>}
      <div>
        {movies &&
          movies.map((elem) => {
            return (
              <div key={elem.id}>
                {elem.fields.title} ({elem.fields.category_name})
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Movies;
