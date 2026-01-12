import React from 'react'

const Sidebar = () => {
  return (
  <aside class="w-64 bg-gray-900 text-white hidden md:flex flex-col">
    <div class="p-6 text-2xl font-bold border-b border-gray-700">
      ProgHive-Admin
    </div>
    <nav class="flex-1 p-4 space-y-2">
      <a href="#" class="block px-4 py-2 rounded bg-gray-800">Dashboard</a>
      <a href="#" class="block px-4 py-2 rounded hover:bg-gray-800">Students</a>
      <a href="#" class="block px-4 py-2 rounded hover:bg-gray-800">Courses</a>
      <a href="#" class="block px-4 py-2 rounded hover:bg-gray-800">Videos</a>
      <a href="#" class="block px-4 py-2 rounded hover:bg-gray-800">Settings</a>
    </nav>
  </aside>
  )
}

export default Sidebar