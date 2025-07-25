import React from 'react';
import { useNavigate } from 'react-router-dom';

const PopularCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: "Game Guides",
<<<<<<< HEAD
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRnhPitCAzkhfGxqJWocgBm5-WduWtQ8fOUWZmNIoxXF4lKXwOp", // New relevant image
=======
      image: "https://bartarinb.com/wp-content/uploads/2025/07/56566.webp",
>>>>>>> c48ca709e4d16c2a27da9d9642d76f74a2598f49
      path: "/game-guides"
    },
    {
      id: 2,
      title: "Game Reviews",
<<<<<<< HEAD
      image: "https://cdn.thedailymash.co.uk/wp-content/uploads/20190809100812/cards.jpg", // New relevant image
=======
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSqsv0lBwZ-HYpTzSYzVxKamAgF8bZBKu2vNOdDYEl99sG0cd9I",
>>>>>>> c48ca709e4d16c2a27da9d9642d76f74a2598f49
      path: "/GameReviewpage"
    },
    {
      id: 3,
      title: "Tips & Tricks",
<<<<<<< HEAD
      image: "https://i.ytimg.com/vi/SGgFQLpmANc/mqdefault.jpg", // New relevant image
=======
      image: "https://i.pinimg.com/736x/f7/ee/3d/f7ee3dfc72fc9cf611124194bb40888c.jpg",
>>>>>>> c48ca709e4d16c2a27da9d9642d76f74a2598f49
      path: "/tippage"
    },
    {
      id: 4,
      title: "Trending Games",
<<<<<<< HEAD
      image: "https://img.freepik.com/premium-photo/3d-illustration-with-dynamic-casino-game-background-craps-roulette-poker-cards_972667-7899.jpg", // New relevant image
=======
      image: "https://img.freepik.com/premium-photo/online-casino-casino-online-poker-poker-dice-chips-tokens-roulette-online-gambling-azart-games_980736-2106.jpg?w=360",
>>>>>>> c48ca709e4d16c2a27da9d9642d76f74a2598f49
      path: "/trending-games"
    }
  ];

  return (
<<<<<<< HEAD
    <div className="mb-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-12">
        Popular Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {categories.map(category => (
          <div
            key={category.id}
            className="relative rounded-2xl overflow-hidden group cursor-pointer transform transition-all hover:scale-105 shadow-lg"
            onClick={() => navigate(category.path)}
          >
            <div className="w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-square">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <div className="p-4 sm:p-6">
                <h3 className="text-white font-bold text-xl sm:text-2xl">
                  {category.title}
                </h3>
=======
    <div className="mb-16">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Popular Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map(category => (
          <div
            key={category.id}
            className="relative rounded-2xl overflow-hidden group cursor-pointer transform transition-all hover:scale-105 shadow-xl h-[22rem]"
            onClick={() => navigate(category.path)}
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <div className="p-6">
                <h3 className="text-white font-bold text-2xl">{category.title}</h3>
>>>>>>> c48ca709e4d16c2a27da9d9642d76f74a2598f49
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
<<<<<<< HEAD
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-colors"
          onClick={() => navigate(0)}
=======
          className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-colors"
          onClick={() => navigate('/all-categories')}
>>>>>>> c48ca709e4d16c2a27da9d9642d76f74a2598f49
        >
          Explore Them All
        </button>
      </div>
    </div>
  );
};

export default PopularCategories;
