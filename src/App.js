import "./App.css";
import Container from "./components/Container";
import PixabayImages from "./components/PixabayImages";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App bg-gray-100">
      <Container>
        <SearchBar />
        <PixabayImages />
      </Container>
    </div>
  );
}

export default App;
