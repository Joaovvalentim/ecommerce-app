import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
// Importe outros componentes que você criou ou irá criar

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                {/* Defina as rotas e outros componentes aqui */}
            </div>
        </Router>
    );
}

export default App;


