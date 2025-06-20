import React, { useEffect, useRef, useState } from "react";

const AutoSuggestionField = ({ contractIds ,plHolder,filterdData}) => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(filterdData);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null); 
  // // ⬇️ Click outside detection
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
  //       setShowSuggestions(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFiltered([]);
      setShowSuggestions(false);
      return;
    }

    const filteredList = contractIds.filter((id) =>
      id.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(filteredList);
    setShowSuggestions(true);
  };

  const handleSelect = (value) => {
    setQuery(value);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full max-w-sm">
      {/* Input with Unicode 🔍 icon */}
      <div className="flex items-center border rounded px-2 py-1 bg-white shadow-sm">
        {/* <span className="text-gray-500 text-sm mr-2">🔍</span> */}
        <input
          type="text"
          className="w-full outline-none text-sm text-gray-700"
          placeholder={plHolder}
          value={query}
          onChange={handleInputChange}
          onFocus={() => query && setShowSuggestions(true)}
        />
      </div>

      {/* Suggestions dropdown */}
      {showSuggestions && filtered.length > 0 && (
        <ul className="absolute z-10 bg-white w-full mt-1 border rounded shadow max-h-48 overflow-auto text-sm">
          {filtered.map((id, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
              onClick={() => handleSelect(id)}
            >
              {id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoSuggestionField;
