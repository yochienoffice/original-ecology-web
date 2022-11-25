import { useState, useEffect, useReducer } from "react";
import './index.css';
import SignUp from "../SignUp";
// import { useParams } from "react-router-dom";
import { FaDonate } from 'react-icons/fa';
import React from 'react';
import NewsCard from '../../components/NewsCard';
import Image from 'react-bootstrap/Image';
import { WorkShopData } from "../../data/data";

function Home() {
    // const [user, setUser] = useState("Yoyo");
    // const params = useParams();
    const [showTopBtn, setShowTopBtn] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const [state, dispatch] = useReducer(reducer, {user: null});

    useEffect(() => {
        
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 0) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        dispatch({type: 'login'});
        // window.scrollTo({
        //     top: 0,
        //     behavior: 'smooth',
        // });
    };
    
    return (
        <div className='home-app'>
            <div className="home-marquee">
                ECO marquee
            </div>
            <div className="home-latestnews">
                <NewsCard className="home-newscard" />
                <NewsCard className="home-newscard" />
                <NewsCard className="home-newscard" />
                <NewsCard className="home-newscard" />
            </div>
            <div className="home-workshop">
                <div className="home-workshop-title">
                    工坊進度
                </div>
                <div className="home-workshop-content">
                    {WorkShopData.map((img, index) => 
                        <Image
                        className="home-workshop-image"
                        // thumbnail={true}
                        src= {img.src}
                    />
                    )}
                </div>
            </div>
            <div>Original Ecology Home Page</div>
            <div className="top-to-btm">
                {showTopBtn && (
                    <FaDonate
                        className="icon-position icon-style"
                        onClick={goToTop}
                    />
                )}
            </div>
        </div>
    )
}

function reducer(state, action) {
    console.log("Login Test: " + action.type);
    switch(action.type) {
        case 'login':
            return { 
                user: 'Yoyo Chien'
            }
        default:
            return { 
                user: null
            }
    }
}

export default Home;