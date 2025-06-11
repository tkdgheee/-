import React from "react";
import UsersPlace from "./components/usersPlace";
import PlaceList from "./components/placeList";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">🍽️ 다이닝코드</h1>
          {/* <UsersPlace /> */}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <PlaceList />
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          ⓒ 2025 DiningCode. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
