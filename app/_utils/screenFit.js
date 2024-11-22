let currentScale = 1;
let resizeListener = null;

/**
 * 初始化 ScreenFit 功能
 * @param {Object} options - 配置参数
 * @param {number} [options.dw=1920] - 设计稿宽度
 * @param {number} [options.dh=1080] - 设计稿高度
 * @param {string} [options.el="body"] - 需要缩放的 DOM 元素选择器
 * @param {string} [options.cssMode="scale"] - 缩放模式，可选值："scale" 或 "zoom"
 * @param {number} [options.limit=0.1] - 缩放比例变化的最小阈值
 * @param {boolean} [options.allowScroll=false] - 是否允许页面滚动
 * @param {boolean} [options.once=false] - 是否只执行一次
 * @returns {Function} stopScreenFit - 停止 screenFit 的清理函数
 */
export function initScreenFit({
	dw = 1920,
	dh = 1080,
	el = "body",
	cssMode = "scale",
	limit = 0.1,
	allowScroll = false,
	once = false,
} = {}) {
	const dom = document.querySelector(el);
	if (!dom) {
		console.error(`ScreenFit: Element '${el}' not found.`);
		return () => {};
	}

	dom.style.transformOrigin = "0 0";
	if (!allowScroll) document.body.style.overflow = "hidden";

	function updateScale() {
		const clientWidth = document.documentElement.clientWidth;
		const clientHeight = document.documentElement.clientHeight;
		const scale = Math.min(clientWidth / dw, clientHeight / dh);

		currentScale = Math.abs(1 - scale) > limit ? scale : 1;

		if (cssMode === "zoom") {
			dom.style.zoom = currentScale;
		} else {
			dom.style.transform = `scale(${currentScale})`;
		}

		dom.style.width = `${dw}px`;
		dom.style.height = `${dh}px`;

		console.log(`ScreenFit: Current scale is ${currentScale}`);
	}

	updateScale();

	if (!once) {
		resizeListener = updateScale;
		window.addEventListener("resize", updateScale);
	}

	return function stopScreenFit() {
		if (!once) {
			window.removeEventListener("resize", resizeListener);
		}
		document.body.style.overflow = "";
		dom.style.transform = "";
		dom.style.zoom = "";
		dom.style.width = "";
		dom.style.height = "";
		console.log("ScreenFit: Scaling disabled.");
	};
}
