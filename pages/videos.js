import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import AnnouncementBar from "../components/Announcement";
import FooterSection from "../components/Footer";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?maxResults=50&playlistId=PLqX8ZW5R4MwCrHbuxXyZKy1sftOtQjaA8&key=${process.env.YOUTUBE_API_KEY}&part=snippet`
  );

  const resTwo = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?maxResults=50&playlistId=PLqX8ZW5R4MwASInSxDDvvf68LHlONn1YK&key=${process.env.YOUTUBE_API_KEY}&part=snippet`
  );

  const resThree = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?maxResults=50&playlistId=PLqX8ZW5R4MwAFqNYPUYsc0bC79oYMQ6NR&key=${process.env.YOUTUBE_API_KEY}&part=snippet`
  );

  const data = await res.json();
  const dataTwo = await resTwo.json();
  const dataThree = await resThree.json();

  return {
    props: {
      data,
      dataTwo,
      dataThree,
    },
  };
}

export default function Home({ data, dataTwo, dataThree }) {
  return (
    <div>
      <NavBar />
      <div className="sticky top-0 z-10">
        <AnnouncementBar visible={true} />
      </div>

      <main className="py-2 relative" style={{ fontFamily: "Cabin"}}>
        <div className="grid grid-cols-1 place-items-center my-12">
          <section className="flex flex-wrap text-md md:text-xl font-medium md:font-semibold py-2 text-white justify-around space-x-3 bg-primary rounded-xl w-11/12">
            <a href="#minecraft">Minecraft</a>
            <a href="#worldbuilding">World Building</a>
            <a href="#education">Education</a>
          </section>
        </div>

        <section
          id="minecraft"
          className=" border-b-2 border-gray-400 bg-base-100 md:hover:bg-gray-600 pt-8 md:transition md:ease-in md:duration-300 pb-8"
        >
          <div className="pl-8 text-3xl text-white font-extrabold mb-2">
            Minecraft
          </div>

          <div className="pl-8 space-x-4 carousel carousel-center">
            {data.items.map(({ id, snippet = {} }) => {
              const { title, thumbnails = {}, resourceId = {} } = snippet;
              const { medium } = thumbnails;
              return (
                <Carousel
                  id={id}
                  key={id}
                  resourceId={resourceId}
                  medium={medium}
                  title={title}
                />
              );
            })}
          </div>
        </section>
        <section
          id="worldbuilding"
          className="border-b-2 border-gray-400 bg-base-100 md:hover:bg-gray-600 pt-8 md:transition md:ease-in md:duration-300 pb-8"
        >
          
          <div className="pl-8 text-3xl text-white font-extrabold mb-2">
            World Building
          </div>

          <div className="pl-8 space-x-4 carousel carousel-center">
            {dataTwo.items.map(({ id, snippet = {} }) => {
              const { title, thumbnails = {}, resourceId = {} } = snippet;
              const { medium } = thumbnails;
              return (
                <Carousel
                  id={id}
                  key={id}
                  resourceId={resourceId}
                  medium={medium}
                  title={title}
                />
              );
            })}
          </div>
        </section>

        <section id="education" className="border-b-2 border-gray-400 bg-base-100 md:hover:bg-gray-600 pt-8 md:transition md:ease-in md:duration-300 pb-8">
          <div className="pl-8 text-3xl text-white font-extrabold mb-2">
            Education
          </div>

          <div className="pl-8 space-x-4 carousel carousel-center">
            {dataThree.items.map(({ id, snippet = {} }) => {
              const { title, thumbnails = {}, resourceId = {} } = snippet;
              const { medium } = thumbnails;
              return (
                <Carousel
                  id={id}
                  key={id}
                  resourceId={resourceId}
                  medium={medium}
                  title={title}
                />
              );
            })}
          </div>
        </section>
      </main>
      <footer>
        <FooterSection />
      </footer>
    </div>
  );
}
