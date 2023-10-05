import React, { useContext } from 'react';
import Navbar from '../share/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { singIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)

        const email = form.get('email')
        const password = form.get('password')
       
        singIn(email, password)
        .then(result => {
            console.log(result.user)

            navigate(location?.state ? location.state : '/')
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar />
            <div>
                <h2 className="text-2xl my-3 text-center">Please Login</h2>

                <form onSubmit={handleLogin} className='md:w-3/4 lg:w-1/2 mx-auto'>
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className='text-center py-5'>Don't have an account <Link to='/register' className='text-blue-600 font-bold'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;