import React from "react";
// import images
import daytimeImg from '../assets/day.svg';
import eveningImg from '../assets/evening.svg';
import nighttimeImg from '../assets/night.svg';

export function Greeting() {
    const greetingTime = () => {
		// variable for text and image to displey
		let imgSrc = '';
		let textSrc = '';
		// get the current time
		const currentTime = new Date().getHours();
		// logic for what image and text to use
        if (currentTime > 5 && currentTime < 12) {
            imgSrc = daytimeImg;
            textSrc = 'Good Morning!';
        } else if (currentTime > 11 && currentTime < 17) {
            imgSrc = daytimeImg;
            textSrc = 'Good Afternoon!';
        } else if (currentTime > 16 && currentTime < 21) {
            imgSrc = eveningImg;
            textSrc = 'Good Evening!';
        } else {
			imgSrc = nighttimeImg;
			textSrc = 'Good Night!';
		}
		// need to return it so we can use it outside the block
        return { imgSrc, textSrc };
	};

	const { imgSrc, textSrc } = greetingTime();
	// return our greeting with the approriate message and image
	return (
		<h1 className="greeting">
			<img src={imgSrc} alt="Time of day" /> {textSrc}
		</h1>
	);
}
// export so we can use outside
export default Greeting;
