import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home';
import QuizHome from './pages/QuizHome';
import QuizQuestions from './pages/QuizQuestions';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/QuizHome" element={<QuizHome />} />
          <Route path="/QuizQuestions" element={<QuizQuestions />} />
          <Route path="*" element={
            <div className="alert alert-warning mt-5">
              <h2>404 - Page non trouvée</h2>
              <p>Cette page n'existe pas.</p>
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;