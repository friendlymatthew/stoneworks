import NavBar from "../components/NavBar";
import AnnouncementBar from "../components/Announcement";
import Footer from "../components/Footer";

export default function ContactPage() {
	return (
		<div className="grid grid-cols-1" style={{ fontFamily: "cabin" }}>
			<header className="sticky top-0 z-50">
				<NavBar />
			</header>

			<main
				style={{ backgroundSize: "cover" }}
				className="bg-screen bg-[url('/stars.jpg')] text-3xl w-full relativetext-2xl flex justify-around px-20 items-center h-screen"
			>
				<div>
					<div>Contact</div>
					<a
						href="mailto:Jpschnitzengruber@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						<div className=" text-blue-600 md:hover:underline md:hover:text-blue-400 md:ease-in md:duration-100 md:transition">
							Jpschnitzengruber@gmail.com
						</div>
					</a>
				</div>
				<div>
					<div>discord</div>
					<div>StoneyStoner#3409</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
