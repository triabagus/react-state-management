import React, { useContext } from "react";
import { MovieContext } from './MovieContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    // const [movies] = useContext(MovieContext);

    return (
        <nav>
            <h3>Tria Code</h3>
            <p>List of movies : {movies.length}</p>
        </nav>
    );
};

export default Nav;
