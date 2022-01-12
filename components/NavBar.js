import Link from "next/link";

export default function NavBar() {
  return (
    <span className="flex my-auto inline-block h-16 bg-primary justify-around">
      <Link href="/">
        <button className="my-auto text-primary-content font-semibold text-lg">
          Stoneworks Logo
        </button>
      </Link>

      <div className="flex my-auto justify-between space-x-7">
        <Link href="/about">
          <button className="font-semibold text-primary-content text-lg hover:text-opacity-60 transition duration-300 ease-in">
            About
          </button>
        </Link>

        <Link href="/videos">
          <button className="font-semibold text-primary-content text-lg hover:text-opacity-60 transition duration-300 ease-in">
            Videos
          </button>
        </Link>

        <Link href="/minecraft">
          <button className="font-semibold text-primary-content text-lg hover:text-opacity-60 transition duration-300 ease-in">
            Minecraft
          </button>
        </Link>

        <Link href="/contact">
        <button className="font-semibold text-primary-content text-lg hover:text-opacity-60 transition duration-300 ease-in">
          Contact
        </button>
        </Link>

        <a href="https://www.patreon.com/stoneworks" target="_blank">
        <button className="font-semibold bg-accent rounded-3xl px-3 py-2 text-primary-content text-lg hover:bg-accent-focus hover:text-opacity-60 transition duration-300 ease-in">
          Patreon
        </button>
        </a>
      </div>
    </span>
  );
}
