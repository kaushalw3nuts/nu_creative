import Image from "next/image";
import Link from "next/link";
import casestudieimg1 from "@/assets/images/case-studie-img1.webp";
import casestudieimg2 from "@/assets/images/case-studie-img2.webp";
import casestudieimg3 from "@/assets/images/case-studie-img3.webp";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const CaseStudieSection = () => {

	const swiperwrap = [
        {
			imgsrc: casestudieimg1,
			imgalt: 'caseimg1',
			casehead: 'TPI Interiors',
            text: 'Blending luxury and technology, to deliver a high-end experience for the ultra prime market.',
        },
        {
			imgsrc: casestudieimg2,
			imgalt: 'caseimg2',
			casehead: 'Selfhood',
			text: 'Carefully crafting a brand to capture the essence of inclusivity.',
        },
        {
			imgsrc: casestudieimg3,
			imgalt: 'caseimg3',
			casehead: 'Landmark Chambers',
            text: 'Creating a modern brand to showcase the experience and talent of this leading Chambers.',
        },
	]

	const swiperRef = useRef();
	const sliderSettings = {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 1,
		},
		992: {
			slidesPerView: 1,
		},
		1200: {
			slidesPerView: 1,
		},
	};

	return (

		<>
			<div className="case-studies block relative">
				<Swiper className="swiper_slider"
					loop={true}
					slidesPerView={1}
					spaceBetween={0}
					breakpoints={sliderSettings}
					// navigation={true}
					// modules={[Navigation]}
					onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
					}}
				>
					{
						swiperwrap.map((swiperwrapper, index) => {
							const {imgsrc, imgalt, casehead, text} = swiperwrapper
							return (
								<SwiperSlide key={index}>
									<Link href="#" className="box_slider block">
										<div className="image_box_slider w-full min-h-[800px]">
											<Image src={imgsrc} alt={imgalt} className="w-full h-auto"/>
										</div>
										<div className="container flex justify-between">
											<div className="image_slider_dtl">
												<h6 className="">{casehead}</h6>
												<p>{text}</p>
											</div>
											<div className="viewall_btn">
												View all work
												<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<line x1="1.46967" y1="14.9697" x2="15.6802" y2="0.759143" stroke="white" stroke-width="1.5"></line>
													<line x1="16.2109" y1="1.25" x2="2.78988" y2="1.25" stroke="white" stroke-width="1.5"></line>
													<line x1="15.4609" y1="13.9211" x2="15.4609" y2="0.50009" stroke="white" stroke-width="1.5"></line>
												</svg>
											</div>
										</div>
									</Link>
								</SwiperSlide>
							)
						})
					}
				</Swiper>
				<div className="switer_btn">
					<div className="container">
						<button onClick={() => swiperRef.current?.slidePrev()} className="group">
							<p>
								Previous project
							</p>
							<svg width="54" height="15" viewBox="0 0 54 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7 1L1 7.5L7 14" stroke="white"></path>
								<line x1="1" y1="7.5" x2="54" y2="7.50001" stroke="white"></line>
							</svg>
						</button>
						<button onClick={() => swiperRef.current?.slideNext()} className="group">
							<p>
								Next project 
							</p>
							<svg width="54" height="15" viewBox="0 0 54 15" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M47 14L53 7.5L47 1" stroke="white"></path>
								<line x1="53" y1="7.5" x2="-4.37114e-08" y2="7.5" stroke="white"></line>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default CaseStudieSection;