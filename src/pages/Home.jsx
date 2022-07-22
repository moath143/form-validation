import React from 'react'
import Navbar from "../components/Navbar";
import Photo from '../assets/photo.png'
import {Image} from "./styleSignup";

const Home = () => {
    return(
        <>
            <Navbar />
            <Image>
                <img src={Photo} alt="photo" />
            </Image>

        </>
    )
}
export default Home