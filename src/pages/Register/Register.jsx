import React, { useContext } from 'react';
import Navbar from '../share/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    const { createUser, googleSignIn, githubSingIn, twitterSingIn  } = useContext(AuthContext)


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password)

        createUser(email, password)
        .then(result => {
            console.log(result.user)
 
        })
        .catch(error => console.error(error))

    }
    const handleGoogleSingIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.error(error))
    }
    const handleGithubSingIn = () => {
        githubSingIn()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => console.error(error))
    }
    const handleTwitterSingIn = () => {
        twitterSingIn()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar />
            <div>
                <h2 className="text-2xl my-3 text-center">Register your account</h2>

                <form onSubmit={handleRegister} className='md:w-3/4 lg:w-1/2 mx-auto'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className='text-center py-5'>Already have an account? <Link to='/login' className='text-blue-600 font-bold'>Login</Link></p>
            </div>
            <p className='flex justify-center items-center gap-6'>
                <button onClick={handleGoogleSingIn} className='btn btn-secondary'>Google</button>
                <button onClick={handleGithubSingIn} className='btn btn-primary'>Github</button>
                <button onClick={handleTwitterSingIn} className='btn btn-neutral'>Twitter</button>
            </p>
        </div>
    );
};

export default Register;