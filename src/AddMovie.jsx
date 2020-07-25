import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => { 
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);
    // const [setMovies] = useContext(MovieContext);

    const updateId = (e) => { 
        setId(e.target.value);
    }

    const updateName = (e) => { 
        setName(e.target.value);
    }

    const updatePrice = (e) => { 
        setPrice(e.target.value);
    }

    const addMovie = e => { 
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name:name, price:price, id:id}])
    }

    return (
        <div className="container">
            <form onSubmit={addMovie}>
                <label>
                    <input type="text" name="id" value={id} onChange={updateId} placeholder="Id" />
                </label>
                <label>
                    <input type="text" name="name" value={name} onChange={updateName} placeholder="Name Product" />
                </label>
                <label>
                    <input type="text" name="price" value={price} onChange={updatePrice} placeholder="Price" />
                </label>
                <button className="red">
                    <span className="icon">+</span> Add Product
                </button>
            </form>
        </div>
    );
}

export default AddMovie;