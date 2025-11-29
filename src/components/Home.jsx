import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { addToPastes, updateToPastes } from '../redux/PasteSlice'

const Home = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [params, setParams] = useSearchParams();
  const pasteid = params.get("pasteid");

  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  function create() {
    const paste = {
      title,
      content,
      id: pasteid || Date.now().toString(36),
      createdAt: new Date().toLocaleDateString("en-US", {
         day: "2-digit",
          month: "long",
         year: "numeric"
})

    };

    if (pasteid) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle('');
    setContent('');
    setParams({});
  }

  useEffect(() => {
    if (pasteid) {
      const paste = allPastes.find((p) => p.id === pasteid);

      if (paste) {    
        setTitle(paste.title);
        setContent(paste.content);
      }
    }
  }, [pasteid, allPastes]);

  return (
    <>
      <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto flex justify-center mt-2 shadow-2xl'>
        <input
          className='border w-full sm:w-[75%] pl-2.5 h-10 outline-0 rounded-l-xl bg-white'
          type="text"
          placeholder='Enter Title Here..'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          className='flex justify-center w-full sm:w-[25%] bg-white rounded-r-xl border items-center hover:bg-blue-500 hover:text-white hover:border-black transition-all delay-75 cursor-pointer '
          onClick={create}
        >
          {pasteid ? "Update Paste" : "Create My Paste"}
        </button>
      </div>

      <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%] flex mx-auto rounded-b-2xl mt-2 shadow-2xl'>
        <textarea
          className='border flex w-full mx-auto p-2.5 outline-0 rounded-xl bg-white'
          placeholder='Enter Content Here...'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={15}
        />
      </div>
    </>
  )
}

export default Home
