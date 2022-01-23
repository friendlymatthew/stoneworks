import NavBar from "../components/NavBar";
import AnnouncementBar from "../components/Announcement";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="grid grid-cols-1" style={{ fontFamily: "cabin" }}>
      <header>
        <NavBar />
        <AnnouncementBar visible={true} />
      </header>

      <main className="grid grid-cols-1 place-items-center gap-6">
        <div className="text-center text-3xl font-semibold mt-12">Contact</div>

        <section>
          <a
            href="mailto:Jpschnitzengruber@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-center text-3xl text-blue-600 md:hover:underline md:hover:text-blue-400 md:ease-in md:duration-100 md:transition">
              Jpschnitzengruber@gmail.com
            </div>
          </a>
        </section>

        <section className="mt-4 h-72">
          <div className="flex text-3xl space-x-2">
            <div className="">discord:</div>
            <div className="">
              StoneyStoner#3409
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
