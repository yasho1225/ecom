import React, { useState } from "react";
import { FaHeart, FaUser, FaShoppingCart, FaHome, FaPen, FaGift, FaBox, FaChurch, FaClipboard, FaUndoAlt, FaFire } from "react-icons/fa";

export default function Shop4Home() {
  const [favorites, setFavorites] = useState([]);
  const [showFavoritesDropdown, setShowFavoritesDropdown] = useState(false);
  return (
    <div className="bg-[#f8fafc] text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-500 text-white px-2 py-1 rounded font-bold">S4H</div>
          <div>
            <h1 className="text-lg font-semibold">Shop 4 Home</h1>
            <p className="text-xs">Your Home, Our Priority</p>
          </div>
        </div>
        <input
          type="text"
          placeholder="Search for products..."
          className="border border-gray-300 rounded-md px-3 py-1 w-1/3"
        />
        <div className="flex items-center gap-4">
          <div className="relative">
            <FaHeart onClick={() => setShowFavoritesDropdown(!showFavoritesDropdown)} className="cursor-pointer" />
            {showFavoritesDropdown && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md border border-gray-200 z-50 p-4">
                <h3 className="font-bold mb-2">Favorited Items</h3>
                {favorites.length > 0 ? (
                  <ul className="text-sm space-y-4">
                    {favorites.map((item, index) => (
                      <li key={index} className="flex gap-3 items-center border-b pb-2">
                        <div className="bg-gray-200 w-12 h-12 rounded"></div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold">Product #{item}</p>
                          <p className="text-xs text-blue-600 font-medium">₹999</p>
                        </div>
                        <button
                          className="text-red-500 text-xs hover:underline"
                          onClick={() => setFavorites(favorites.filter(f => f !== item))}
                        >
                          Remove</button>
                        
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-sm">No favorites yet.</p>
                )}
              </div>
            )}
          </div>
          <FaUser />
          <div className="relative">
            <FaShoppingCart />
            <sup className="text-sm text-blue-600 absolute -top-2 -right-3">3</sup>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="flex gap-6 px-6 py-2 text-sm font-medium bg-white shadow-sm">
        <a href="#">Home & Kitchen</a>
        <a href="#">Stationery</a>
        <a href="#">Kids Return Gifts</a>
        <a href="#">Organizers</a>
        <a href="#" className="text-red-500 flex items-center gap-1"><FaFire /> Sale</a>
      </nav>

      {/* Hero Section */}
      <section className="flex justify-between items-center px-10 py-16 min-h-screen bg-gradient-to-r from-[#f9fafb] to-[#fdf6f0]">
        <div>
          <h2 className="text-6xl font-bold leading-tight tracking-tight">
            Transform Your<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Home & Life</span>
          </h2>
          <p className="mt-6 text-xl max-w-xl text-gray-700">
            Discover premium home & kitchen utilities, creative stationery, delightful kids' gifts, and smart organizers - all in one place.
          </p>
          <div className="mt-8 flex gap-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Shop Now</button>
            <button className="border border-gray-300 px-6 py-2 rounded-lg">Browse Categories</button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="flex flex-col items-center">
              <div className="bg-pink-100 rounded-full p-3 mb-2"><FaHome /></div>
              <p className="font-semibold">Family Owned</p>
              <p className="text-xs">Since generations</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 rounded-full p-3 mb-2"><FaClipboard /></div>
              <p className="font-semibold">Quality Assured</p>
              <p className="text-xs">Premium products only</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 rounded-full p-3 mb-2"><FaUndoAlt /></div>
              <p className="font-semibold">Easy Returns</p>
              <p className="text-xs">30-day return policy</p>
            </div>
          </div>
        </div>
        <div className="shadow-xl rounded-xl bg-white p-10">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-full w-20 h-20 flex items-center justify-center text-white font-bold text-xl">
            S4H
          </div>
          <p className="mt-4 text-lg font-semibold">Premium Collection</p>
          <p className="text-sm">Curated with care for your home</p>
        </div>
      </section>

      {/* Category Section */}
      <section className="px-10 py-12">
        <h2 className="text-3xl font-bold text-center mb-4">Shop by Category</h2>
        <p className="text-center text-gray-600 mb-10">
          Discover our carefully curated collection across different categories, each designed to enhance your daily life.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 flex flex-col items-center">
            <span className="text-xs text-white bg-orange-500 px-2 py-1 rounded-full mb-2">Popular</span>
            <FaHome className="text-blue-600 text-3xl mb-2" />
            <h3 className="font-bold text-lg mb-1">Home & Kitchen</h3>
            <p className="text-sm text-gray-600 text-center">Premium kitchen utilities & home essentials</p>
            <p className="text-xs mt-2 text-gray-400">200+ items</p>
          </div>
          <div className="bg-green-50 rounded-lg p-6 flex flex-col items-center">
            <FaPen className="text-green-600 text-3xl mb-2" />
            <h3 className="font-bold text-lg mb-1">Stationery</h3>
            <p className="text-sm text-gray-600 text-center">Creative supplies for work & study</p>
            <p className="text-xs mt-2 text-gray-400">150+ items</p>
          </div>
          <div className="bg-pink-50 rounded-lg p-6 flex flex-col items-center">
            <span className="text-xs text-white bg-orange-500 px-2 py-1 rounded-full mb-2">Popular</span>
            <FaGift className="text-pink-600 text-3xl mb-2" />
            <h3 className="font-bold text-lg mb-1">Kids Return Gifts</h3>
            <p className="text-sm text-gray-600 text-center">Delightful gifts that kids will love</p>
            <p className="text-xs mt-2 text-gray-400">100+ items</p>
          </div>
          <div className="bg-red-50 rounded-lg p-6 flex flex-col items-center">
  <FaFire className="text-red-600 text-3xl mb-2" />
  <h3 className="font-bold text-lg mb-1">Sale</h3>
  <p className="text-sm text-gray-600 text-center">Limited time deals on top picks</p>
  <p className="text-xs mt-2 text-gray-400">50+ items</p>
</div>
<div className="bg-orange-50 rounded-lg p-6 flex flex-col items-center">
  <FaBox className="text-orange-600 text-3xl mb-2" />
  <h3 className="font-bold text-lg mb-1">Organizers</h3>
  <p className="text-sm text-gray-600 text-center">Smart storage solutions for every space</p>
  <p className="text-xs mt-2 text-gray-400">80+ items</p>
</div>
</div>
</section>

{/* Featured Products Section */}
      <section className="px-10 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Products</h2>
        <p className="text-center text-gray-600 mb-10">
          Handpicked favorites just for you
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((product) => (
            <div
              key={product}
              className="relative bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition group"
            >
              <div className="relative bg-gray-200 h-48 mb-4 rounded">
                <FaHeart
                  className={`absolute top-2 right-2 text-xl cursor-pointer transition-opacity duration-300 ${favorites.includes(product) ? 'text-red-500 opacity-100' : 'text-gray-300 opacity-0 group-hover:opacity-100'}`}
                  onClick={() =>
                    setFavorites(favorites.includes(product)
                      ? favorites.filter(f => f !== product)
                      : [...favorites, product])
                  }
                />
              </div>
              <h3 className="text-lg font-semibold mb-1">Product Name</h3>
              <p className="text-sm text-gray-600 mb-2">Brief description of product</p>
              <p className="text-blue-600 font-bold text-md">₹999</p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-1 rounded text-sm hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <div className="text-xl font-bold mb-1">Shop 4 Home</div>
          <p className="text-gray-400">Your Home, Our Priority</p>
          <p className="mt-4 text-gray-500">
            Transform your living space with our premium collection of home utilities, creative stationery, delightful kids' gifts, and smart organizers.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-400">
            <li>Home & Kitchen</li>
            <li>Stationery</li>
            <li>Kids Return Gifts</li>
            <li>Organizers</li>
            <li>Sale Items</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Customer Support</h3>
          <ul className="space-y-1 text-gray-400">
            <li>Contact Us</li>
            <li>Shipping Info</li>
            <li>Returns & Exchanges</li>
            <li>Size Guide</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Stay Connected</h3>
          <ul className="space-y-1 text-gray-400">
            <li> +91 98765 43210</li>
            <li> hello@shop4home.com</li>
            <li> 123 Home Street, Mumbai, Maharashtra 400001</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
