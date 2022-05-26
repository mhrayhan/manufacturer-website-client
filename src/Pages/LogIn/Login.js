import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login2.jpg'
import google from '../../assets/images/google.png'
import useToken from '../../hooks/useToken';

const Login = () => {

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user || gUser);


  let signinError;
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate])

  if (loading || gLoading) {
    return <button className="btn loading">loading</button>
  }
  if (error || gError) {
    signinError = <p className='text-red-500 text-sm'>{error?.message || gError?.message}</p>
  }
  const onSubmit = data => {

    signInWithEmailAndPassword(data.email, data.password)

  }

  return (
    <div className='flex w-[1200px] mx-auto'>
      <div>
        <img className='hidden lg:block' width={700} src={login} alt="" />
      </div>
      <div className=''>
        <div className='flex mt-12 justify-center items-center shadow-2xl'>
          <div className="card w-96 mx-auto bg-base-100 ">
            <div className="card-body">
              <h2 className="bg-pink-400 mb-8 text-white w-fit mx-auto py-[5px] px-8 rounded-full text-xl text-center font-semibold">Log In</h2>
              <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="Your Email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: 'Email is Required'
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'Provide a valid Email'
                      }
                    })} />

                  <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="Password"
                    className="input input-bordered w-full max-w-xs"
                    {...register("password", {
                      required: {
                        value: true,
                        message: 'Password is Required'
                      },
                      minLength: {
                        value: 6,
                        message: 'Must be 6 charecter or longer'
                      }
                    })} />

                  <label className="label">
                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                  </label>
                </div>


                {signinError}
                <input className='btn w-full max-w-xs my-4 btn-outline btn-primary' type="submit" value='Log In' />
              </form>
              <p><small>New to Tools-Cart? <Link className='text-secondary' to='/register'>Create New Account</Link></small></p>
              <div className="divider">OR</div>
              <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary"><img className='mr-8' src={google} width={25} alt="" /> Continue with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;