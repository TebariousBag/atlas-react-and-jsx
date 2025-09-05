import linksData from '../assets/links.json';

// mapped the link data, key is index. 
// link pulls the actual link, and the text for link is the label
function Footer() {
  const currentYear = new Date().getFullYear();
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
			<p>© {currentYear} Atlas School</p>
		</footer>
	);
}

export default Footer;
