
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from "./App";
import AboutPage from './components/about/about';
import HomePage from './components/homePage/homePage';
import MyTodo from './components/myTodo';

function MainRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path='/home' element={<HomePage/>} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/myTodo' element={<MyTodo/> } />
            </Routes>
        </Router>
    );
}

export default MainRouter;