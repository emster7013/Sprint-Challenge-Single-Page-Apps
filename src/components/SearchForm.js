import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  const setResults = props.setDataToDisplay;

  const [searchTerm, setSearchTerm] = useState("");
  const [dataToSearch] = useState(props.data);

  const handleChange = event => setSearchTerm(event.target.value);

  useEffect(() => {
    const results = dataToSearch.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, setResults, dataToSearch]);

  return (
    <form className="search-form">
      <input placeholder="Search" value={searchTerm} onChange={handleChange} />
    </form>
  );
}
