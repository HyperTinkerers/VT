// import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header/Header";
// import { HomePage } from "./Components/HomePage/HomePage";

function App() {
  return (
    <>
      <Header /> {/* Убираем лишний <header> — пусть компонент Header сам рендерит тег <header> */}
      <main>
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes> */}
      </main>
    </>
  );
}

export default App;