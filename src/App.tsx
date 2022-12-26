import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Footer, Header } from './components';
import { Main, Education, Employment, Projects, Contact } from './views';
import './App.css';

function App() {

  return (
    <div style={{
      padding: "3em",
    }}>
      <BrowserRouter>
        <div style={{
          display: "flex",
          flexDirection: "column",
        }}>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/edu" element={<Education />} />
            <Route path="/emp" element={<Employment />} />
            <Route path="/prj" element={<Projects />} />
            <Route path="/ctt" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
