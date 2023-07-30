'use client'
import { useState, FormEvent, useRef } from 'react';
import axios from 'axios';
const SubmitProjectForm: React.FC = () => {
  const [projectTitle, setProjectTitle] = useState('');
  const [chapterToBeSubmitted, setChapterToBeSubmitted] = useState('');
  const[worksRemaining, setWorksRemaining] = useState('')
//   const [image, setImage] = useState<File | null>(null)
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
    formData.append('chapterToBeSubmitted', chapterToBeSubmitted);
    formData.append('worksRemaining', worksRemaining);

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
      setMessage("Project progress submitted successfully");
      setProjectTitle("");
      setChapterToBeSubmitted("");
      setWorksRemaining("");
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
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Sumbit Project Progress</h2>
        <form onSubmit={handleProjectFormSubmit}>
          <div className="mb-4">
            <label htmlFor="groupName" className="text-lg font-medium">
              Group Name
            </label>
            <input
              type="text"
              id="groupName"
              name="groupName"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              required
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
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
              Chapter to be Submitted
            </label>
            <input
                type='text'
              id="chapterToBeSubmitted"
              name="chapterToBeSubmitted"
              value={chapterToBeSubmitted}
              onChange={(e) => setChapterToBeSubmitted(e.target.value)}
              required
              className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="academicYear" className='text-lg font-medium'>Works Remaining </label>
            <input
              type="text"
              id="worksRemaining"
              name="worksRemaining"
              value={worksRemaining}
              onChange={(e) => setWorksRemaining(e.target.value)}
              required
              className='border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500'
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
  );
}

export default SubmitProjectForm