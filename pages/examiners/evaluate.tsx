import React from 'react'
import { useState } from 'react';

function evaluate() {
    const [courseCode, setCourseCode] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  const [creditHour, setCreditHour] = useState('');
  const [grade, setGrade] = useState('');
  const [gradePoint, setGradePoint] = useState('');
  const [remarks, setRemarks] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // TODO: Submit the form data to the server
    console.log({
      courseCode,
      courseTitle,
      creditHour,
      grade,
      gradePoint,
      remarks,
    });
  };
  return (
    <div>
         
         <div className="flex gap-24">
          <div>
            <form className="max-w-md mx-auto mt-12 shadow-md p-24">
              <div className="mb-4">
                <label
                  htmlFor="courseCode"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Group Name
                </label>
                <input
                  type="text"
                  id="courseCode"
                  name="courseCode"
                  value={courseTitle}
                  onChange={(event) => setCourseTitle(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="courseCode"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Semester
                </label>
                <input
                  type="text"
                  id="courseCode"
                  name="courseCode"
                  value={courseTitle}
                  onChange={(event) => setCourseTitle(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="courseTitle"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Year
                </label>
                <input
                  type="number"
                  id="courseTitle"
                  name="courseTitle"
                  value={courseTitle}
                  onChange={(event) => setCourseTitle(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="creditHour"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Project Name
                </label>
                <input
                  type="number"
                  id="creditHour"
                  name="creditHour"
                  value={creditHour}
                  onChange={(event) => setCreditHour(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="grade"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Grade
                </label>
                <select
                  id="grade"
                  name="grade"
                  value={grade}
                  onChange={(event) => setGrade(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Choose a grade</option>
                  <option value="A+">A+</option>
                  <option value="A">A</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B">B</option>
                  <option value="B-">B-</option>
                  <option value="C+">C+</option>
                  <option value="C">C</option>
                  <option value="C-">C-</option>
                  <option value="D+">D+</option>
                  <option value="D">D</option>
                  <option value="F">F</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          <div>
            {/* Assesment Result */}
            <form className="max-w-md mx-auto mt-12 shadow-md p-24">
              <div className="mb-4">
                <label
                  htmlFor="courseCode"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Group Name
                </label>
                <input
                  type="text"
                  id="courseCode"
                  name="courseCode"
                  value={courseTitle}
                  onChange={(event) => setCourseTitle(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="courseTitle"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Oral press & Defense ( 20% )
                </label>
                <input
                  type="number"
                  id="courseTitle"
                  name="courseTitle"
                  value={courseTitle}
                  onChange={(event) => setCourseTitle(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <p className="font-bold mt-7 mb-3">Documentation ( 35% )</p>
              <div className="mb-4">
                <label
                  htmlFor="creditHour"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Formatting & Referencing (5%)
                </label>
                <input
                  type="number"
                  id="creditHour"
                  name="creditHour"
                  value={creditHour}
                  onChange={(event) => setCreditHour(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="creditHour"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Language (5%)
                </label>
                <input
                  type="number"
                  id="creditHour"
                  name="creditHour"
                  value={creditHour}
                  onChange={(event) => setCreditHour(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="creditHour"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Document Organization and content (10%)
                </label>
                <input
                  type="number"
                  id="creditHour"
                  name="creditHour"
                  value={creditHour}
                  onChange={(event) => setCreditHour(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="creditHour"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Design Modelling (15%)
                </label>
                <input
                  type="number"
                  id="creditHour"
                  name="creditHour"
                  value={creditHour}
                  onChange={(event) => setCreditHour(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <p className="font-bold mt-7 mb-3">Implementation ( 45% )</p>
              <div className="mb-4">
                <label
                  htmlFor="creditHour"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Interface/Layout/neatness (15%)
                </label>
                <input
                  type="number"
                  id="creditHour"
                  name="creditHour"
                  value={creditHour}
                  onChange={(event) => setCreditHour(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="creditHour"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Features Addressed (15%)
                </label>
                <input
                  type="number"
                  id="creditHour"
                  name="creditHour"
                  value={creditHour}
                  onChange={(event) => setCreditHour(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="creditHour"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Coding Style (5%)
                </label>
                <input
                  type="number"
                  id="creditHour"
                  name="creditHour"
                  value={creditHour}
                  onChange={(event) => setCreditHour(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="creditHour"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Testing Procedures (5%)
                </label>
                <input
                  type="number"
                  id="creditHour"
                  name="creditHour"
                  value={creditHour}
                  onChange={(event) => setCreditHour(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="creditHour"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Other Implementation issues (5%)
                </label>
                <input
                  type="number"
                  id="creditHour"
                  name="creditHour"
                  value={creditHour}
                  onChange={(event) => setCreditHour(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="creditHour"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Total (100%)
                </label>
                <input
                  type="number"
                  id="creditHour"
                  name="creditHour"
                  value={creditHour}
                  onChange={(event) => setCreditHour(event.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default evaluate