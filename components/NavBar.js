import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
	return (
		<span
			id="navbar"
			style={{ fontFamily: "Cabin" }}
			className="grid grid-cols-1 lg:grid-cols-2 my-auto items-center place-items-center h-32 lg:h-16 bg-gradient-to-r from-purple-600 to-indigo-500 hover:to-purple-600 hover:from-indigo-500 justify-around"
		>
			<Link href="/">
				<a>
					<div className="flex items-center w-auto group ml-0 lg:ml-48">
						<Image src="/StoneworksLogo.png" width={60} height={60} />
						<div
							style={{ fontFamily: "Roboto" }}
							className="ml-2 md:ml-4 text-lg italic lg:text-2xl  text-primary-content hover:text-opacity-80"
						>
							Stoneworks World Building
						</div>
					</div>
				</a>
			</Link>

			<div className="flex xl:w-9/12 space-x-1 lg:space-x-2 place-items-center">
				<Link href="/about" className="">
					<a>
						<div className="  py-1 px-2 text-primary-content font-bold hover:underline hover:text-opacity-80 text-sm lg:text-lg">
							About
						</div>
					</a>
				</Link>

				<Link href="/minecraft" className="">
					<a>
						<div className=" py-1 px-2 text-primary-content font-bold hover:underline hover:text-opacity-80 text-sm lg:text-lg">
							Minecraft
						</div>
					</a>
				</Link>
				<Link href="/contact" className="">
					<a>
						<div className="py-1 px-2 text-primary-content font-bold hover:underline hover:text-opacity-80 text-sm lg:text-lg">
							Contact
						</div>
					</a>
				</Link>
				<a
					href="https://Stoneworks-shop.Fourthwall.com"
					target="_blank"
					rel="noreferrer"
				>
					<div className="py-1 px-2 text-primary-content font-bold hover:underline hover:text-opacity-80 text-sm lg:text-lg">
						Merch
					</div>
				</a>
				<a
					href="https://www.patreon.com/stoneworks"
					target="_blank"
					rel="noreferrer"
					className="bg-orange-500 px-2 py-1 rounded-2xl group hover:bg-orange-400 md:transition md:ease-in md:duration-300"
				>
					<div className="text-white text-opacity-100 md:group-hover:text-gray-700 md:group-hover:text-opacity-80 hover:underline font-bold text-sm lg:text-lg md:transition md:ease-in md:duration-300">
						Patreon
					</div>
				</a>
			</div>
		</span>
	);
}
