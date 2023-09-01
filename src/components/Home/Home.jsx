import { useEffect } from "react";
import "./Home.css";
import Products from "../Products/Products";

const Home = () => {
    useEffect(() => Slider(0), []);
    return (
        
    <>
    <div className="Home">
        <div className="HomeContainer">
            <div className="HomeSliderContainer">
                <div className="HomeSlide">
                    <img src="Https://m.media-amazon.com/images/I/41FBwjCnS2L._SX1500_.jpg" alt="" 
                    className="HomeImg" />
                </div>
                <div className="HomeSlide">
                    <img src="Https://m.media-amazon.com/images/I/41FBwjCnS2L._SX1500_.jpg" alt="" 
                    className="HomeImg" />
                </div>
                <div className="HomeSlide">
                    <img src="Https://m.media-amazon.com/images/I/41FBwjCnS2L._SX1500_.jpg" alt="" 
                    className="HomeImg" />
                </div>
                <div className="HomeSlide">
                    <img src="Https://m.media-amazon.com/images/I/41FBwjCnS2L._SX1500_.jpg" alt="" 
                    className="HomeImg" />
                </div>
                 <div className="HomeSlide">
                    <img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" alt="" 
                    className="HomeImg" />
                </div>
            </div>

            <div className="HomeRow">
                <Products title={"The Only One Left: A Novel"} price={18.42} image={"https://m.media-amazon.com/images/I/41XN+xyVEwL._AC_SY200_.jpg"}/>
                <Products title={"Pokemon TCG: Random Cards from Every Series, 50 Cards in Each Lot"} price={4.33} image={"https://m.media-amazon.com/images/I/614ngmgsIcL._AC_UL320_.jpg"}/>
                <Products title={"AILIHEN C8 Headphones Wired with Microphone and Volume Control Folding Lightweight Headset for Cellphones Tablets Chromebook Smartphones Laptop Computer PC Mp3/4 (Black/Blue)"} price={18.42} image={"https://m.media-amazon.com/images/I/81yiZag3xhL._AC_UY218_.jpg"}/>
                <Products title={"Samsung 970 EVO Plus SSD 2TB NVMe M.2 Internal Solid State Hard Drive, V-NAND Technology, Storage and Memory Expansion for Gaming, Graphics w/ Heat Control, Max Speed, MZ-V7S2T0B/AM"} price={89.20} image={"https://m.media-amazon.com/images/I/51Brl+iYtvL._AC_UL320_.jpg"}/>
            </div>
            <div className="HomeRow">
                <Products title={"The Only One Left: A Novel"} price={18.42} image={"https://m.media-amazon.com/images/I/41XN+xyVEwL._AC_SY200_.jpg"}/>
                <Products title={"The Only One Left: A Novel"} price={18.42} image={"https://m.media-amazon.com/images/I/41XN+xyVEwL._AC_SY200_.jpg"}/>
                <Products title={"The Only One Left: A Novel"} price={18.42} image={"https://m.media-amazon.com/images/I/41XN+xyVEwL._AC_SY200_.jpg"}/>
                <Products title={"The Only One Left: A Novel"} price={18.42} image={"https://m.media-amazon.com/images/I/41XN+xyVEwL._AC_SY200_.jpg"}/>
            </div>
        </div>
    </div> 
    </>




)
}

function Slider(Counter) {
    const slides = document.querySelectorAll(".HomeImg");
    slides.forEach((slide, index) => {
        if(index !== Counter) {
            slide.style.visibility= 'hidden';
            slide.classList.add('image-${index}')
        }
    })
    moveCarousel(Counter,slides,slides.length)
}
function moveCarousel(Counter,slides,len) {
    if(slides) {
        if(Counter >= len -1) Counter = 0;
        else Counter += 1;
        slides.forEach((slide,index) => {
            if(index === Counter) {
            slide.style.visibility= 'visible';
        } else{
            slide.style.visibility= 'hidden';
            
        }

        });

    }
    setTimeout(() => {
        moveCarousel(Counter, slides, len);
    }, 2000);
}
export default Home;