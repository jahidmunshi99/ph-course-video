import React from "react";

const AddVideoModal = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white hidden md:flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-gray-700">
          EduAdmin
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">Dashboard</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">Students</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">Courses</a>
          <a href="#" className="block px-4 py-2 rounded bg-gray-800">Videos</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Admin</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="Admin Avatar"
              className="rounded-full"
            />
          </div>
        </header>

        {/* Content */}
        <div className="p-6 space-y-6">

          {/* Videos Table */}
          <section className="bg-white p-6 rounded-xl shadow">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold">Videos</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
                + Add Video
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 text-left">Sl</th>
                    <th className="p-2 text-left">Title</th>
                    <th className="p-2 text-left">Status</th>
                    <th className="p-2 text-left">Date</th>
                    <th className="p-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-2">1</td>
                    <td className="p-2">Intro to React</td>
                    <td className="p-2">Published</td>
                    <td className="p-2">12-12-2025</td>
                    <td className="p-2 flex gap-4">
                      <button className="text-blue-600">Edit</button>
                      <button className="text-red-600">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Add Video Form */}
          <section className="bg-white p-6 rounded-xl shadow">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Batch No</label>
                <input
                  type="text"
                  placeholder="e.g. BATCH-01"
                  className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Course Name</label>
                <input
                  type="text"
                  placeholder="React Masterclass"
                  className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Video Title</label>
                <input
                  type="text"
                  placeholder="Introduction to React"
                  className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  rows="4"
                  placeholder="Video description..."
                  className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                />
              </div>

                <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Video URL</label>
                <input
                  type="url"
                  placeholder="https://..."
                  className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                />
                </div>
                <div className="flex items-center justify-between border rounded-lg px-4 py-3">
                    <label className="text-sm font-medium text-gray-700">Is Published</label>
                    <select name="" id="">
                        <option value="publish">Publish</option>
                        <option value="push">Push</option>
                    </select>
                </div>
              



              <div className="md:col-span-2">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition">
                  Save Video
                </button>
              </div>

            </form>
          </section>

        </div>
      </div>
    </div>
  );
};

export default AddVideoModal;
