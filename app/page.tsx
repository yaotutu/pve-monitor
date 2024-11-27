"use client";

import { useEffect } from "react";
import { initScreenFit } from "./utils";

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
			{/* 外边距10px,内边距10px */}
			<div className="flex-1 bg-slate-300 h-full  p-[10px] ">
				<div className="w-full h-full border-2 border-solid border-black flex flex-col ">
					<div className="w-full flex-1">cpu: 80</div>
					<div className="w-full flex-1">网络: 80</div>
					<div className="w-full flex-1">磁盘: 80</div>
					<div className="w-full flex-1">内存: 80</div>
					<div className="w-full flex-1">系统信息: 80</div>
				</div>
			</div>
			<div className="flex-[2] bg-gray-400 h-full">app/lxc</div>
		</div>
	);
}
