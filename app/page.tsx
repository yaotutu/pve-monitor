"use client";

import { useEffect } from "react";
import { initScreenFit } from "./_utils";

export default function Home() {
	useEffect(() => {
		initScreenFit({
			dw: 667,
			dh: 375,
			el: "#app",
			cssMode: "zoom",
			once: true,
		});
	}, []);
	return (
		<div className="flex bg-red-200 w-[667px] h-[375px]" id="app">
			<div className="flex-1 bg-slate-300 h-full">宿主机</div>
			<div className="flex-[2] bg-gray-400 h-full">app/lxc</div>
		</div>
	);
}
