import React, { useEffect, useState } from "react";
import { getMoreImages, searchImages } from "../API-Requests";
import "./HomePage.css";

function HomePage() {
  const [imagelist, setImageList] = useState([]);
  const [searchValue, setSearchValue]= useState('')
  const [nextCursor, setNextCursor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const responseJson = await getMoreImages();
      setImageList(responseJson.resources);
      setNextCursor(responseJson.next_cursor);
    };

    console.log(imagelist);

    fetchData();
  }, []);

  const handleLoadMoreButtonClick = async () => {
    const responseJson = await getMoreImages(nextCursor);
    setImageList((currentImageList) => [...currentImageList, ...responseJson.resources
    ]);

    setNextCursor(responseJson.next_cursor);
  };

  const handleFormSubmit = async(event) =>
  {
    event.preventDefault();

    const responseJson = await searchImages(searchValue,nextCursor);
    setImageList(responseJson.resources);
    setNextCursor(responseJson.next_cursor);
  }

  const resetForm = async() => {

    const responseJson = await getMoreImages();
    setImageList(responseJson.resources);
    setNextCursor(responseJson.next_cursor);

    setSearchValue('');
  }

  return (
    <>
      <form onSubmit = {handleFormSubmit}>
        <input require="required" placeholder="Enter a search value "></input>
        <button type="submit">Search</button>
        <button type="button" onClick ={resetForm}>Clear</button>
      </form>

      <div className="image-grid">
        {imagelist.map((image) => (
          <img src={image.url} alt={image.public_id}></img>
        ))}
      </div>
      <div className="footer">
        {nextCursor && (
          <button onClick={handleLoadMoreButtonClick}>Load More</button>
        )}
      </div>
    </>
  );
}
export default HomePage;
