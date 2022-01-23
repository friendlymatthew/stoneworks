import Link from "next/link";

export default function FooterSection() {
  return (
    <div>
      <footer className="p-10 footer bg-base-200 text-base-content footer-center">
        <div className="grid grid-flow-col gap-4">
          <Link href="/about">
            <div className="link link-hover text-lg hover:scale-105 transition duration-300 ease-in">
              About
            </div>
          </Link>
          <Link href="/contact">
            <div className="link link-hover text-lg hover:scale-105 transition duration-300 ease-in">
              Contact
            </div>
          </Link>
          <a
            href="https://www.patreon.com/stoneworks"
            target="_blank"
            rel="noreferrer"
            className="link link-hover text-lg hover:scale-105 transition duration-300 ease-in text-orange-500 md:ease-in md:duration-200 md:transition md:hover:text-orange-400"
          >
            Patreon
          </a>
        </div>
        <div>
          <a
            href="https://youtube.com/stoneworks"
            target="_blank"
            rel="noreferrer"
            className="flex group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="fill-current group-hover:scale-125 group-hover:mr-2 transition ease-in duration-300"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
            <div className="font-semibold text-2xl group-hover:scale-125 transition ease-in duration-300 text-base-content ml-6">
              /stoneworks
            </div>
          </a>
        </div>
        <div className="flex">
          <p>Copyright © 2021</p>
        </div>
      </footer>
      <a href="https://github.com/matthewkim0/stoneworks" target="_blank" rel="noreferrer">
      <span className="group bg-gradient-to-r to-orange-400 from-rose-400 w-screen h-12 border-b-xl flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-neutral my-auto ml-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"

        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132   A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
          />
        </svg>
      </span>
      </a>
    </div>
  );
}
