import React from 'react'
import { useParams } from 'react-router';
import {useSelector} from 'react-redux'

const ViewPaste = () => {
  
  const allPastes=useSelector((state)=>state.paste.pastes);
  const {id}=useParams();
  const paste=allPastes.filter((p)=>p?.id===id)[0];
  

  return (
    <>
      <div className=' w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto flex justify-center mt-2 shadow-2xl'>
      <input
      className='border w-full pl-2.5 h-10 outline-0 rounded-xl bg-white'
      type="text"
      placeholder='Enter Title Here..'
      value={paste.title}
      disabled
      onChange={(e)=>{setTitle(e.target.value)}}
       />
      </div>
      <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%] flex mx-auto rounded-b-2xl mt-2 shadow-2xl'>
      <textarea
      className='border flex w-full mx-auto p-2.5 outline-0 rounded-xl bg-white'
      placeholder='Enter Content Here...'
      value={paste.content}
      disabled
      onChange={(e)=>{setcontent(e.target.value)}}
      rows={15}
      />
      </div>
    </>
  )
}

export default ViewPaste
