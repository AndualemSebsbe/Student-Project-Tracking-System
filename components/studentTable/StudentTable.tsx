import React, {useState} from 'react'
import User from '../../models/user';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { MdEdit } from 'react-icons/md'
import UpdateStudentModal from '../../components/modals/UpdateStudentModal'
interface Student{
    _id: string
    fullName: string
    email: string
    username: string
    password: string
}

interface StudentTableProps {
    student: Student;
}
function StudentTable(student: Student) {
    const [showModal, setShowModal] = useState(false)
    const onDeleteHandler = async (id: any) => {
        if (window.confirm(`Are you sure?`)) {
            const response = await fetch(`/api/deleteApis/deleteUserById?id=${id}`, {
                method: 'DELETE',
            });

            if(response.ok){
                console.log("User deleted Successfully")
            }
            else{
                const data = await response.json();
                console.log(data.error);
            }
        }
      }
      
  return (
    
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        
        <tbody>
            <tr key={student._id} className="bg-white border-b  dark:border-gray-700">
                <td className='px-6 py-3'>
                    {student.fullName}
                </td>
                <td className='pr-6 py-3'>
                    {student.email}
                </td>
                <td className='pr-6 py-3'>
                    {student.username}
                </td>
                <td className='pl-6 py-3'>
                    {student.password}
                </td>
                <td className='pl-6 py-3 mr-10'>
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => setShowModal(true)}><MdEdit size={20} /></a>
                    <hr />
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => onDeleteHandler(student._id)}><RiDeleteBin6Line size={20} /></a>
                </td>
                
                {/* <td className='py-4'>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                </td> */}
            </tr>
        </tbody>
    </table>
    {showModal ? (
        <UpdateStudentModal
        _id={student._id} 
        fullName={student.fullName}
        username={student.username}
        password={student.password}
        email={student.email}
        showModal={showModal}
        setShowModal={setShowModal}
        />
    ) : null}
</div>

  )
}

export default StudentTable



// import React from 'react'
// import {Student} from '@prisma/client'

// interface StudentTableProps {
//     student: Student;
// }
// function StudentTable(props: StudentTableProps) {
//   return (
    
// <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//     <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        
//         <tbody>
//             <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
//                 <td scope="row" className="px-10 py-4 w-1/5">
//                     {props.student.firstName}
//                 </td>
//                 <td className="px-10 py-4 w-1/5">
//                     {props.student.lastName}
//                 </td>
//                 <td className="px-10 py-4 w-1/5">
//                     {props.student.email}
//                 </td>
//                 <td className="px-10 py-4 w-1/5">
//                     {props.student.studentId}
//                 </td>
//                 <td className="px-10 py-4 w-1/5">
//                     <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                 </td>
//             </tr>
//         </tbody>
//     </table>
// </div>

//   )
// }

// export default StudentTable