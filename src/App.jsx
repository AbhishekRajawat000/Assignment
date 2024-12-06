import React from 'react';
import './App.css';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 p-4 bg-white">
        <div className="mb-8 text-2xl font-bold">LOGO</div>
        <nav>
          <ul className="space-y-3 p-4 text-gray-600">
            <li className="flex items-center">
              <img src="./logo/home.svg" alt="Home Icon" className="w-5 h-5 mr-2" />
              Home
            </li>
            <li className="flex items-center">
              <img src="./logo/notification.svg" alt="Notifications Icon" className="w-5 h-5 mr-2" />
              Notifications
            </li>
            <li className="flex items-center">
              <img src="./logo/heart-1.svg" alt="Shop Icon" className="w-5 h-5 mr-2" />
              Shop
            </li>
            <li className="flex items-center">
              <img src="./logo/message.svg" alt="Conversation Icon" className="w-5 h-5 mr-2" />
              Conversation
            </li>
            <li className="flex items-center">
              <img src="./logo/message.svg" alt="Wallet Icon" className="w-5 h-5 mr-2" />
              Wallet
            </li>
            <li className="flex items-center">
              <img src="./logo/conversation.svg" alt="Subscription Icon" className="w-5 h-5 mr-2" />
              Subscription
            </li>
            <li className="flex items-center">
              <img src="./logo/profile.svg" alt="Profile Icon" className="w-5 h-5 mr-2" />
              My Profile
            </li>
            <li className="flex items-center">
              <img src="./logo/setting.svg" alt="Settings Icon" className="w-5 h-5 mr-2" />
              Settings
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <header className="flex items-center justify-between mb-6">
          <input
            type="text"
            placeholder="Search here..."
            className="p-2 border rounded"
          />
          <div>
            <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded">Filters</button>
            <button className="px-8 py-4 text-white bg-[#88C2BB] rounded-lg">Become a Seller</button>
          </div>
        </header>
        <section className="p-4 bg-white rounded shadow">
          <div className="flex items-center mb-4">
            <img src="./image/img.png" alt="Profile" className="w-12 h-12 mr-4 rounded-full" />
            <div>
              <h2 className="text-lg font-bold">Lara Leones</h2>
              <p className="text-sm text-gray-500">@thewallart</p>
            </div>
          </div>
          <p className="mb-4 text-sm">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <a href="#" className="text-blue-500">Read More</a>
          </p>
          <img src="./image/img.png" alt="Art" className="w-full mb-4 rounded" />
          <div className="flex flex-row text-gray-500">
            <div className="flex items-center">
              <img src="./logo/heart-1.svg" alt="Likes Icon" className="w-5 h-5 mr-1" />
              <span>9.8k</span>
            </div>
            <div className="flex items-center">
              <img src="./logo/comment-1.svg" alt="Comments Icon" className="w-5 h-5 mr-1" />
              <span>8.6k</span>
            </div>
            <div className="flex items-center">
              <img src="./logo/share.svg" alt="Shares Icon" className="w-5 h-5 mr-1" />
              <span>7.2k</span>
            </div>
          </div>
        </section>
      </main>
      <aside className="w-64 p-4">
        <h3 className="mb-4 text-lg font-bold">Artists</h3>
        <div className="flex items-center h-[126px] mb-4 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(./image/img.png)' }}>
          <img src="./image/img.png" alt="Artist" className="w-10 h-10 mr-2 rounded-full" />
          <div className="text-white">
            <p className="font-bold">Thomas Edward</p>
            <p className="text-sm">@thewildwithyou</p>
          </div>
        </div>
        <div className="flex items-center h-[126px] mb-4 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(./image/img.png)' }}>
          <img src="./image/img.png" alt="Artist" className="w-10 h-10 mr-2 rounded-full" />
          <div className="text-white">
            <p className="font-bold">Chris Doe</p>
            <p className="text-sm">@chrisdoe</p>
          </div>
        </div>
        <div className="flex items-center h-[126px] bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(./image/img.png)' }}>
          <img src="./image/img.png" alt="Artist" className="w-10 h-10 mr-2 rounded-full" />
          <div className="text-white">
            <p className="font-bold">Emilie Jones</p>
            <p className="text-sm">@emiliejones</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;