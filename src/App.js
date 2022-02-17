import "./App.css";
import Container from "./components/Container";
import PixabayImages from "./components/PixabayImages";
import Plaiceholder from "./components/Plaiceholder";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App bg-gray-100">
      <Container>
        <SearchBar />
        <PixabayImages />
        {/* <Plaiceholder /> */}
      </Container>
    </div>
  );
}

export default App;
