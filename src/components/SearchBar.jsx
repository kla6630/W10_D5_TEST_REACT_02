import { useState } from "react";
import { Container, Button } from "react-bootstrap";

function SearchBar({ initialValue, onSearch }) {
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <>
      <Container className="SB_Container">
        <h5>City</h5>
        <input className="SB_Input" type="text" value={searchValue} onChange={handleInputChange} />
        <Button className="SB_button" onClick={handleSearch}>
          Search
        </Button>
      </Container>
    </>
  );
}

export default SearchBar;
