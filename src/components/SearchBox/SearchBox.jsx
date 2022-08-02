import React from 'react'
import Input from '../Input'


const SearchBox = ({formCallback}) => {
    const handleCallback = (childValue) => {
        formCallback(childValue)
    }

    return (
        <div className='flex flex-col sm:flex-row items-center gap-y-4 justify-between mt-8 mb-3'>
            <a 
                href='/'
                className='text-2xl font-semibold rounded-md cursor-pointer bg-gray-100 px-3 py-1'
                title='OSE is: Omid Search Engine'
            >
                OSE
            </a>
            <Input
                valueCallback={handleCallback}
            />
        </div>
    )
}

export default SearchBox