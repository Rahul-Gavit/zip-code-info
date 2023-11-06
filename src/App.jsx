import { SearchBar, LocationInfo } from "./components";
import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [locationData, setLocationData] = useState(null);

  const clearInfo = () => {
    setLocationData(null);
  };

  return (
    <>
      <div className="App">
        <SearchBar onSearch={(data) => setLocationData(data)} />
        <LocationInfo data={locationData} clearInfo={clearInfo} />
      </div>
    </>
  );
}

export default App;
