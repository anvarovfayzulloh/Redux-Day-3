import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

function Home() {
  const [data, setData] = useState('');
  const [translation, setTranslation] = useState('');
  const [source, setSource] = useState('en');
  const [target, setTarget] = useState('uz');

  const fetchTranslation = async (e) => {
    e.preventDefault();
    const result = await useFetch(translation, source, target);
    setData(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <form onSubmit={fetchTranslation} className="space-y-6">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 font-semibold mb-2">From:</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300" value={source} onChange={(e) => setSource(e.target.value)} >
                <option value="en">English</option>
                <option value="ru">Russian</option>
                <option value="uz">Uzbek</option>
                <option value="es">Spain</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
                <option value="tr">Turkiye</option>
              </select>
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 font-semibold mb-2">To:</label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300" value={target} onChange={(e) => setTarget(e.target.value)} >
                <option value="en">English</option>
                <option value="ru">Russian</option>
                <option value="uz">Uzbek</option>
                <option value="es">Spain</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
                <option value="tr">Turkiye</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Text:</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter text here..." onChange={(e) => setTranslation(e.target.value)} />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors" >
              Translate
            </button>
          </div>
        </form>
        <div className="mt-8">
          <h2 className="text-gray-700 font-semibold text-lg">Translation:</h2>
          <p className="mt-4 bg-gray-50 p-4 rounded-lg shadow-inner text-gray-800">
            {data || "Your translation will appear here..."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
