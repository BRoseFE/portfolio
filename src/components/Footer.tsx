import resume from "@/assets/resume/Branson_Rose_Full_Stack_Developer.pdf";

function Footer() {
	return (
		<footer className="site-footer">
			<div className="container footer-content">
				<div>
					<a
						className="site-logo footer-logo"
						href="#top"
						aria-label="Back to top"
					>
						<span className="logo-mark">BR</span>

						<span className="logo-text">Branson Rose</span>
					</a>

					<p>Full-Stack Developer based in Ontario, Canada.</p>
				</div>

				<div className="footer-links">
					<a
						href="https://github.com/BRoseFE"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>

					<a href="mailto:branson@bransonrose.dev">Email</a>

					<a href={resume} target="_blank" rel="noopener">
						Resume
					</a>
				</div>

				<p className="copyright">
					© {new Date().getFullYear()} Branson Rose
				</p>
			</div>
		</footer>
	);
}

export default Footer;
