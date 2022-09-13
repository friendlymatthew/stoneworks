import React, { useState, useEffect } from "react";

export default function Button({ title, subtext }) {
	return (
		<div className=" text-[#f8f8da] text-start py-12 px-12 hover:text-transparent  bg-clip-text hover:bg-gradient-to-r from-purple-600 to-indigo-500 hover:to-purple-600 hover:from-indigo-500 group flex flex-col space-y-8">
			<div
				className={`text-xl md:text-[60px] transition ease-in duration-75  italic cursor-pointer`}
			>
				{title}
			</div>
			<div className="text-end mt-30 invisible group-hover:visible text-white">
				{subtext}
			</div>
		</div>
	);
}
