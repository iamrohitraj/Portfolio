import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './singleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text='rajrohitraj392@gmail.com' Image={HiOutlineMail}/>
        <SingleInfo text='9999999999' Image={FiPhone }/>
        <SingleInfo text='New Delhi' Image={IoLocationOutline }/>
    </div>
  )
}

export default ContactInfo



