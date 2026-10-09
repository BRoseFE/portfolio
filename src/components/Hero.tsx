import tree from "@/assets/tree-off-side.png";
import headshot from "@/assets/headshot.jpg";
import mountain from "@/assets/icons/mountain.png";
import wave from "@/assets/wave-line.png";

function Hero() {
	return (
		<section id="top" className="hero" aria-labelledby="hero-heading">
			<img className="hero-tree" src={tree} alt="" aria-hidden="true" />

			<div className="container hero-layout">
				<div className="hero-content">
					<p className="eyebrow">
						Front-End Developer | React & TypeScript
					</p>

					<h1 id="hero-heading">
						Building thoughtful web experiences from
						<span>interface to database.</span>
					</h1>

					<p className="hero-description">
						I'm Branson, a front-end developer working with React,
						JavaScript, and TypeScript. I build responsive,
						accessible, and maintainable applications with a strong
						focus on clean structure and practical user experience.
						I also have experience with Django and backend
						development.
					</p>

					<div className="hero-actions">
						<a className="button button-primary" href="#projects">
							View My Projects
						</a>

						<a
							className="button button-secondary"
							href="mailto:branson@bransonrose.dev"
						>
							Contact Me
						</a>
					</div>

					<ul
						className="hero-specialties"
						aria-label="Development specializations"
					>
						<li>React Interfaces</li>
						<li>Django APIs</li>
						<li>Relational Databases</li>
						<li>Accessible Design</li>
					</ul>
				</div>

				<div className="hero-visual">
					<div className="portrait-frame">
						<img
							className="hero-headshot"
							src={headshot}
							alt="Branson Rose"
							width="700"
							height="700"
						/>

						<img
							className="mountain-icon"
							src={mountain}
							alt=""
							aria-hidden="true"
						/>
					</div>

					<div className="availability-card">
						<span className="availability-dot"></span>

						<div>
							<strong>Available for opportunities</strong>
							<span>Front-end | React & TypeScript</span>
						</div>
					</div>
				</div>
			</div>

			<img className="hero-waves" src={wave} alt="" aria-hidden="true" />
		</section>
	);
}

export default Hero;
