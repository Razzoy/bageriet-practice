import style from './Slider.module.scss'
import slide1 from '../../assets/images/slide1.jpg'
import slide2 from '../../assets/images/slide2.jpg'
import slide3 from '../../assets/images/slide3.jpg'
import { useEffect, useState } from 'react';


export function Slider() {

    const imageArray = [slide1, slide2, slide3];
    const [currentIndex, setCurrentIndex] = useState(0);

    //updates the index number with +1 that is used to show the current image
    function nextIndex() {
        if (currentIndex === imageArray.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    //updates the index number with -1 that is used to show the current image
    function previousIndex() {
        if (currentIndex === 0) {
            setCurrentIndex(imageArray.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    //creates a timeout that increments index after 5000ms and re-runs every time currenindex Updated
    useEffect(() => {
        let timeout = setTimeout(() => {
            nextIndex();
            console.log(currentIndex);

        }, 5000);
        return () => clearTimeout(timeout)
    }, [currentIndex]);

    return (
        <header className={style.slider}>
            <img src={imageArray[currentIndex]} />
            <div className={style.slideContainer}>
                <button onClick={previousIndex}>
                    <img src="src/assets/icons/chevron.png" />
                </button>
                <h2>Vi elsker at lave brød</h2>
                <button onClick={nextIndex}>
                    <img src="src/assets/icons/chevron.png" />
                </button>
            </div>
            <div>
                <span onClick={() => setCurrentIndex(0)} className={currentIndex === 0 ? style.isActive : ''}></span>
                <span onClick={() => setCurrentIndex(1)} className={currentIndex === 1 ? style.isActive : ''}></span>
                <span onClick={() => setCurrentIndex(2)} className={currentIndex === 2 ? style.isActive : ''}></span>
            </div>
        </header>
    )
}
