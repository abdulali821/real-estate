import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center h-screen">
      <div className="flex items-center justify-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Real Estate
          </h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Log in</h2>
          <p className="text-base text-gray-500 mb-4">
            Manage your Real Estate with our Real Estate Centre
          </p>

          <form className="mb-4">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700"
                placeholder="EMAIL"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700"
                placeholder="PASSWORD"
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="remember-me"
                className="w-4 h-4 accent-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              />
              <label htmlFor="remember-me" className="ml-2 text-gray-700">
                Remember me
              </label>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-700 focus:outline-none">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
