import NavBar from "../components/NavBar";
import AnnouncementBar from "../components/Announcement";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="grid grid-cols-1">
      <NavBar />
      <AnnouncementBar visible={true} />

      <div className="text-center text-3xl font-semibold mt-12">Contact</div>

      <div className="grid grid-cols-1 place-items-center mb-32 mt-8">
        <div className="bg-base-200 grid grid-cols-2 place-items-center">
          <a href="mailto:Jpschnitzengruber@gmail.com" target="_blank" rel="noreferrer">
            <button
              className="hover:bg-base-300 border-b-2 border-base-200 hover:border-accent "
              style={{ width: "360px", height: "420px" }}
            >
              <div className="flex justify-center text-lg">
                <div>email: </div>
                <a href="mailto:Jpschnitzengruber@gmail.com" target="_blank" rel="noreferrer" className="hover:underline text-primary ml-2">
                  Jpschnitzengruber@gmail.com
                </a>
              </div>
            </button>
          </a>

          <a href="" target="_blank" rel="noreferrer">
            <button
              className="hover:bg-base-300 border-b-2 border-base-200 hover:border-accent"
              style={{ width: "360px", height: "420px" }}
            >
              <div className="flex justify-center text-lg">
                <div>discord: </div>
                <a href="" target="_blank" rel="noreferrer" className="hover:underline text-primary ml-2">
                  StoneyStoner#3409
                </a>
              </div>
            </button>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
