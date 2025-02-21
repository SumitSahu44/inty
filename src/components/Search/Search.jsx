import React from 'react'

const Search = () => {
  return (
    <section className="py-5  px-6 md:px-12 lg:px-24 text-center flex justify-center items-center  mb-15" >

<div class="w-full max-w-6xl px-4 text-center"  data-aos="fade-up">
        <h2 class="text-lg md:text-xl font-semibold text-[#006452] mb-4">
            We help you find and compare the best interior companies, designers and carpenters
        </h2>
        <div class="relative bg-[#006452] text-white rounded-full flex items-center p-3 md:p-3 shadow-lg">
            <input 
                type="text" 
                placeholder="What you are Looking for..." 
                class="flex-1 bg-transparent outline-none placeholder-white px-4"
            />
             <button class="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <select class="w-full p-2 border rounded-lg text-gray-700 focus:outline-none">
                <option className='text-sm'>Project Type</option>
            </select>
            <select class="w-full p-2 border rounded-lg text-gray-700 focus:outline-none">
                <option className='text-sm'>Design Style</option>
            </select>
            <select class="w-full p-2 border rounded-lg text-gray-700 focus:outline-none">
                <option className='text-sm'>Price Range</option>
            </select>
            <select class="w-full p-2 border rounded-lg text-gray-700 focus:outline-none">
                <option className='text-sm'>Availability</option>
            </select>
        </div>
    </div>

    </section>
  )
}

export default Search
