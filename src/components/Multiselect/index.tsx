import React, { useState } from "react";

const Chip = ({ name, remove }: { name: string; remove: () => void }) => {
  return (
    <div className="flex justify-center items-center m-1 font-medium py-1 px-2  rounded-full text-teal-700 bg-teal-100 border border-teal-300 ">
      <div className="text-xs font-normal leading-none max-w-full flex-initial capitalize">
        {name}
      </div>
      <div
        className="flex flex-auto flex-row-reverse"
        onClick={() => {
          remove();
        }}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

let options = ["Truts", "Meta", "Google", "Facebook", "Amazon"];

function Multiselect() {
  const [visible, setvisible] = useState(false);
  const [selected, setselected] = useState<string[]>([]);
  const [inputfield, setinputfield] = useState("");
  return (
    <div
      onMouseEnter={() => {
        setvisible(true);
      }}
      onMouseLeave={() => {
        setvisible(false);
      }}
      className="w-full flex flex-col items-center  max-w-[700px] "
    >
      <div className="w-full ">
        <div className="flex flex-col items-center relative">
          <div className="w-full ">
            <div className="my-2 p-1 flex border border-gray-200 bg-white rounded ">
              <div className="flex flex-auto flex-wrap">
                {selected.map((s, key) => {
                  return (
                    <Chip
                      remove={() => {
                        setselected((sc) => {
                          return sc.filter((ele) => ele !== s);
                        });
                      }}
                      name={s}
                      key={key + "c"}
                    />
                  );
                })}
                <div className="flex-1">
                  <input
                    value={inputfield}
                    onChange={(e) => {
                      setinputfield(e.target.value);
                    }}
                    onKeyUp={(e) => {
                      if (e.key == "Enter") {
                        setselected((s) => {
                          return [...s, inputfield];
                        });
                      }
                    }}
                    placeholder=""
                    className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
                  />
                </div>
              </div>
              <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u">
                <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-chevron-up w-4 h-4"
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* dropdown */}
          <div
            className={`top-14 ${
              visible ? "" : "hidden"
            } absolute shadow bg-white z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj`}
          >
            <div className="flex flex-col w-full">
              {options.map((op, key) => {
                return (
                  <div
                    onClick={() => {
                      setselected((s) => {
                        return [...s, op];
                      });
                    }}
                    key={op + "op"}
                    className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100"
                  >
                    <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                      <div className="w-full items-center flex">
                        <div className="mx-2 leading-6  ">{op}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Multiselect;
