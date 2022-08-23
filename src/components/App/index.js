import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { News } from "./components/News";
import { Routes, Route } from 'react-router-dom';
import { Article } from "../article";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<News />} />
        <Route path="/article/:uri" element={<Article />} />
      </Routes>
      <Footer />
    </>
  );
}
