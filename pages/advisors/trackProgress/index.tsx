import React from 'react'

function index() {
  return (
    <div>
        {/* Advisor */}
        <div className="flex flex-col items-center justify-center mt-12 ">
             
             <h1 className="text-4xl font-bold text-center mb-8">Project Progress</h1>  
            
            
             <div className=" bg-white rounded-lg shadow-lg mx-12">
               <table className="w-full table-fixed border-collapse">
                 <thead className="bg-black">
                   <tr>
                   <th className="w-1/3 py-3 px-4 border text-left text-gray-200">Group Name</th>
                   <th className="w-1/3 py-3 px-4 border text-left text-gray-200">Chapter Submitted</th>
                   <th className="w-1/3 py-3 px-4 border text-left text-gray-200">Project Title</th>
                     <th className="w-1/3 py-3 px-4 border text-left text-gray-200">File Uploaded</th>
                     <th className="w-1/3 py-3 px-4 border text-left text-gray-200">Works Remaining</th>
               
                   </tr>
              </thead>
                 <tbody>
                   <tr>
                     <td className="py-3 px-4 border">Group One</td>
                     <td className="py-3 px-4 border">chapter One</td>
                     <td className="py-3 px-4 border">SPTS</td>
                     <td className="py-3 px-4 border"><p className="text-blue-600 hover:text-blue-800">Chapter One.docx</p></td>
                     <td className="py-3 px-4 border">chapter two-chapter Five</td>
                 
                   </tr>
                   <tr>
                     <td className="py-3 px-4 border">Group Two</td>
                     <td className="py-3 px-4 border">chapter One</td>
                     <td className="py-3 px-4 border">SPTS</td>
                     <td className="py-3 px-4 border"><p className="text-blue-600 hover:text-blue-800">Chapter One.docx</p></td>
                     <td className="py-3 px-4 border">chapter two-chapter Five</td>
                   </tr>
                   <tr>
                     <td className="py-3 px-4 border">Group Three</td>
                     <td className="py-3 px-4 border">chapter One</td>
                     <td className="py-3 px-4 border">SPTS</td>
                     <td className="py-3 px-4 border"><p className="text-blue-600 hover:text-blue-800">Chapter One.docx</p></td>
                     <td className="py-3 px-4 border">chapter two-chapter Five</td>
                   </tr>
                 </tbody>
               </table>
           
             </div>
           
           </div>
           <div className="float-right flex flex-col justify-end mr-12 mt-5">
             <button id="comment-modal-1" className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded">
             Send Feedback
           </button>
           </div>
    </div>
  )
}

export default index