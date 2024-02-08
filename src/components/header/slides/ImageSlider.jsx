import { useState, useEffect, useCallback } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';

import { slides } from '../../../utils/BackgroundSlides';

function ImageSlider() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const goToNext = useCallback(() => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	}, [currentIndex]);

	// useEffect(() => {
	// 	const intervalId = setInterval(goToNext, 7000);
	// 	return () => clearInterval(intervalId);
	// }, [currentIndex, goToNext]);

	return (
		<div className='image-slider'>
			<BsChevronLeft
				className='image-slider--arrow image-slider--arrow__left'
				onClick={goToPrevious}
			/>
			{slides[currentIndex]}
			<BsChevronRight
				className='image-slider--arrow image-slider--arrow__right'
				onClick={goToNext}
			/>
		</div>
	);
}

export default ImageSlider;
