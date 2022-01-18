export default function Carousel(props) {
  return (
    <div key={props.id} className="carousel-item">
      <a
        href={`https://www.youtube.com/watch?v=${props.resourceId.videoId}`}
        target="_blank"
        rel="noreferrer"
        className="group border-2 border-gray-600 transition ease-in duration-300 rounded-lg lg:hover:border-white "
      >
        <p>
          <img
            width={426}
            height={240}
            src={props.medium.url}
            alt=""
            style={{
              borderTopLeftRadius: "6px",
              borderTopRightRadius: "6px",
            }}
          />
        </p>
        <div
          className={`bg-gray-600 p-4 font-semibold text-md transition rounded-b-lg duration-300 ease-in `}
          style={{ width: "426px", height: "148px" }}
        >
          <div className=" text-base-content text-xl md:group-hover:text-white">
            {props.title}
          </div>
        </div>

        <h1></h1>
      </a>
    </div>
  );
}
