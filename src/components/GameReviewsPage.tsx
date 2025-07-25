import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const GameReviewsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Searching for:', searchTerm);
    };

    return (
<<<<<<< HEAD
        <div className="min-h-screen bg-amber-50 flex flex-col">
=======
        <div className="min-h-screen bg-amber-50">
>>>>>>> c48ca709e4d16c2a27da9d9642d76f74a2598f49
            {/* Header */}
            <Header />

            {/* Main Content */}
<<<<<<< HEAD
            <main className="py-12 flex-grow">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* White Box Container with Responsive Padding */}
                    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 text-center min-h-[400px] sm:min-h-[500px] flex flex-col justify-center">
                        {/* Page Title */}
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                            Game Reviews
                        </h1>

                        {/* Search Message */}
                        <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-10">
=======
            <main className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* White Box Container with Increased Height */}
                    <div className="bg-white rounded-xl shadow-lg p-10 text-center min-h-[500px] flex flex-col justify-center">
                        {/* Page Title */}
                        <h1 className="text-4xl font-bold text-gray-800 mb-6">Game Reviews</h1>

                        {/* Search Message */}
                        <p className="text-gray-600 text-lg mb-10">
>>>>>>> c48ca709e4d16c2a27da9d9642d76f74a2598f49
                            It seems we can't find what you're looking for. Perhaps searching can help.
                        </p>

                        {/* Search Form */}
<<<<<<< HEAD
                        <form
                            onSubmit={handleSearch}
                            className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-2 sm:gap-0 max-w-md mx-auto w-full"
                        >
=======
                        <form onSubmit={handleSearch} className="flex justify-center items-center gap-0 max-w-md mx-auto">
>>>>>>> c48ca709e4d16c2a27da9d9642d76f74a2598f49
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search..."
<<<<<<< HEAD
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-gray-700"
                            />
                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md sm:rounded-r-md sm:rounded-l-none font-medium transition-colors"
=======
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-gray-700"
                            />
                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-r-md font-medium transition-colors"
>>>>>>> c48ca709e4d16c2a27da9d9642d76f74a2598f49
                            >
                                SEARCH
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default GameReviewsPage;
