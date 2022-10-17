import "./App.css";
import FilterContextProvider from "./contexts/FilterContext/FilterContextProvider";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <FilterContextProvider>
        <MainPage />
      </FilterContextProvider>
    </>
  );
}

export default App;
