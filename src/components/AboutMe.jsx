import profilePic from '../assets/profile-pic.jpeg';

function AboutMe() {
	return (
		<div className="about-me">
			<img src={profilePic} alt="Tristian Davis profile picture" />
			<p>My name is Tristian Davis. I am a full-stack/web development student in my final trimester of school. I really enjoy working with front end technologies. I think a lot of what JavaScript can do is pretty cool, and so far I am enjoying learning React. I'm hoping to find a job in a field where I can be creative and do some front end creating. In my free time I enjoy drawing and playing with different animation programs.</p>
		</div>
	)
};

export default AboutMe;
