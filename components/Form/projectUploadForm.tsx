'use client'
import { useState, FormEvent, useRef } from 'react';
import axios from 'axios';
const ProjectForm: React.FC = () => {
  const [projectTitle, setProjectTitle] = useState('');
  const [description, setDescription] = useState('');
  const[academicYear, setAcademicYear] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [pdf, setPdf] = useState<File | null>(null)
  // const [submitError, setSubmitError] = useState('');
  const [message, setMessage] = useState('')

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setter(e.target.files[0]);
    }
  };
  async function handleProjectFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // try{
    // const input = ref.current!;
    const formData = new FormData();
    formData.append('projectTitle', projectTitle);
    formData.append('description', description);
    formData.append('academicYear', academicYear);

    if (image) {
      formData.append('image', image);
    }
    if (pdf) {
      formData.append('pdf', pdf);
    }

    console.log(formData.get('image'))

    try{
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const response = await axios.post('/api/projects/new/create', formData, config);
        // Handle response
      console.log(response.data)
      setMessage("Project uploaded successfully");
      setProjectTitle("");
      setDescription("");
      setAcademicYear("");
      setImage(null);
      setPdf(null);

    }catch(error){
      console.error('Failed to upload project:', error); // Handle error
      setMessage('Error creating project');
      if (error.response) {
        alert(error.response.data.error); // Display error message from the server
      } else {
        alert('Failed to upload project. Please try again.'); // Display a generic error message
      }
    }
        
  }

  return (
    <div className="py-24 text-gray-500">
      <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Upload Project</h2>
        <form onSubmit={handleProjectFormSubmit}>
          <div className="mb-4">
            <label htmlFor="projectTitle" className="text-lg font-medium">
              Project Title
            </label>
            <input
              type="text"
              id="projectTitle"
              name="projectTitle"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              required
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="text-lg font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="academicYear" className='text-lg font-medium'>Academic Year </label>
            <input
              type="text"
              id="academicYear"
              name="academicYear"
              value={academicYear}
              onChange={(e) => setAcademicYear(e.target.value)}
              required
              className='border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="image" className='text-lg font-medium'>Image </label>
            <br/>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setImage)}
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="pdf" className='text-lg font-medium'>Project File </label>
            <input
              type="file"
              id="pdf"
              name="pdf"
              accept=".pdf"
              onChange={(e) => handleFileChange(e, setPdf)}
              required
            />
          </div>
          <div className='flex mb-4 justify-center'>
            <button type="submit" className='bg-blue-700 px-4 py-2 text-white rounded-lg'>Upload Project</button>
            <br />
          </div>
          <div className='mb-4 text-center'>
            {message && <p>{message}</p>}
          </div>
        </form>
      </div>
    </div>
    // <div className="py-24 space-p-4 bg-gray-50 text-center place-items-center">
    //   <form 
    //     // encType="multipart/form-data"
    //     onSubmit={handleProjectFormSubmit}
    //     >
    //     <label htmlFor="projectTitle">Title: </label>
    //     <input
    //       type="text"
    //       id="projectTitle"
    //       name="projectTitle"
    //       value={projectTitle}
    //       onChange={(e) => setProjectTitle(e.target.value)}
    //       required
    //     />
    //     <br />
    //     <br />

    //     <label htmlFor="description">Description: </label>
    //     <textarea
    //       id="description"
    //       name="description"
    //       value={description}
    //       onChange={(e) => setDescription(e.target.value)}
    //       required
    //     />
    //     <br />
    //     <br />

        // <label htmlFor="academicYear">Academic Year: </label>
        // <input
        //   type="text"
        //   id="academicYear"
        //   name="academicYear"
        //   value={academicYear}
        //   onChange={(e) => setAcademicYear(e.target.value)}
        //   required
        // />
    //     <br />
    //     <br />
    //     {/* <input type="file" name="files" ref={ref} multiple/> */}

        // <label htmlFor="image">Image: </label>
        // <input
        //   type="file"
        //   id="image"
        //   name="image"
        //   accept="image/*"
        //   onChange={(e) => handleFileChange(e, setImage)}
        //   required
        // />
    //     <br />
    //     <br />

        // <label htmlFor="pdf">Project File: </label>
        // <input
        //   type="file"
        //   id="pdf"
        //   name="pdf"
        //   accept=".pdf"
        //   onChange={(e) => handleFileChange(e, setPdf)}
        //   required
        // />
    //     <br />
    //     <br />

        // <button type="submit" className='bg-blue-700 px-4 py-2 text-white rounded-lg'>Upload Project</button>
        // {message && <p>{message}</p>}
    //     {/* {submitError && <p>{submitError}</p>} */}
    //   </form>
    // </div>
  );
}

export default ProjectForm