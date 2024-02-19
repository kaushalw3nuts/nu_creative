import Link from "next/link";
import Image from "next/image";





const Homebanner = () => {

	return (
		<>
			<div className="banner">
				<div className="container">
					<div className="banner_content flex flex-col justify-end flex-nowrap min-h-screen pb-[100px]">
						<p className="flex flex-row flex-wrap items-center justify-start gap-3 mb-6 text-18 font-inter font-light dark:text-white text-raven">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="12" cy="12" r="12" fill="#A9F0D1"></circle>
								<path d="M9 6.80385L18 12L9 17.1962L9 6.80385Z" stroke="white"></path>
							</svg>
							PLAY OUR SHOWREEL
						</p>
						<h1 className="m-0 font-medium font-oswald text-h1 uppercase dark:text-white text-raven transition-all duration-[0.4s] ease-in-out">
							Out with the old.<br />In with the bold.
						</h1>
					</div>
				</div>
			</div>
		</>
	)
}

export default Homebanner;