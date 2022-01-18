import { Grid } from "@material-ui/core";
import Link from "next/link"
import React, { useEffect, useState } from "react";
export default function ProgressView(props) {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [oneSymbol, setOneSymbol] = useState("");
  const [twoSymbol, setTwoSymbol] = useState("");
  const [threeSymbol, setThreeSymbol] = useState("");
  const [fourSymbol, setFourSymbol] = useState("");
  const [fiveSymbol, setFiveSymbol] = useState("");

  useEffect(() => {
    if (props.one) {
      setOne(`step ${props.theme} text-sm md:text-md text-opacity-50`);
      setOneSymbol("✓")
    } else {
      setOne("step text-sm text-opacity-80");
    }

    if (props.two) {
      setTwo(`step ${props.theme} text-sm md:text-md text-opacity-50`);
      setTwoSymbol("✓")
    } else {
      setTwo("step text-sm text-opacity-80");
    }

    if (props.three) {
      setThree(`step ${props.theme} text-sm md:text-md text-opacity-50`);
      setThreeSymbol("✓")
    } else {
      setThree("step text-sm text-opacity-80");
    }

    if (props.four) {
      setFour(`step ${props.theme} text-sm md:text-md text-opacity-50`);
      setFourSymbol("✓")
    } else {
      setFour("step text-sm text-opacity-80");
    }

    if (props.five) {
      setFive(`step ${props.theme} text-sm md:text-md text-opacity-50`);
      setFiveSymbol("✓")
    } else {
      setFive("step text-sm text-opacity-80");
    }
  });

  return (
    <div className="p-3 mb-12 hover:bg-base-200 bg-base-100 rounded-lg transition ease-in duration-300">
      <div className="flex">
        <div className="my-auto text-xl text-base-content font-semibold">
          {props.title}
        </div>

        {props.visible ? (
          <Link href={`/videos#${props.tag}`}>
          <button className=" ml-4 my-auto text-sm bg-indigo-400 px-2 py-1 rounded-3xl text-base-content md:hover:text-black md:transition md:ease-in md:duration-300">
            {props.tag}
          </button>
          </Link>
        ) : null}
      </div>

      <div className="card-body">
        <ul className="top-12 w-full steps ">
          <button data-content={`${oneSymbol}`} className={`${one}`}>Research</button>
          <button data-content={`${twoSymbol}`} className={`${two}`}>Writing</button>
          <button data-content={`${threeSymbol}`} className={`${three}`}>Audio</button>
          <button data-content={`${fourSymbol}`} className={`${four}`}>Animation</button>
          <button data-content={`${fiveSymbol}`} className={`${five}`}>Patreon</button>
        </ul>
      </div>
    </div>
  );
}
