import "./App.css";
import Container from "./components/Container";
import PixabayImages from "./components/PixabayImages";
import SearchBar from "./components/SearchBar";
import { SearchContextProvider } from "./Contexts/SearchContext";

function App() {
  return (
    <div className="App bg-gray-100">
      <SearchContextProvider>
        <Container>
          <SearchBar />
          <PixabayImages />
        </Container>
      </SearchContextProvider>
    </div>
  );
}

export default App;
