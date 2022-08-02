import React from 'react'

const ImageLink = ({src , title , link}) => {
    return (
        <div className='bg-gray-100 rounded-lg border border-gray-200 shadow-md w-80 h-80 overflow-hidden relative'>
            <img src={src} className='object-cover rounded-t-lg w-full h-full absolute top-0 left-0'/>

            <div className='p-5 w-full h-full flex flex-col justify-between
                absolute top-0 left-0 z-10 bg-gray-800 opacity-0 hover:opacity-75'
            >
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-300'>
                    {title} 
                </h5>

                <a
                    className='inline-flex items-center py-2 px-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-500 w-max'
                    href={link}
                    target='_blank'
                >
                    Visit Website!
                </a>
            </div>
        </div>
    )
}



export default ImageLink