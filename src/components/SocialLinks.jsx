import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';

function SocialLinks() {
	return (
		<div className="social-links">
			<a href="https://www.linkedin.com/in/tristiandavis/" target="_blank" alt="linked-in">
				<img src={linkedinIcon} alt="LinkedIn" />
			</a>
			<a href="https://github.com/TebariousBag/atlas-react-and-jsx" target="_blank" alt="github-repo">
				<img src={githubIcon} alt="GitHub" />
			</a>
		</div>
	);
}

export default SocialLinks;
