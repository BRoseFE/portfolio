function Header() {
	return (
		<header className="site-header">
			<div className="container navigation">
				<a
					className="site-logo"
					href="#top"
					aria-label="Branson Rose homepage"
				>
					<span className="logo-mark">BR</span>

					<span className="logo-text">Branson Rose</span>
				</a>

				<nav aria-label="Primary navigation">
					<ul className="nav-list">
						<li>
							<a href="#projects">Projects</a>
						</li>

						<li>
							<a href="#about">About</a>
						</li>

						<li>
							<a href="#skills">Skills</a>
						</li>

						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</nav>

				<a
					className="button button-small button-outline"
					href="./Branson_Rose_Full_Stack_Developer.pdf"
					target="_blank"
					rel="noopener"
				>
					Resume
				</a>
			</div>
		</header>
	);
}

export default Header;
