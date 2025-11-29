import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiEdit } from "react-icons/ci";
import { MdContentCopy } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { removeFromPastes } from "../redux/PasteSlice";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);

  const [search, setsearch] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(search.toLowerCase())
  );

  function delpaste(paste) {
    dispatch(removeFromPastes(paste));
  }
  function copy(paste) {
    navigator.clipboard.writeText(paste?.content);
    toast.success("Copid To Clipboard!");
  }
  function view(paste) {
    navigate(`/pastes/${paste?.id}`);
  }
  function edit(paste) {
    navigate(`/?pasteid=${paste?.id}`);
  }
  
  return (
    <>
      <div className="mt-2 shadow-2xl w-full sm:w-[80%] md:w-[70%] lg:w-[60%] flex mx-auto rounded-2xl ">
        <input
          type="search"
          className="border rounded-2xl w-full p-2.5 outline-0 "
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        />
      </div>
      <div className="border w-full sm:w-[80%] md:w-[70%] lg:w-[60%] flex flex-col gap-3 mx-auto mt-2 rounded-2xl py-6 shadow-2xl bg-blue-500">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div key={paste.id}>
                <div className="relative border w-full sm:w-[90%] flex flex-col sm:flex-row rounded-[5px] mx-auto bg-white p-2 ">
                  <div className="flex-1">
                    {paste.title}
                    <p className="max-h-20 overflow-y-auto">
                      <br />
                      {paste.content}
                    </p>
                  </div>
                  <div className="flex sm:absolute sm:right-0 sm:w-[140px] justify-end sm:justify-start gap-1 mt-2 sm:mt-0">
                    <button
                      className="border p-1 rounded-lg"
                      onClick={() => edit(paste)}
                    >
                      <CiEdit />
                    </button>
                    <button
                      className="border p-1 rounded-lg"
                      onClick={() => copy(paste)}
                    >
                      <MdContentCopy />
                    </button>
                    <button
                      className="border p-1 rounded-lg"
                      onClick={() => view(paste)}
                    >
                      <GrView />
                    </button>
                    <button
                      className="border p-1 rounded-lg"
                      onClick={() => delpaste(paste?.id)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                  <div className="sm:absolute sm:w-[150px] sm:right-0 sm:bottom-0 mt-2 sm:mt-0 text-right">
                    {paste.createdAt}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Paste;
