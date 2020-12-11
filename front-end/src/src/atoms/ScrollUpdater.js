function ScrollUpdater() {
		return (window.scrollY + window.innerHeight) / document.body.clientHeight * 100
}

export default ScrollUpdater;
