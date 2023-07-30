import React from 'react'
import ProjectForm from '../../../components/Form/projectUploadForm'
import StudentLayout from '../../../components/layout/student/StudentLayout'
import UploadedProjects from '../../../components/Form/UploadedProjectsForm'

function index() {
  return (
    <div className='flex'>
        <div>
          <StudentLayout />
        </div>
        <div className='flex flex-col'>
          <ProjectForm/>
          <UploadedProjects/>
        </div>
    </div>
  )
}

export default index