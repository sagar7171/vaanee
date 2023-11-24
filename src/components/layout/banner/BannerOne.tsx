import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Thumb from 'public/images/banner/banner-one-thumb.png';
import { useAppDispatch, useAppSelector } from '@/components/hooks/redux-hooks';
import { toggleUploadVideoModal } from '@/components/store/actions/modalActions';

const BannerOne = () => {
	const { auth } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();
	return (
		<section className='section banner-one bg-img'>
			<div className='container'>
				<div className='row items-gap align-items-center'>
					<div className='col-12 col-md-10 col-lg-6'>
						<div className='banner-one__content'>
							<p className='h6'>
								<span>AI Voice</span>
								Generator and Text to Speech
							</p>
							<h1 className='h1'>
								Your Complete Generative Voice AI Toolkit
							</h1>
							<div className='section__content-cta'>
								<Link
									href={
										auth
											? window.location.pathname
											: '/register'
									}
									className='btn btn--primary'
									onClick={() =>
										auth &&
										dispatch(toggleUploadVideoModal())
									}>
									{auth
										? 'create a project'
										: 'start free now'}
								</Link>
								<Link
									href='/contact-us'
									className='btn btn--secondary'>
									request A Demo
								</Link>
							</div>
						</div>
					</div>
					<div className='col-12 col-lg-6'>
						<div className='banner-one__thumb text-start text-lg-end'>
							<Image
								src={Thumb}
								priority
								alt='Image'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BannerOne;
