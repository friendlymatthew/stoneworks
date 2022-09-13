import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import AnnouncementBar from "../components/Announcement";
import ReactPlayer from "react-player";
import ProgressBar from "../components/Progress";
import { Grid } from "@material-ui/core";
import Footer from "../components/Footer";
import react, { useEffect } from "react";
import Link from "next/link";
import Button from "../components/Button";
import YouTubePlayer from "react-player/youtube";

const channelCategories = [
	{
		key: "Education",
		id: "#education",
		url: "https://www.youtube.com/watch?v=m_LG9xBpTI4&t=1s",
		desc: "Scientific, Historical, Storytelling, and Cultural education to help inform others’ world building projects with real and grounded knowledge on how the world works.",
	},
	{
		key: "Minecraft",
		id: "#minecraft",
		url: "https://www.youtube.com/watch?v=4Zku2h_XHjo",
		desc: "Storytelling and tutorials surrounding the Stoneworks Minecraft Server, which demonstrates the creativity and complexity that our online community has succeeded in developing.",
	},
	{
		key: "Personal Projects",
		id: "#worldbuilding",
		url: "https://www.youtube.com/watch?v=idZmLKInbsg",
		desc: "Jack Stonework’s personal world building projects, simply for the sake of having fun and demonstrating one example of how world building can be carried out and achieved.",
	},
];

export default function Home() {
	useEffect(() => {});

	return (
		<html className="bg-[#0f0e10]">
			<main className="relative" style={{ fontFamily: "Cabin" }}>
				<div
					className="bg-screen bg-[url('/stars.jpg')] h-screen w-full "
					style={{
						backgroundSize: "cover",
					}}
				>
					<NavBar />
					<div className="flex flex-col space-y-30 pt-56 items-center justify-center">
						<div className="mb-40">
							<div className="px-30 text-lg md:text-6xl text-center font-extrabold tracking-wide italic text-[#f8f8da] mb-32">
								Creating Youtube videos on World Building, Geography, History,
								and More!
							</div>
							<div className="flex justify-center space-x-20 md:space-x-[200px]">
								<a
									target="_blank"
									rel="noreferrer"
									href="https://www.youtube.com/c/Stoneworks"
								>
									<Button
										title={"Youtube"}
										subtext={"youtube.com/c/Stoneworks"}
									/>
								</a>

								<a
									target="_blank"
									rel="noreferrer"
									href="https://www.patreon.com/stoneworks"
								>
									<Button title={"Patreon"} subtext={"Exclusive content"} />
								</a>
							</div>
						</div>

						<ReactPlayer
							url="https://www.youtube.com/watch?v=t-lpir7uP0A"
							height={420}
							width={720}
							style={{}}
							playing
						/>
					</div>
				</div>

				<section
					id="hero"
					className="p-6 flex flex-col justify-around items-center "
				>
					<Image src="/minecraft.png" width={400} height={300} />

					<div className="w-8/12 grid grid-cols-1 divide-y-2 divide-blue-300">
						{channelCategories.map((channel) => {
							return (
								<section
									key={`${channel.key}`}
									className="p-2 mb-4 flex flex-row items-center justify-between"
								>
									<div className="flex flex-col justify-between h-full py-5">
										<div className="pr-4 md:pr-20">
											<div
												style={{ fontFamily: "Roboto" }}
												className="text-2xl text-base-content font-bold mt-2"
											>
												{channel.key}
											</div>

											<div className="text-sm text-base-content text-opacity-80">
												{channel.desc}
											</div>
										</div>

										<Link href={`/videos/${channel.id}`} key={channel.id}>
											<div className="flex space-x-3 items-end text-orange-500 group">
												<div className="cursor-pointer text-orange-500 mt-1 font-medium md:group-hover:text-orange-400 md:ease-in md:transition md:duration-100">
													Videos Like This
												</div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													className="md:group-hover:text-white ease-in duration-300 w-5 h-5"
												>
													<path
														fillRule="evenodd"
														d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
														clipRule="evenodd"
													/>
												</svg>
											</div>
										</Link>
									</div>
									<ReactPlayer
										url={channel.url}
										height={220}
										style={{
											maxWidth: "318px",
										}}
									/>

									<section className="px-2"></section>
								</section>
							);
						})}
					</div>
				</section>

				<section
					id="minecraft"
					className="py-32 grid grid-cols-1 place-items-center"
				>
					<div className="grid grid-cols-1 place-items-center">
						<Image src="/minecraft.png" width={400} height={300} />
						<div className="text-center text-4xl font-semibold p-4">
							Join the Stoneworks Minecraft Server
						</div>
					</div>

					<div className="text-center text-2xl p-4">
						Towns, Nations, Culture, Religion, Wars, History. The time is now,
						your creation awaits.
					</div>
					<Link
						href="/minecraft"
						className="grid grid-cols-1 place-items-center pt-2 mb-32"
					>
						<a>
							<div className="text-orange-500 md:hover:text-orange-400 md:ease-in md:duration-200 md:transition hover:underline rounded-3xl px-2 py-1">
								Learn more
							</div>
						</a>
					</Link>
				</section>
			</main>
			<section id="footer">
				<Footer />
			</section>
		</html>
	);
}
