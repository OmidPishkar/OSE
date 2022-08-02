import React from 'react'

const NewsLinks = ({title , link , details , date , webname}) => {
    return (
        <div className='p-6 max-w-3xl bg-white rounded-lg border border-gray-200 shadow-md'>
            <span className='text-gray-400 text-sm'>
                {date}
            </span>
            <a className='hover:underline text-blue-600' href={link}>
                <h5 className='mb-2 text-2xl font-bold tracking-tight'>
                    {title}
                </h5>
            </a>

            <p className='font-normal text-gray-700 block mb-3'>
                {details}
            </p>

            <span title='Website Name' className=" border-2 text-blue-800 mb-2 w-max text-sm font-medium px-3 py-2 rounded">
                {webname}
            </span>
        </div>
    )
}

export default NewsLinks