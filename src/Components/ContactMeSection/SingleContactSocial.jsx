import React from 'react'

const SingleContactSocial = ({ Icon, link}) => {
  return (
    <div className='text-2xl h-12 w-12 border-orange text-orange rounded-full p-3 items-center justify-center'>
        <a href={link} className='cursor-pointer'>
            <Icon></Icon>
        </a>
    </div>
  )
}

export default SingleContactSocial