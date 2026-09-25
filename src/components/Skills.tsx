function Skills() {
	return (
		<section
			id="skills"
			className="section skills-section"
			aria-labelledby="skills-heading"
		>
			<div className="container">
				<div className="section-heading">
					<div>
						<p className="eyebrow">Technical Skills</p>

						<h2 id="skills-heading">Tools I use to build</h2>
					</div>

					<p>
						My current development stack covers responsive
						interfaces, backend APIs, relational data, deployment,
						accessibility, and version control.
					</p>
				</div>

				<div className="skills-grid">
					<article className="skill-card">
						<span className="skill-number">01</span>

						<h3>Frontend</h3>

						<p>
							Responsive interfaces built with reusable components
							and clear visual structure.
						</p>

						<ul>
							<li>React</li>
							<li>TypeScript</li>
							<li>React Router</li>
							<li>JavaScript ES6+</li>
							<li>HTML5</li>
							<li>CSS3</li>
							<li>CSS Modules</li>
						</ul>
					</article>

					<article className="skill-card">
						<span className="skill-number">02</span>

						<h3>Backend</h3>

						<p>
							API-driven backend applications with structured
							models, serializers, views, and routing.
						</p>

						<ul>
							<li>Python</li>
							<li>Django</li>
							<li>Django REST Framework</li>
							<li>REST APIs</li>
							<li>Authentication</li>
							<li>CRUD Operations</li>
						</ul>
					</article>

					<article className="skill-card">
						<span className="skill-number">03</span>

						<h3>Data & Tools</h3>

						<p>
							Relational data management and practical development
							workflows.
						</p>

						<ul>
							<li>PostgreSQL</li>
							<li>MySQL</li>
							<li>SQLite</li>
							<li>Git</li>
							<li>GitHub</li>
							<li>VS Code</li>
						</ul>
					</article>

					<article className="skill-card">
						<span className="skill-number">04</span>

						<h3>Accessibility</h3>

						<p>
							Interfaces structured to be understandable,
							navigable, and reliable.
						</p>

						<ul>
							<li>Semantic HTML</li>
							<li>Keyboard Navigation</li>
							<li>ARIA</li>
							<li>Responsive Design</li>
							<li>Accessible Forms</li>
							<li>Performance Awareness</li>
						</ul>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Skills;
