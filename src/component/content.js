import React from "react";
import image1 from './image/img1.png';
import image2 from './image/img2.png';
import image3 from './image/img3.png';
import image4 from './image/img4.png';

const Content =()=>{
    return(
        <div className="content">
            <div className="video">
                <div className="item">
                <img src={image1} alt="Image 1" className="gallery-image" />
                    <h3>Breaking News</h3>
                    <p>Mirror Now </p>
                </div>
                <div className="item">
                <img src={image2} alt="Image 2" className="gallery-image" />
                    <h3>Breaking News</h3>
                    <p>Mirror Now </p>
                </div>
                <div className="item">
                <img src={image3} alt="Image 3" className="gallery-image" />
                    <h3>Breaking News</h3>
                    <p>Mirror Now </p>
                </div>
                <div className="item">
                <img src={image4} alt="Image 4" className="gallery-image" />
                    <h3>Breaking News</h3>
                    <p>Mirror Now </p>
                </div>
            </div>
        </div>
    );
}

export default Content;