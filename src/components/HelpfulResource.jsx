import OpenLink from "./OpenLink"
import CopyLink from "./CopyLink"

function HelpfulResource({ link, label }) {
	return (
		<div className="helpful-resource">
			<p>{label}</p>
			<OpenLink link={link} />
			<CopyLink link={link} />
		</div>
	);
}

export default HelpfulResource;
