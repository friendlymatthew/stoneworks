import { Grid } from "@material-ui/core";

export default function ProgressView(props) {
  return (
      <div className=" max-w-3xl">
          <div className="text-white text-3xl font-semibold p-4">
            {props.title}
          </div>
          <div className="card-body">
            <ul className="top-12 w-full steps ">
              <li className="step step-accent font-bold hover:font-semibold text-lg">
                Research
              </li>
              <li className="step step-accent font-bold hover:font-semibold text-lg">
                Writing
              </li>
              <li className="step text-lg text-opacity-80">Audio</li>
              <li className="step text-lg text-opacity-80">Animation</li>
              <li className="step text-lg text-opacity-80">Patreon</li>
            </ul>
          </div>
      </div>
  );
}
