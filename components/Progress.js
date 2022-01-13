import { Grid } from "@material-ui/core";
import Link from "next/link"
import React, { useEffect, useState } from "react";
export default function ProgressView(props) {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");

  useEffect(() => {
    if (props.one) {
      setOne(`step ${props.theme} font-bold hover:font-semibold text-lg`);
    } else {
      setOne("step text-lg text-opacity-80");
    }

    if (props.two) {
      setTwo(`step ${props.theme} font-bold hover:font-semibold text-lg`);
    } else {
      setTwo("step text-lg text-opacity-80");
    }

    if (props.three) {
      setThree(`step ${props.theme} font-bold hover:font-semibold text-lg`);
    } else {
      setThree("step text-lg text-opacity-80");
    }

    if (props.four) {
      setFour(`step ${props.theme} font-bold hover:font-semibold text-lg`);
    } else {
      setFour("step text-lg text-opacity-80");
    }

    if (props.five) {
      setFive(`step ${props.theme} font-bold hover:font-semibold text-lg`);
    } else {
      setFive("step text-lg text-opacity-80");
    }
  });

  return (
    <div className="p-3 mb-12 bg-base-200 hover:bg-base-100 rounded-lg transition ease-in duration-300">
      <div className="flex">
        <div className="my-auto text-xl text-base-content font-semibold">
          {props.title}
        </div>

        {props.visible ? (
          <Link href={`/videos#${props.tag}`}>
          <button className=" ml-4 my-auto text-md badge badge-secondary text-base-content">
            {props.tag}
          </button>
          </Link>
        ) : null}
      </div>

      <div className="card-body">
        <ul className="top-12 w-full steps ">
          <button className={`${one}`}>Research</button>
          <button className={`${two}`}>Writing</button>
          <button className={`${three}`}>Audio</button>
          <button className={`${four}`}>Animation</button>
          <button className={`${five}`}>Patreon</button>
        </ul>
      </div>
    </div>
  );
}
