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
        <AnnouncementBar visible={true} />

        <div className="grid grid-cols-1 place-items-center">
          <div className="text-start text-md w-10/12">
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

          

          <div className="text-base-content text-3xl mt-24 mb-2">
            Minecraft IP: Play.Stoneworks.GG
          </div>

          <a
            className="flex"
            href="https://discord.gg/stoneworks"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-base-content text-3xl ">
              Minecraft Discord:{" "}
            </div>
            <div className="text-accent text-3xl ml-2 hover:underline">
              discord.gg/stoneworks
            </div>
          </a>

        </div>
      </main>
      <footer className="mt-64">
        <Footer />
      </footer>
    </div>
  );
}
