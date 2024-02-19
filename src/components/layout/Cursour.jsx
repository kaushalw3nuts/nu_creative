import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { useState, useEffect } from "react";




const Cursour = () => {

	const [dot, setDot] = useState({ x: 0, y: 0 });
	const [isOverScaleDemo, setIsOverScaleDemo] = useState(false);
	useEffect(() => {
		const positionHandler = (e) => {
			const scaleDemoElement = document.querySelector(".scale_demo");
			const logoElement = document.querySelector(".logo");
			const isOverScaleDemo = scaleDemoElement ? scaleDemoElement.contains(e.target) : false;
			const isOverLogo = logoElement ? logoElement.contains(e.target) : false;
		
			let scale = 1.5;
		
			if (isOverScaleDemo) {
				scale = 1.5;
			} else if (!isOverScaleDemo && !isOverLogo) {
				scale = 1; // Increase this value based on your preference
			}
		
			gsap.to(".dot_wrapper", {
				duration: 0.6,
				x: e.clientX,
				y: e.clientY,
				scale: scale,
				ease: "power2.out",
			});
		
			setDot({ x: e.clientX, y: e.clientY });
			setIsOverScaleDemo(isOverScaleDemo);
		};
	  
		window.addEventListener("pointermove", positionHandler);
		return () => {
		 	window.removeEventListener("pointermove", positionHandler);
		};
	}, []);

	return (
		<>
			<div className="dot_wrapper" style={{transform: `translate(${dot.x}px, ${dot.y}px)`}} />
		</>
	)
}

export default Cursour;