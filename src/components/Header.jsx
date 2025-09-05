// import the 2 components we created
import Greeting from './Greeting';
import SocialLinks from './SocialLinks';

function Header() {
	return (
		<nav>
			<Greeting />
			<SocialLinks />
		</nav>
	);
}

export default Header;
