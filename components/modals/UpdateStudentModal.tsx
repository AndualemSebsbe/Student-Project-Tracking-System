import React, { useState, useEffect } from 'react'
import { FormData } from '../../types'
import { useRouter } from 'next/router'
import { FiSearch } from 'react-icons/fi'

interface UpdateStudentModalProps{
    showModal: boolean,
    setShowModal: (updateShowModal: boolean) => void,
    _id: string,
    fullName: string,
    password: string,
    username: string,
    email: string
}

function UpdateStudentModal({_id, fullName, password, username, email, showModal, setShowModal}: UpdateStudentModalProps) {
    const initialFormValues: FormData = {
        fullName: fullName, 
        email: email, 
        username: username, 
        password: password, 
        role: 'student',
        confirmPassword: ''
    }
    const [loading, setLoading] = useState(false)

    // useEffect(() => {

    // }, [loading])
    const [form, setForm] = useState<FormData>(initialFormValues)
    const [submitError, setSubmitError] = useState<string>('');
    const router = useRouter()


    // const [validationErrors, setValidationErrors] = useState<InputErrors[]>([])

    // const searchUserByUsername = async () => {
        
    //     const response = await fetch(`/api/fetchApis/users?username=${form.username}`);
    //     const data = await response.json();
        
    //     setLoading(true)
    // }
    // console.log(role)
    const validateData = (): boolean => {
        const err = []
        
        if (form.fullName?.length < 4) {
            err.push({ fullName: "Full name must be atleast 4 characters long" })
        }
        else if (form.fullName?.length > 30) {
            err.push({ fullName: "Full name should be less than 30 characters" })
        }
        else if (form.password?.length < 8) {
            err.push({ password: "Password should be atleast 8 characters long" })
        }
        else if (form.password !== form.confirmPassword) {
            err.push({ confirmPassword: "user id don't match" })
        }

        // setValidationErrors(err)

        if (err.length > 0) {
            return false
        }
        else {
            return true
        }
    }
    const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const isValid = validateData()

        if (isValid) {
            // sign up
            try {
                setLoading(true)
                const response = await fetch(`/api/updateApis/updateUserById?_id=${_id}`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(form),
                });

                if(response.ok){
                    console.log("Student Information Updated Successfully")
                    setSubmitError('')
                    router.push('/coordinator/dashboard')
                    // setForm(initialFormValues)
                }
                else{
                    const data = await response.json();
                    setSubmitError(data.error);
                    // console.log(data.error);
                }
            } catch (error) {
                console.error('An error occurred while updating the form:', error);
                setSubmitError('An error ocurred while updating the form');
            }

            setLoading(false)
        }
    }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto bg-white fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="relative p-6 flex-auto">
            <div className="flex flex-col justify-evenly bg-white px-7">
             
              <form
                className="text-secondary-text"
                encType="multipart/form-data"
                onSubmit={handleSignup}
                >
                <div className="mb-4">
                    <h1 className="text-xl text-center mb-1 text-primary-text">
                    Edit Student Information
                    </h1>
                  
                </div>
                    {/* <div className="flex mb-4">
                        <div>
                           
                            <div className="relative">
                                <input
                                    type="text"
                                    name='username'
                                    value={form.username}
                                    onChange={e => setForm({...form, username: e.target.value})}
                                    placeholder='search user by username'
                                    className="py-2 pl-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                                    required
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <FiSearch className="text-gray-500" />
                                </div>
                            </div>

                        </div>
                        <div className='mx-5 bg-blue-500 text-white rounded-lg py-2 px-5'>
                            <a href="#" onClick={searchUserByUsername} className='text-white pt-5'>search</a>
                        </div>
                    </div> */}

                    <div className="mb-4">
                        <label htmlFor="fullName" className="text-sm text-gray-700 font-semibold">
                        Full Name
                        </label>
                        <input
                        name="fullName"
                        className="text-sm  block border-secondary-text-100  rounded border-2 border-solid w-full p-1"
                        value={form.fullName}
                        onChange={e => setForm({...form, fullName: e.target.value})}
                        
                        required
                        />
                        
                    </div>
                    
                    <div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-sm text-gray-700 font-semibold">
                        Email
                        </label>
                        <input
                        name="email"
                        className="text-s block border-secondary-text-100  rounded border-2 border-solid w-full p-1"
                        value={form.email}
                        onChange={e => setForm({...form, email: e.target.value})}
                        required
                        />
                        <div className="text-red-400 text-sm py-1">
                        
                        </div>
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="username" className="text-sm text-gray-700 font-semibold">
                        Student ID
                        </label>
                        <input
                        name="username"
                        className="text-s block border-secondary-text-100  rounded border-2 border-solid w-full p-1"
                        value={form.username}
                        onChange={e => setForm({...form, username: e.target.value})}
                        required
                        />
                        <div className="text-red-400 text-sm py-1">
                        
                        </div>
                    </div>
                    <div className="flex gap-10">
                      <div className="mb-4">
                          <label htmlFor="password" className="text-sm text-gray-700 font-semibold">
                          Password
                          </label>
                          <input
                          name="password"
                          className="text-s block border-secondary-text-100  rounded border-2 border-solid w-full p-1"
                          value={form.password}
                          onChange={e => setForm({...form, password: e.target.value})}
                          required
                          />
                          <div className="text-red-400 text-sm py-1">
                          
                          </div>
                      </div>
                      <div className="mb-4">
                          <label htmlFor="confirmPassword" className="text-sm text-gray-700 font-semibold">
                          Confirm Password
                          </label>
                          <input
                          name="confirmPassword"
                          className="text-s block border-secondary-text-100  rounded border-2 border-solid w-full p-1"
                          value={form.confirmPassword}
                          onChange={e => setForm({...form, confirmPassword: e.target.value})}
                          required
                          />
                          <div className="text-red-400 text-sm py-1">
                          
                          </div>
                      </div>
                    </div>
                    </div>
                    
                    <div className="flex items-center justify-end gap-4 ">
                        {submitError && <p>{submitError}</p>}
                        <button
                        className="bg-blue-500 rounded text-white text-sm px-4 py-2 border-2 border-primary shadow hover:shadow-lg outline-none focus:outline-none"
                        type="submit"
                        >
                        Submit
                        </button>

                        <button
                        className="bg-red-500 font-bold px-4 py-2 text-sm border-2 rounded border-secondary-text "
                        type="button"
                        onClick={() => setShowModal(false)}
                        >
                        Cancel
                        </button>
                    </div>
                </form> 
            </div>
            
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default UpdateStudentModal