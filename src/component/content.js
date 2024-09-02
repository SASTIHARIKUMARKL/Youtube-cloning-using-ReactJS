import React from "react";
import image1 from './image/img1.png';
import image2 from './image/img2.png';
import image3 from './image/img3.png';
import image4 from './image/img4.png';
import image5 from './image/img5.png';
import image6 from './image/img6.png';
import image7 from './image/img7.png';
import image8 from './image/img8.png';
import image9 from './image/img9.png';
import image10 from './image/img10.png';
import image11 from './image/img11.png';
import image12 from './image/img12.png';
import { SiYoutubeshorts } from "react-icons/si";
import { MdVerified } from "react-icons/md";


const Content =()=>{
    return(
        <div className="content">
            <div className="video">
            <div className="item">
                <img src={image5} alt="Image 5" className="gallery-image" />
                    <h3>HTML Tutorial for Beginners: HTML Crash Course</h3>
                    <p>Programming with mosh</p>
                    <p>8.8m views . 2 years ago <MdVerified /></p>
                </div>
                <div className="item">
                <img src={image6} alt="Image 6" className="gallery-image" />
                    <h3>JavaScript tutorial for Beginners in Tamil | DOM Explained</h3>
                    <p>Error Makes Clever</p>
                    <p>946k views . 10 months ago</p>
                </div>
                <div className="item">
                <img src={image7} alt="Image 7" className="gallery-image" />
                    <h3>React JS Full Course 2023 | Build an App and Master React</h3>
                    <p>JavaScript Mastery</p>
                    <p>1.6m views . 2 years ago <MdVerified /></p>
                </div>
                <div className="item">
                <img src={image8} alt="Image 8" className="gallery-image" />
                    <h3>Build app using React JS, Node Express JS and Mongo DB (MERN Stack)</h3>
                    <p>Art of Engineer</p>
                    <p>80k views . 1 year ago</p>
                </div>
                <div className="item">
                <img src={image1} alt="Image 1" className="gallery-image" />
                    <h3>Breaking News</h3>
                    <p>Mirror Now </p>
                    <p>85k views . 2 hours ago <MdVerified /></p>
                </div>
                <div className="item">
                <img src={image2} alt="Image 2" className="gallery-image" />
                    <h3>Breaking News</h3>
                    <p>Mirror Now </p>
                    <p>1m views . 2 days ago <MdVerified /></p>
                </div>
                <div className="item">
                <img src={image3} alt="Image 3" className="gallery-image" />
                    <h3>Breaking News</h3>
                    <p>Mirror Now </p>
                    <p>250k views . 13 hors ago <MdVerified /></p>
                </div>
                <div className="item">
                <img src={image4} alt="Image 4" className="gallery-image" />
                    <h3>Breaking News</h3>
                    <p>Mirror Now </p>
                    <p>3.2m views . 3 weeks ago <MdVerified /></p>
                </div>
                </div>
                <div className="short"><SiYoutubeshorts className="hex" />Shorts</div>
                <div className="video">
                <div className="item shorts">
                    <img src={image9} alt="image9" className="gallery-image" />
                    <h3>No Looks plays</h3>
                    <p>2.2m views</p>
                </div>
                <div className="item shorts">
                    <img src={image10} alt="image10" className="gallery-image" />
                    <h3>Imagine this is future of cricket</h3>
                    <p>1.8m views</p>
                </div>
                <div className="item shorts">
                    <img src={image11} alt="image11" className="gallery-image" />
                    <h3>999 IQ moments #football</h3>
                    <p>315k views</p>
                </div>
                <div className="item shorts">
                    <img src={image12} alt="image12" className="gallery-image" />
                    <h3>Rare moments in football</h3>
                    <p>113k views</p>
                </div>
            </div>
        </div>
    );
}

export default Content;