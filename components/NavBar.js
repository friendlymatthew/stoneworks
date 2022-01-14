import Link from "next/link";

export default function NavBar() {
  return (
    <span id="navbar" className="flex my-auto inline-block h-16 bg-primary justify-around">
      <Link href="/">
        <button className="text-primary-content font-semibold text-lg">
          Stoneworks Logo
        </button>
      </Link>

      <div className="flex my-auto justify-between space-x-9">
        <Link href="/about">
          <button className="font-semibold text-primary-content text-md hover:text-opacity-60 hover:scale-125 transition duration-300 ease-in">
            About
          </button>
        </Link>

        <Link href="/videos">
          <button className="font-semibold text-primary-content text-md hover:text-opacity-60 hover:scale-125 transition duration-300 ease-in">
            Videos
          </button>
        </Link>

        <Link href="/minecraft">
          <button className="font-semibold text-primary-content text-md hover:text-opacity-60 hover:scale-125 transition duration-300 ease-in">
            Minecraft
          </button>
        </Link>

        <Link href="/contact">
        <button className="font-semibold text-primary-content text-md hover:text-opacity-60 hover:scale-125 transition duration-300 ease-in">
          Contact
        </button>
        </Link>

        <a href="https://www.patreon.com/stoneworks" target="_blank" rel="noreferrer">
        <button className="font-semibold shadow-inner-xl bg-white rounded-3xl px-3 py-2 text-primary hover:text-primary-focus text-md hover:bg-opacity-80  transition duration-300 ease-in">
          Patreon
        </button>
        </a>
      </div>
    </span>
  );
}
