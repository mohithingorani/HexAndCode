"use client"
import React, { useState } from 'react';
import { Cards } from '../components/Cards';

export default function Dashboard() {
  const [query, setQuery] = useState('');

  const handleSearch = (e:any) => {
    e.preventDefault();
    // Implement your search functionality here
    console.log('Searching for:', query);
  };

return (
    <div className="w-full">
        <nav className="w-full  shadow">
            <div className="w-full flex justify-center items-center py-3 gap-2">
                <form
                    onSubmit={handleSearch}
                    className="flex p-2 w-full max-w-5xl border border-black rounded-md"
                >
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-grow px-3 py-1.5 border-0 focus:outline-none focus:ring-0 focus:ring-blue-500 rounded-md"
                        placeholder="What do you want to learn?"
                        aria-label="Search"
                    />
                    <button
                        type="submit"
                        className="px-4 py-1.5 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-0 focus:ring-blue-500"
                    >
                        Search
                    </button>
                </form>
                <div className='bg-blue-700 text-white px-3 py-1.5 rounded-full'>
                    M
                </div>
                
            </div>
        </nav>
        <div className='bg-[#F4EDDF]'>
            <Cards/>
        </div>
    </div>
);
}
