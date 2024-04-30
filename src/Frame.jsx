function Frame() {
	return (
		<div className="frame">
			<div className="frame__title items-center">
				<h1 className="frame__title-main">Idea from Manoela Ilic</h1>
				<a aria-label="Back to the article" className="frame__title-back" href="https://github.com/crnacura">
					<span className="oh__inner">Back to the article</span>
					<svg width="18px" height="18px" viewBox="0 0 24 24"><path vectorEffect="non-scaling-stroke" d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"></path>
					</svg>
				</a>
				<br />
			</div>
			<div className="frame__credits">Based on Vitalii Burhonskyis <a href="https://dribbble.com/shots/16788118-Design-Conference-Promo-Animation">Dribbble shot</a></div>
			<div className="frame__credits">Built for educational purposes</div>
		</div>

	)
}

export default Frame;