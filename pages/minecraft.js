import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AnnouncementBar from "../components/Announcement";

export default function MinecraftPage() {
  return (
    <div>
      <header className="sticky top-0 z-50">
        <NavBar />
      </header>
      <main className="relative">
        <AnnouncementBar 
          visible={true}
        />
        <div className="grid grid-cols-1 place-items-center">
          <a className="flex mt-32 mb-12" href="https://discord.gg/stoneworks" target="_blank" rel="noreferrer">
            
              <div className="text-base-content text-3xl ">Minecraft Discord: </div>
            <div className="text-accent text-3xl ml-2 hover:underline">
              discord.gg/stoneworks
            </div>
          </a>

          <div className="text-base-content text-3xl  h-screen">
            Minecraft IP: Play.Stoneworks.GG
          </div>


        </div>

      </main>
      <footer className="bottom-0">
        <Footer />
      </footer>
    </div>
  );
}
