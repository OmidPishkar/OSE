import React from 'react'
import axios from "axios";

const Input = ( {valueCallback} ) => {

    const request = (value) => {
        const options = {
        method: 'GET',
        url: `http://localhost:3004/${value}`,
        headers: {
            'X-User-Agent': 'desktop',
            'X-Proxy-Location': 'EU',
            'X-RapidAPI-Key': 'OmidDev',
            'X-RapidAPI-Host': 'http://localhost:3004'
        }
        };

        axios.request(options).then(function (response) {
            // response.data[0].results.map( item => {
            //     console.log(item.title);
            // })
            
            valueCallback(response.data)
        }).catch(function (error) {
            console.log(error);
        });
    }

    const handleSearch = (event) => {
        event.preventDefault()
        if(event.target.input.value !== ''){
            const result = request(event.target.input.value)
            valueCallback(result);
        } else{ 
            alert('Please search any thing!!')
        }
    }

    return (
        <form
            onSubmit={event => handleSearch(event)}
            className='bg-gray-100 w-max flex items-stretch'
        >
            <input
                name='input'
                className='bg-transparent px-3 py-1 outline-gray-300'
                placeholder='Search here!!!'
            />
            <button
                name='button'
                type='submit'
                className='bg-transparent px-3'
            >
                Go!
            </button>
        </form>
    )
}

export default Input