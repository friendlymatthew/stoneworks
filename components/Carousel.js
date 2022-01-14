

export default function Carousel(props) {
    return (
        <div key={props.id} className="m-4 carousel-item">
        <a
          href={`https://www.youtube.com/watch?v=${props.resourceId.videoId}`}
          target="_blank"
          rel="noreferrer"
          className="group hover:bg-base-100 hover:border-primary border-2 border-base-200 p-2 transition duration-300 ease-in rounded-md"
        >
          <p>
            <img
              width={props.medium.width}
              height={props.medium.height}
              src={props.medium.url}
              alt=""
            />
          </p>
          <h3
            className="mt-2 px-2 text-base-content text-opacity-70 group-hover:text-opacity-100 font-semibold text-md transition duration-300 ease-in group-hover:scale-105"
            style={{ width: "300px" }}
          >
            {props.title}
          </h3>

          <h1></h1>
        </a>
      </div>
    )
}