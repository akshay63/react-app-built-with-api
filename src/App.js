import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {/* <SearchBar onSubmitEvent={handleSubmit} />: REMEMBER: When we attach event listeners to Components, its not necessary to name the event like we do in buttons tags where it is compulsory to name event handler like <button onClick={someEventHandlerFunc}>Click me!</button>. So as a prop we can name them anything meaningful and pass them to the child components as props as Event Handlers. */}
      <ImageList images={images} />
    </div>
  );
}

export default App;

/**
 * HOW DATA FLOWS IN A REACT FROM A CHILD TO A PARENT:
 * 1. Define a callback in a parent
 * 2. Pass the callback in a prop system to the child
 * 3. Whenever some event occurs in a child, call that callback
 * 4. Then pass in any data we want to display from the child to the parent
 */
