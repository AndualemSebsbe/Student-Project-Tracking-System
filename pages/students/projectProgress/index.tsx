import React from 'react'
import SubmitProjectForm from '../../../components/Form/submitProject'
import StudentLayout from '../../../components/layout/student/StudentLayout'

function index() {
  return (

    <div className='flex'>
        {/* student */}
      <StudentLayout/>
    <div className='flex flex-col'>
    <div>
      <SubmitProjectForm/>   
    </div>

    <div className="flex flex-col items-center justify-center my-5">
             
             <h1 className="text-4xl font-bold text-center mb-8">Your Project Progress</h1>  
            
            
             <div className=" bg-white rounded-lg shadow-lg mx-12">
               <table className="w-full table-fixed border-collapse">
                 <thead className="bg-black">
                   <tr>
                   <th className="w-1/3 py-3 px-4 border text-left text-gray-200">Chapter Submitted</th>
                     <th className="w-1/3 py-3 px-4 border text-left text-gray-200">File Uploaded</th>
                     <th className="w-1/3 py-3 px-4 border text-left text-gray-200">Works Remaining</th>
                     <th className="w-1/3 py-3 px-4 border text-left text-gray-200">Feedback</th>
                   </tr>
              </thead>
                 <tbody>
                   <tr>
                     <td className="py-3 px-4 border">chapter One</td>
                     <td className="py-3 px-4 border"><p className="text-blue-600 hover:text-blue-800">Chapter One.docx</p></td>
                     <td className="py-3 px-4 border">chapter two-chapter Five</td>
                     <td className="py-3 px-4 border"><button id="comment-modal-1" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
             View Feedback
           </button></td>
           
                   </tr>
                   <tr>
                     <td className="py-3 px-4 border">chapter Two</td>
                     <td className="py-3 px-4 border"><p className="text-blue-600 hover:text-blue-800">Chapter One.docx</p></td>
                     <td className="py-3 px-4 border">chapter two-chapter Five</td>
                     <td className="py-3 px-4 border"><button id="comment-modal-1" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
             View Feedback
           </button></td>
                   </tr>
                   <tr>
                     <td className="py-3 px-4 border">chapter Three</td>
                     <td className="py-3 px-4 border"><p className="text-blue-600 hover:text-blue-800">Chapter One.docx</p></td>
                     <td className="py-3 px-4 border">chapter two-chapter Five</td>
                     <td className="py-3 px-4 border"><button id="comment-modal-1" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
             View Feedback
           </button></td>
                   </tr>
                 </tbody>
               </table>
               {/* <div className="px-4 py-6">
                 <CommentSection comments={comments} onCommentSubmit={handleCommentSubmit} />
               </div> */}
             </div>
           
           </div>
    </div>
    </div>
  )
}

export default index