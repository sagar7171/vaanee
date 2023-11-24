import React from 'react';
import Link from 'next/link';
// import Google from 'public/images/google.png';
// import Facebook from 'public/images/facebook.png';
import { useForm } from 'react-hook-form';
import { RegisterSubmitForm } from '@/components/store/models/submit-Models';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerValidation } from '@/utils/validation';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import OtpModalCom from '@/components/modal/OtpModalCom';
import { useAppSelector, useAppDispatch } from '@/components/hooks/redux-hooks';
import { checkUserName, registerUser } from "../../store/actions/authActions"

const RegisterAccount = () => {
	const router = useRouter();
	const modal = useAppSelector((state) => state.modal);
	const dispatch = useAppDispatch();
	// const { otpModal } = modal;
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		setError,
		clearErrors,
		formState: { errors },
	} = useForm<RegisterSubmitForm>({
		resolver: yupResolver(registerValidation),
	});
	const onSubmit = (data: RegisterSubmitForm) => {
		dispatch(registerUser(data)).then((res) => {
			toast.success('Account created successfully.');
			router.push('/sign-in')
		}).catch((err) => { })
	};
	return (
		<section className='section authentication pb-0'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-12 col-lg-10 col-xl-6'>
						<div
							className='authentication__inner'
							data-aos='fade-up'
							data-aos-duration='600'>
							<div className='section__header text-start'>
								<h2 className='h3'>create account</h2>
							</div>
							<form
								className='form-block'
								onSubmit={handleSubmit(onSubmit)}
								autoComplete='off'
								autoCapitalize='off'>
								<div className='input-single'>
									<input
										type='text'
										id='authorregiName'
										autoComplete="new-password"
										placeholder='enter name'
										{...register('fullname')}
									/>
									{errors.fullname?.message && (
										<span style={{ color: 'red' }}>
											{errors.fullname?.message}
										</span>
									)}
								</div>
								<div className='input-single'>
									<input
										type='text'
										id='userName'
										autoComplete="new-password"
										placeholder='enter username'
										
										{...register('username', {
											onBlur: (e) => {
												e.target.value && dispatch(checkUserName(e.target.value)).then((res) => {
													const { msg } = res;
													if (msg === "username already exists") {
														setError('username', { type: 'custom', message: msg });
													}
												})
											},
										})}
										onFocus={(e)=>{
											if(errors.username?.message==="username already exists"){
												clearErrors('username');
											}
										}}
									/>
									{errors.username?.message && (
										<span style={{ color: 'red' }}>
											{errors.username?.message}
										</span>
									)}
								</div>
								<div className='input-single'>
									<input
										type='email'
										id='authorregiEmail'
										autoComplete="new-password"
										placeholder='email address'
										{...register('email')}
									/>
									{errors.email?.message && (
										<span style={{ color: 'red' }}>
											{errors.email?.message}
										</span>
									)}
								</div>
								<div className='input-single'>
									<input
										type='number'
										id='phone_number'
										autoComplete="new-password"
										placeholder='enter mobile number'
										{...register('phone_number')}
									/>
									{errors.phone_number?.message && (
										<span style={{ color: 'red' }}>
											{errors.phone_number?.message}
										</span>
									)}
								</div>
								<div className='input-single'>
									<input
										type='text'
										id='youtubeLink'
										autoComplete="new-password"
										placeholder='Enter youtube URL here...'
										{...register('youtube_url')}
									/>
									{errors.youtube_url?.message && (
										<span style={{ color: 'red' }}>
											{errors.youtube_url?.message}
										</span>
									)}
								</div>
								<div className='input-single'>
									<input
										type='number'
										id='followers'
										autoComplete="new-password"
										placeholder='Followers'
										{...register('followers')}
									/>
									{errors.followers?.message && (
										<span style={{ color: 'red' }}>
											{errors.followers?.message}
										</span>
									)}
								</div>

								<div className='input-single'>
									<input
										type='password'
										id='authorregiPass'
										autoComplete="new-password"
										placeholder='password'
										{...register('password')}
									/>
									{errors.password?.message && (
										<span style={{ color: 'red' }}>
											{errors.password?.message}
										</span>
									)}
								</div>
								<div className='input-single'>
									<input
										type='password'
										id='authorregiConfirmPass'
										autoComplete="new-password"
										placeholder='confirm password'
										{...register('confirmPassword')}
									/>
									{errors.confirmPassword?.message && (
										<span style={{ color: 'red' }}>
											{errors.confirmPassword?.message}
										</span>
									)}
								</div>
								<div className='input-single'>
									<select
										id='category'
										autoComplete="new-password"
										style={{
											width: '100%',
											border: '0rem',
											background: '#fff',
											outline: 'none',
										}}
										{...register('category')}>
										<option value=''>
											Select category
										</option>
										<option value='contentCreator'>
											Content Creator
										</option>
										<option value='news'>
											News Channel
										</option>
									</select>
									{errors.category?.message && (
										<span style={{ color: 'red' }}>
											{errors.category?.message}
										</span>
									)}
								</div>
								{/* <div className='divide'>
									<p>OR</p>
								</div>
								<div className='authentic'>
									<button
										type='submit'
										className='btn btn--nonary'>
										<Image
											src={Google}
											alt='Image'
										/>
										continue with google
									</button>
									<button
										type='submit'
										className='btn btn--nonary'>
										<Image
											src={Facebook}
											alt='Image'
										/>
										continue with facebook
									</button>
								</div> */}
								<div className='group-radio'>
									<input
										type='checkbox'
										id='createInCheck'
										autoComplete="new-password"
										{...register('tnc')}
									/>
									<label htmlFor='createInCheck'>
										i accept your terms & conditions
									</label>
								</div>
								{errors.tnc?.message && (
									<span style={{ color: 'red' }}>
										{errors.tnc?.message}
									</span>
								)}
								<div className='form-cta'>
									<button
										type='submit'
										aria-label='post comment'
										className='btn btn--ocotonary'>
										create account
									</button>
									<p>
										Have an account?{' '}
										<Link href='/sign-in'> Sign In</Link>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			{/* {otpModal && <OtpModalCom />} */}
		</section>
	);
};

export default RegisterAccount;
