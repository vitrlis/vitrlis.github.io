/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('index.html');

  // This is a simple previewer for the static files we've created.
  // In a real environment, you'd just open the HTML files.
  
  const navigate = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-[#2b1d0e] text-[#d2b48c] font-serif p-8">
      <div className="max-w-4xl mx-auto border border-[#d2b48c]/20 p-4 rounded mb-8 text-xs opacity-50">
        Previewing: {currentPage} | <button onClick={() => window.location.reload()} className="underline">Reload</button>
      </div>

      {currentPage === 'index.html' && (
        <div className="relative h-[70vh]">
          <div className="absolute top-0 left-0">
            <a href="#" onClick={(e) => navigate(e, 'index.html')} className="text-xl"><h3>vitrlis</h3></a>
          </div>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <div className="flex flex-col gap-4 items-center">
              <a href="#" onClick={(e) => navigate(e, 'book.html')} className="text-3xl hover:underline"><h2>book</h2></a>
              <a href="#" onClick={(e) => navigate(e, 'poems.html')} className="text-3xl hover:underline"><h2>poems</h2></a>
              <a href="#" onClick={(e) => navigate(e, 'blogs.html')} className="text-3xl hover:underline"><h2>blogs</h2></a>
            </div>
          </div>
        </div>
      )}

      {currentPage !== 'index.html' && (
        <div className="relative pt-12">
          <div className="absolute top-0 left-0">
            <a href="#" onClick={(e) => navigate(e, 'index.html')} className="text-xl"><h3>vitrlis</h3></a>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl text-center mb-2">
              {currentPage === 'book.html' ? 'Hard Sacks' : currentPage === 'poems.html' ? 'poems' : 'blogs'}
            </h2>
            <hr className="border-t border-[#d2b48c] mx-[5%] mb-8" />
            
            {currentPage === 'book.html' && (
              <div className="space-y-12">
                <div>
                  <h5 className="text-lg text-center mb-4">Chapter I: The Beginning</h5>
                  <div className="whitespace-pre-wrap text-left mx-[8%]">
                    It was a dark and stormy night.{"\n"}
                    The sacks were hard, the road was long.{"\n"}
                    Whitespace     is     preserved.
                  </div>
                  <hr className="border-t border-[#d2b48c] mx-[30%] mt-8" />
                </div>
                <div>
                  <h5 className="text-lg text-center mb-4">Chapter II: The Middle</h5>
                  <div className="whitespace-pre-wrap text-left mx-[8%]">
                    The sacks got harder.{"\n"}
                    The road got longer.
                  </div>
                  <hr className="border-t border-[#d2b48c] mx-[30%] mt-8" />
                </div>
              </div>
            )}

            {currentPage === 'poems.html' && (
              <div className="space-y-12">
                <div>
                  <h5 className="text-lg text-center mb-4">The First Verse</h5>
                  <div className="whitespace-pre-wrap text-left mx-[8%]">
                    Softly falls the sepia rain{"\n"}
                    Upon the brown and dusty plain.
                  </div>
                  <hr className="border-t border-[#d2b48c] mx-[30%] mt-8" />
                </div>
                <div>
                  <h5 className="text-lg text-center mb-4">The Second Verse</h5>
                  <div className="whitespace-pre-wrap text-left mx-[8%]">
                    A minimal line{"\n"}
                    A simple rhyme.
                  </div>
                  <hr className="border-t border-[#d2b48c] mx-[30%] mt-8" />
                </div>
              </div>
            )}

            {currentPage === 'blogs.html' && (
              <p className="text-center italic">Coming soon...</p>
            )}
          </div>
        </div>
      )}
      
      <div className="mt-20 pt-8 border-t border-[#d2b48c]/10 text-xs opacity-40">
        <p>Note: This React app is a preview. Use <code>generate.py</code> to build your static site from <code>books.txt</code> and <code>poems.txt</code>.</p>
      </div>
    </div>
  );
}

