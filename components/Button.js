import React, { useState, useEffect } from "react";

export default function Button({ title, subtext }) {
	return (
		<div className="group bg-black px-4 md:text-2xl text-lg py-2 text-[#f8f8da]">
			<div className="text-center">{title}</div>
			<div className="invisible group-hover:visible">{subtext}</div>
		</div>
	);
}
