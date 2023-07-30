import React from 'react'
import StudentLayout from '../../../components/layout/student/StudentLayout'
function index() {
  return (
    <div className='flex'>
      <StudentLayout/>
      <div className="justify-center align-center mb-12">
          <div className="font-bold text-center text-2xl mb-12 mt-5">
          My Grade Report
          </div>
          <table className="border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 px-4 py-2 text-left">
                  Semester
                </th>
                <th className="border border-gray-400 px-4 py-2 text-left">
                  Year
                </th>
                <th className="border border-gray-400 px-4 py-2 text-left">
                  Project Name
                </th>
                <th className="border border-gray-400 px-4 py-2 text-left">
                  Grade
                </th>
                <th className="border border-gray-400 px-4 py-2 text-left">
                  Assesment Result
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">ONE</td>
                <td className="border border-gray-400 px-4 py-2">2023</td>
                <td className="border border-gray-400 px-4 py-2">Industrial I</td>
                <td className="border border-gray-400 px-4 py-2">A</td>
                <td className="border border-gray-400 px-4 py-2">
                  {' '}
                  <div className="w-30 h-9 text-center bg-gray-200 hover:bg-gray-700 text-white py-2 px-4 mt-3 rounded">
                    <a href="" className=" pl-2 px-4 rounded w-30">
                      Assesment
                    </a>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="border border-gray-400 px-4 py-2">TWO</td>
                <td className="border border-gray-400 px-4 py-2">2023</td>
                <td className="border border-gray-400 px-4 py-2">
                  Industrial II
                </td>
                <td className="border border-gray-400 px-4 py-2">A</td>
                <td className="border border-gray-400 px-4 py-2">
                  {' '}
                  <div className="w-30 h-9 text-center bg-gray-200 hover:bg-gray-700 text-white py-2 px-4 mt-3 rounded">
                    <a href="" className=" pl-2 px-4 rounded w-30">
                      Assesment
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
  </div>
  )
}

export default index