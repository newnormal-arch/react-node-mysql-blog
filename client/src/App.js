import { BrowserRouter, Routes, Route} from "react-router-dom";
import Blogs from "./pages/Blogs";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blogs />}/>
          <Route path="/new-post" element={<Create />}/>
          <Route path="/update-post" element={<Update />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
