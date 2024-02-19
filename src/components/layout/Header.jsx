import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Moon from "@/assets/images/moon.svg";
import Sun from "@/assets/images/sun.svg";



const Header = () => {

	const [menuBtn, setMenuBtn] = useState(false);
	const menuHandler = () => {
		setMenuBtn(!menuBtn);
		const bodyElement = document.body;
		bodyElement.classList.toggle('open_nav');
	}

	const [onScroll, setScroll] = useState(false);
	useEffect(() => {
		const scrollHandler = () => {
			setScroll(window.scrollY > 1);
		}
		window.addEventListener('scroll', scrollHandler);
	}, []);

	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;
	const currentTheme = theme === 'system' ? systemTheme : theme;

	return (
		<>
			<header className={`header fixed left-0 top-0 z-10 w-full ${menuBtn ? 'slide' : ''} ${onScroll ? 'fixed_wrap' : ''}`}>
				<div className="navbar flex flex-row items-center flex-nowrap relative justify-between px-[104px] py-8 z-[12]">
					<div className="left-wrapper flex flex-row items-center flex-nowrap relative gap-x-[72px] justify-start">
						<Link className="logo block" href="/">
							<svg className="block h-[55px] relative w-[100px] transition-all duration-[0.4s] ease-in-out" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 422 272.94">
								<path className="cls-1" d="m206.63,140.62c-5.86-2.38-7.85,11.41-8.78,14.57-2.64,11.18-9.59,33.76-13.47,41.8-1.44,2.99-4.61,7.68-9.09,7.97-14.09.91-4.69-26.6-3.21-33.53,4.2-19.58,10.13-38.74,13.71-58.46,3.14-17.29,8.23-36.64,4.38-54.16-1.82-8.29-6.19-15.75-13.32-20.53-16.21-10.85-37.52,2.57-47.56,12.21-8.88,8.52-16.6,19.23-25.02,34.71-7.75,14.24-14.66,29.84-21.86,49.46,4.69-6.36,16.77-52.75,10.4-75.1-4.16-14.6-15.77-24.66-32.02-24.53-25.96.2-43.4,25.77-43.21,47.27.05,5.04,2.29,12.23,7.6,14.46,6.44,2.7,11.56-1.97,14.49-5.62,5.35-6.66,9.07-26.9,21.5-24.21,9.32,2.01,5.03,18.8,3.58,25.78-7.5,36.08-13.16,70.71-20.6,105.92-2.03,9.59-4.64,20.98.25,30.09,3.88,7.22,12.45,10.91,20.34,8.62,8.78-2.55,12.8-11.27,15.52-19.26,9.26-27.25,18.48-54.57,29.28-81.26,4.98-12.29,10.31-24.46,16.3-36.29,3.64-7.17,7.31-14.39,12.09-20.89,3.84-5.22,10.75-14.49,18.34-12.43,7.41,2.01,6.77,11.14,5.86,17.09-1.53,9.99-3.99,19.85-6.65,29.59-5.28,19.31-11.45,38.34-16.35,57.75-5.11,20.22-8.93,60.09,17.95,66.37,18.27,4.27,31.93-12.68,36.53-25.48,5.93-16.52,10.42-33.53,13.2-50.84.7-4.37,1.66-8.7,2.16-13.1.31-2.69.75-6.71-2.36-7.97Z"></path>
								<path className="cls-1" d="m207.3,132.32c5.86,2.38,7.85-11.41,8.78-14.57,2.64-11.18,9.59-33.76,13.47-41.8,1.44-2.99,4.61-7.68,9.09-7.97,14.09-.91,4.69,26.6,3.21,33.53-4.2,19.58-10.13,38.74-13.71,58.46-3.14,17.29-8.23,36.64-4.38,54.16,1.82,8.29,6.19,15.75,13.32,20.53,16.21,10.85,37.52-2.57,47.56-12.21,8.88-8.52,16.6-19.23,25.02-34.71,7.75-14.24,14.66-29.84,21.86-49.46-4.69,6.36-16.77,52.75-10.4,75.1,4.16,14.6,15.77,24.66,32.02,24.53,25.96-.2,43.4-25.77,43.21-47.27-.05-5.04-2.29-12.23-7.6-14.46-6.44-2.7-11.56,1.97-14.49,5.62-5.35,6.66-9.07,26.9-21.5,24.21-9.32-2.01-5.03-18.8-3.58-25.78,7.5-36.08,13.16-70.71,20.6-105.92,2.03-9.59,4.64-20.98-.25-30.09-3.88-7.22-12.45-10.91-20.34-8.62-8.78,2.55-12.8,11.27-15.52,19.26-9.26,27.25-18.48,54.57-29.28,81.26-4.98,12.29-10.31,24.46-16.3,36.29-3.64,7.17-7.31,14.39-12.09,20.89-3.84,5.22-10.75,14.49-18.34,12.43-7.41-2.01-6.77-11.14-5.86-17.09,1.53-9.99,3.99-19.85,6.65-29.59,5.28-19.31,11.45-38.34,16.35-57.75,5.11-20.22,8.93-60.09-17.95-66.37-18.27-4.27-31.93,12.68-36.53,25.48-5.93,16.52-10.42,33.53-13.2,50.84-.7,4.37-1.66,8.7-2.16,13.1-.31,2.69-.75,6.71,2.36,7.97Z"></path>
							</svg>
						</Link>
						<p className="text-p m-0 opacity-100 w-[100px] dark:text-white text-raven font-inter font-light">
							SHAPING TOMORROW'S BRANDS
						</p>
					</div>
					<div className="right-wrapper flex items-center flex-row flex-nowrap gap-x-8 justify-start relative">
						{currentTheme === 'dark' ? (
							<div className="light_theme" onClick={() => setTheme('light')}>
								<Image src={Moon} alt="moon" />
							</div>
						) : (
							<div className="dark_theme" onClick={() => setTheme('dark')}>
								<Image src={Sun} alt="sun" />
							</div>
						)}
						<div className="hamburger scale_demo flex items-center flex-col flex-nowrap gap-y-[14px] py-[10px] relative" onClick={menuHandler}>
							<div className="bar one border-2 border-solid dark:border-white border-raven rounded-[3px] block h-0 relative w-[38px] transition-all duration-[0.4s] ease-in-out"></div>
							<div className="bar two border-2 border-solid dark:border-white border-raven rounded-[3px] block h-0 relative w-[38px] transition-all duration-[0.4s] ease-in-out"></div>
						</div>
					</div>
				</div>
			</header>
		</>
	)	
}

export default Header;