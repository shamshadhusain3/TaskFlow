import React from 'react';

const Form = ({ title, isLogin, onBack }) => {
    return (
        <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <button onClick={onBack} className="mb-4 text-gray-500">
                ← Back
            </button>
            <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
            <form>
                {!isLogin && (
                    <>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Company</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Enter company name"
                            />
                        </div>
                    </>
                )}
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        placeholder="name@company.com"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        placeholder="••••••••"
                    />
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    {isLogin ? 'Login' : 'Register'}
                </button>
            </form>
            {isLogin && (
                <p className="text-center text-gray-500 mt-4">
                    Don't have an account yet? <span className="text-blue-500 cursor-pointer">Sign Up</span>
                </p>
            )}
        </div>
    );
};

export default Form;
