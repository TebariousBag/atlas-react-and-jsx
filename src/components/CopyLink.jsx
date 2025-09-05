import copyImg from '../assets/copy.svg';

function CopyLink({ link }) {
	// to handle copy to clipbooard, needed a function or it copies right away
	const onClicked = async () => {
		try {
			await navigator.clipboard.writeText(link);
		} catch (err) {
			console.error('copy fail', err);
		}
	};

	return (
	<img className="copy" alt="copy link" src={copyImg} onClick={onClicked} />
	);
}

export default CopyLink;
