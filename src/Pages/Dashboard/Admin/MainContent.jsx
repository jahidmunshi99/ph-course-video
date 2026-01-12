import React from 'react'

const MainContent = () => {
  return (
    <div class="flex-1 flex flex-col">
    {/* <!-- Header --> */}
    <header class="bg-white shadow p-4 flex justify-between items-center">
      <h1 class="text-xl font-semibold">Admin Dashboard</h1>
      <div class="flex items-center gap-3">
        <span class="text-sm text-gray-600">Admin</span>
        <img src="https://i.pravatar.cc/40" class="rounded-full" />
      </div>
    </header>

    {/* <!-- Content --> */}
    <div class="p-6 space-y-6">

      {/* <!-- Stats --> */}
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-white p-4 rounded-xl shadow">
          <p class="text-sm text-gray-500">Total Students</p>
          <h2 class="text-2xl font-bold">320</h2>
        </div>
        <div class="bg-white p-4 rounded-xl shadow">
          <p class="text-sm text-gray-500">Courses</p>
          <h2 class="text-2xl font-bold">12</h2>
        </div>
        <div class="bg-white p-4 rounded-xl shadow">
          <p class="text-sm text-gray-500">Videos</p>
          <h2 class="text-2xl font-bold">86</h2>
        </div>
        <div class="bg-white p-4 rounded-xl shadow">
          <p class="text-sm text-gray-500">Active Users</p>
          <h2 class="text-2xl font-bold">210</h2>
        </div>
      </section>

      {/* <!-- Students Table --> */}
      <section class="bg-white p-6 rounded-xl shadow">
        <div class="flex justify-between mb-4">
          <h2 class="text-lg font-semibold">Students</h2>
          <button class="bg-blue-600 text-white px-4 py-2 rounded">+ Add Student</button>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Name</th>
                <th class="p-2 text-left">Email</th>
                <th class="p-2 text-left">Course</th>
                <th class="p-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t">
                <td class="p-2">John Doe</td>
                <td class="p-2">john@email.com</td>
                <td class="p-2">React</td>
                <td class="p-2">
                  <button class="text-blue-600">Edit</button>
                </td>
              </tr>
              <tr class="border-t">
                <td class="p-2">Jane Smith</td>
                <td class="p-2">jane@email.com</td>
                <td class="p-2">Node.js</td>
                <td class="p-2">
                  <button class="text-blue-600">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
  )
}

export default MainContent