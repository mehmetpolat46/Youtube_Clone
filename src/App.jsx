import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import Header from "./components/Header";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed/>} />
        <Route path="/watch/:videoId" element={<VideoDetail />} />
        <Route path="/results" element={<SearchResults/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
