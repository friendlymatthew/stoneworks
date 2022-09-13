import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AnnouncementBar from "../components/Announcement";
import Image from "next/image";

export default function MinecraftPage() {
	return (
		<div>
			<header className="sticky top-0 z-50">
				<NavBar />
			</header>
			<main
				className="bg-screen bg-[url('/stars.jpg')] h-screen w-full relative"
				style={{ fontFamily: "Cabin", backgroundSize: "cover" }}
			>
				<div className="flex flex-col items-center justify-center h-screen">
					<div className="text-start text-xl w-9/12 mb-20">
						The Stoneworks Minecraft server host a couple of online worlds where
						players can come together, create communities, towns, nations,
						religions, and cultures, all in the vein of creative world building.
						On top of this, though, these player-driven communities can embroil
						themselves in in-game conflicts, storylines, wars, and more. The
						Stoneworks Minecraft server boasts some of the deepest and most
						diverse history anad player-created lore of any online game, and is
						truly a remarkable simulation of what players are capable of, given
						the right tools. The Minecraft server is well known for being an
						intense place in its player interactions, and for its heavy
						moderation by its diligent staff team. While conflicts and
						heightened emotions are a prevalent part of the experience, the
						community is curated to be a safe and healthy place for all who wish
						to engage in it.
					</div>
					<div>
						<div className="text-base-content text-lg md:text-3xl">
							Minecraft IP: Play.Stoneworks.GG
						</div>
						<a
							href="https://discord.gg/stoneworks"
							target="_blank"
							rel="noreferrer"
							className="text-orange-500 md:hover:text-orange-400 md:ease-in md:duration-100 md:transition text-lg md:text-3xl hover:underline"
						>
							discord.gg/stoneworks
						</a>
					</div>
				</div>
				<Footer />
			</main>
		</div>
	);
}
