import "@/App.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<main id="main-content">
				<Hero />
				<Projects />
				<About />
				<Skills />
				<Certifications />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

export default App;
