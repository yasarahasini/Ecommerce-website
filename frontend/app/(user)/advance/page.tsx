import React from 'react'

const page = () => {
  return (
    <div className="bg-gradient-to-tr from-pink-500 via-white to-pink-200 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Advanced Features</h1>
        <p className="text-lg text-center text-gray-700">
          Explore our advanced features designed to enhance your shopping experience.
        </p>
      </div>
<div className='flex float-left flex-wrap gap-4 justify-center mt-10 items-center px-100'>
      <div className='bg-red-500 w-50 h-30 py-12 px-4 mt-9 rounded-b-4xl items-center justify-center text-center'>
<div>
    New Arrivals
</div>
      </div>
         <div className='bg-red-500 w-50 h-30 py-12 px-4 mt-9 rounded-b-4xl items-center justify-center text-center'>
<div>
    Deals
</div>
      </div>
         <div className='bg-red-500 w-50 h-30 py-12 px-4 mt-9 rounded-b-4xl items-center justify-center text-center'>
<div>
    Brand Outlet
</div>
      </div>
         <div className='bg-red-500 w-50 h-30 py-12 px-4 mt-9 rounded-b-4xl items-center justify-center text-center'>
<div>
    Gift Cards
</div>
      </div>
         <div className='bg-red-500 w-50 h-30 py-12 px-4 mt-9 rounded-b-4xl items-center justify-center text-center'>
<div>
   Feactures
</div>
      </div>
      </div>
    </div>
  )
}

export default page