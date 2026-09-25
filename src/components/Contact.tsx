import tree from "@/assets/tree-off-side.png";

function Contact() {
	return (
		<section
			id="contact"
			className="section contact-section"
			aria-labelledby="contact-heading"
		>
			<div className="container contact-card">
				<div className="contact-content">
					<p className="eyebrow">Get In Touch</p>

					<h2 id="contact-heading">
						Have a project or opportunity in mind?
					</h2>

					<p>
						I'm available for front-end, back-end, and full-stack
						development opportunities, collaborations, and select
						freelance projects. Send me an email and tell me what
						you are working on.
					</p>

					<div className="contact-actions">
						<a
							className="button button-light"
							href="mailto:branson@bransonrose.dev"
						>
							Email Branson
						</a>

						<a
							className="contact-email"
							href="mailto:branson@bransonrose.dev"
						>
							branson@bransonrose.dev
						</a>
					</div>
				</div>

				<img
					className="contact-tree"
					src={tree}
					alt=""
					loading="lazy"
					aria-hidden="true"
				/>
			</div>
		</section>
	);
}

export default Contact;
