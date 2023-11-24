import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Frame from 'public/images/frame-two.png';
import DashPlayer from '@/components/common/DashPlayer';
import VideoJS from '@/components/common/VideoPlayer';

const Tour = () => {
	const [state, setState] = useState({
		url: '',
	});
	const { url } = state;
	useEffect(() => {
		setState((prev) => ({
			...prev,
			url: 'https://media.axprod.net/TestVectors/v7-Clear/Manifest_1080p.mpd',
		}));
	}, []);
	return (
		<section className='section tour'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 col-xl-6'>
						<div
							className='section__header'
							data-aos='fade-up'
							data-aos-duration='600'>
							<h2 className='h'>
								Ultra Realistic Voice- The Vaane AI Engine to
								display real human voices emotion.
							</h2>
							<p className='max-5'>
								Experience Vaanee AI model that renders human
								intonation and inflections with unrivalled
								fidelity, adjusting the delivery based on
								context that makes you emotionally connect with
								your viewer.
							</p>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-12'>
						<div
							className='tour__content'
							data-aos='fade-up'
							data-aos-duration='600'>
							{/* <video muted loop autoPlay controls>
                <source src="/images/video/video.mp4" type="video/mp4" />
              </video> */}
							{/* {url ?<DashPlayer
								url={
									url
								}
							/>:<></>} */}
							<VideoJS
								onReady={() => {}}
								sources={[
									{
										src: 'https://storage.googleapis.com/shaka-demo-assets/angel-one-hls/hls.m3u8',
										type: 'application/x-mpegURL',
									},
								]}
								height={700}
								width={1050}
							/>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-12'>
						<div
							className='tour__content-cta'
							data-aos='fade-up'
							data-aos-duration='600'>
							<div className='trust'>
								<div className='review'>
									<i className='fa-solid fa-star'></i>
									<i className='fa-solid fa-star'></i>
									<i className='fa-solid fa-star'></i>
									<i className='fa-solid fa-star'></i>
									<i className='fa-solid fa-star'></i>
								</div>
								<p className='fw-7'>
									Rated Excellent on Trustpilot
								</p>
							</div>
							<div className='action'>
								<Link
									href='/register'
									className='btn btn--primary'>
									start free now
								</Link>
							</div>
							<Image
								src={Frame}
								alt='Image'
								priority
								className='frame'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Tour;
