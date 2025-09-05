import linksData from '../assets/links.json';

function Footer() {
	return (
		<footer>
			<ul>
				{linksData.map((link, index) => (
                    <li key={index}>
                        <a href={link.link} target="_blank">
                            {link.label}
                        </a>
                    </li>
                ))}
			</ul>
		</footer>
	);
}

export default Footer;
