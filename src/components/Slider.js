import React, { useState } from 'react';
import { Testimonals } from './Testimonials';
import './Slider.css';

const Slider = () => {
	const [count, setCount] = useState(0);

React.useEffect(() => {
	const timerId = setInterval(
		() => setCount((count) => (count + 1) % Testimonals.length), // <-- increment index
		8000
	);
		return () => clearInterval(timerId);
}, []);

	return (
		<div className='slider-box'>
			<h2 className='testimonial-heading'>Testimonals</h2>
			<i id="chevron-left" class="fas fa-chevron-left"
			onClick={() => {
				if(count > 0) {
					setCount(count - 1)
				} else {
					setCount(Testimonals.length - 1);
				}} 
			}>
			</i>
			<div className='testimonials'>
				<h3 className='testimonial'>"{Testimonals[count].testimonial}"</h3>
				<h4 className='testimonial-name'>{Testimonals[count].name} - {Testimonals[count].suburb}, {Testimonals[count].year}</h4>
			</div>
			<i id="chevron-right" class="fas fa-chevron-right" 
			onClick={() => {
				if(count < Testimonals.length - 1) {
					setCount(count + 1)
				} else {
					setCount(0);
				}} 
			}>
			</i>
		</div>
	)
}

export default Slider;