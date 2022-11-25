import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import SignUp from '../../pages/SignUp';
import Home from '../../pages/Home';
import ErrorPage from '../../pages/Error';
import EcoNavbar from '../Navbar';
import MemberIntro from '../../pages/MemberIntro';
import LatestNews from '../../pages/LatestNews';
import WorkShop from '../../pages/Workshop';
import AboutUs from '../../pages/AboutUs';
import ContactUs from '../../pages/ContactUs';
import Login from '../../pages/Login';

function EcoRouter() {
    return (
        <BrowserRouter>
            <EcoNavbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/aboutUs' element={<AboutUs />} />
                <Route exact path='/latestNews' element={<LatestNews />} />
                <Route exact path='/memberIntro' element={<MemberIntro />} />
                <Route exact path='/workshop' element={<WorkShop />} />
                <Route exact path='/contactUs' element={<ContactUs />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<SignUp />} />
                
                <Route exact path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default EcoRouter;