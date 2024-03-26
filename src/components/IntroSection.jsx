import Link from "next/link";
import Image from "next/image";





const IntroSection = () => {

	return (
		<>
			<div className="intro block relative pt-[100px] pb-[200px]">
				<div className="container">
					<div className="intro_content flex justify-center flex-col items-center max-w-[65%] ml-auto mr-auto fadeInUp">
						<h3 className="mb-10 text-h3 font-oswald dark:text-white text-raven text-center">
							We’re a strategic branding agency for people trying to reach the (almost) impossible.
						</h3>
						<p className="max-w-[70%] text-center mt-0 mb-0 ml-auto mr-auto font-inter text-18 font-light">
							We curate the brand and strategy mix that makes change happen. We bring creativity, knowledge and momentum to your table, crafting stories that create powerful connections.
						</p>
						<p className="max-w-[70%] text-center mt-0 mb-0 ml-auto mr-auto font-inter text-18 font-light">
							Turning the impossible into the unstoppable.
						</p>
						<div className="button_wrap mt-6 flex justify-center">
							<Link href="#" className="primary_btn">
								About Us
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default IntroSection;