import React, { useState, createContext } from 'react';
import MovieList from './MovieList';

export const MovieContext = createContext();

export const MovieProvider = (props) => { 
    const [movies, setMovies] = useState([
        {
          name: "Harry Potter",
          price: "$10",
          id: 120
        },
        {
          name: "Game of Thrones",
          price: "$20",
          id: 121
        },
        {
          name: "Inception",
          price: "$30",
          id: 122
        }
    ]);
    
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}