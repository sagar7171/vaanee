import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Google from 'public/images/google.png';
import Facebook from 'public/images/facebook.png';
import {
	RegisterSubmitForm,
	SignInSubmitForm,
} from '@/components/store/models/submit-Models';
import { signInValidation } from '@/utils/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { EMAIL, PASSWORD } from '@/utils/helper';
import { useAppDispatch } from '@/components/hooks/redux-hooks';
// import { handleAuth } from '@/components/store/actions/authActions';
import withRedux from '@/components/hoc/withRedux';
import { handleUserToken, login } from '../../store/actions/authActions';

const SignInAccount = () => {
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		formState: { errors },
	} = useForm<SignInSubmitForm>({
		resolver: yupResolver(signInValidation),
	});
	const router = useRouter();
	const dispatch = useAppDispatch();

	const onSubmit = (data: SignInSubmitForm) => {
		dispatch(login(data))
			.then((res) => {
				const { access_token, refresh_token } = res;
				localStorage.setItem('access_token', access_token);
				localStorage.setItem('refresh_token', refresh_token);
				dispatch(
					handleUserToken({
						auth: true,
						access_token,
						refresh_token,
						userLoading: false,
					}),
				);
				toast.success('Login successfully.');
				router.push('/');
			})
			.catch((err) => {
			});
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
								<h2 className='h3'>Welcome Back</h2>
							</div>
							<form
								className='form-block'
								onSubmit={handleSubmit(onSubmit)}
								autoComplete='off'
								autoCapitalize='off'>
								<div className='input-single'>
									<input
										type='text'
										id='authorEmail'
										autoComplete='new-password'
										placeholder='Email/Username address'
										{...register('username')}
									/>
									{errors.username?.message && (
										<span style={{ color: 'red' }}>
											{errors.username?.message}
										</span>
									)}
								</div>
								<div className='input-single'>
									<input
										type='password'
										id='authorPassword'
										autoComplete='new-password'
										placeholder='enter password'
										{...register('password')}
									/>
									{errors.password?.message && (
										<span style={{ color: 'red' }}>
											{errors.password?.message}
										</span>
									)}
								</div>
								{/* <div className="divide">
                  					<p>OR</p>
                				</div>
                				<div className="authentic">
                				  <button type="submit" className="btn btn--nonary">
                				    <Image src={Google} alt="Image" />
                				    continue with google
                				  </button>
                				  <button type="submit" className="btn btn--nonary">
                				    <Image src={Facebook} alt="Image" />
                				    continue with facebook
                				  </button>
                				</div>
								<div className="group-radio">
                					<input
                					  type="checkbox"
                					  name="create-in-check"
                					  id="createInCheck"
                					/>
                					<label htmlFor="createInCheck">
                					  i accept your terms & conditions
                					</label>
                				</div> */}
								<div className='form-cta'>
									<button
										type='submit'
										aria-label='post comment'
										className='btn btn--ocotonary'>
										sign in
									</button>
									<p>
										Don&apos;t Have an account?{' '}
										<Link href='/register'>
											{' '}
											Register Now
										</Link>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default withRedux(SignInAccount);
