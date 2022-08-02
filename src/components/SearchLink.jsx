import React from 'react'

const SearchLink = ({link , title , description}) => {
    
    return (
        <>
            <div className='py-6 px-2 border rounded-lg my-2'>
                <a href={link} target='_blank' className='block hover:underline text-blue-500 text-2xl font-medium max-w-lg'>
                    {title}
                </a>
                
                <span className='text-base text-gray-500 max-w-lg'>
                    {description}
                </span>
            </div>
        </>
    )
}

export default SearchLink