import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <span
      id="navbar"
      className="grid grid-cols-1 lg:grid-cols-2 my-auto items-center place-items-center inline-block h-32 lg:h-16 bg-gradient-to-r from-purple-600 to-indigo-500 hover:to-purple-600 hover:from-indigo-500 justify-around"
    >
      <a href="/" className="flex items-center w-auto group ml-0 lg:ml-48"  refs="noreferrer">
        <Image src="/StoneworksLogo.png" width={60} height={60} />
        <div className="ml-2 md:ml-4 text-sm  md:text-lg lg:text-3xl font-extrabold italic text-primary-content hover:text-opacity-80">
          Stoneworks World Building
        </div>
      </a>
     

      <div className="grid grid-cols-5 gap-1 w-10/12 lg:w-7/12  place-items-center">
        <a href="/about" className="py-1 px-2">
          <div className="text-primary-content font-medium hover:underline hover:text-opacity-80 text-md">
            About
          </div>
        </a>
        <a href="/videos" className="py-1 px-2">
          <div className="text-primary-content font-medium hover:underline hover:text-opacity-80 text-md">
            Videos
          </div>
        </a>
        <a href="/minecraft" className="py-1 px-2">
          <div className="text-primary-content font-medium hover:underline hover:text-opacity-80 text-md">
            Minecraft
          </div>
        </a>
        <a href="/contact" className="py-1 px-2">
          <div className="text-primary-content font-medium hover:underline hover:text-opacity-80 text-md">
            Contact
          </div>
        </a>
        <a href="https://www.patreon.com/stoneworks" target="_blank" refs="noreferrer" className="py-1 px-2 bg-white rounded-xl hover:bg-opacity-80">
          <div className="text-purple-600 font-medium text-md">
            Patreon
          </div>
        </a>
      </div>
    </span>
  );
}
