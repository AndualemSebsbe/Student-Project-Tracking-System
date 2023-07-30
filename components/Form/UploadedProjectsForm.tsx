'use client'
import React from 'react'
import { ProjectDocument } from '../../models/projects'
import {useState, useEffect} from 'react'
import axios from 'axios'
import clsx from 'clsx'



 const UploadedProjects: React.FC = () => {
  
  const [projects, setProjects] = useState<ProjectDocument[]>([]);
  
    useEffect(() => {
      const fetchProjects = async () => {
        try {
          const response = await axios.get('/api/projects');
          setProjects(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchProjects();
    }, [])
  
  
    return (
      <div>
      <ul
        className="grid grid-cols-6 ml-5 mr-12 gap-y-9"
      >
        {projects.map((link, index) => {
          return (
            <li key={index} className={clsx("col-span-2 shadow-lg pb-5 mb-5 gap-x-4 ml-8 w-88 font-serif")}>
              <div
                // onClick={showNav}
                className={
                  clsx()
                  // router.pathname == link.href && 'text-primary', 'text-black no-underline',
                }
              >
                {/* {link.image} */}
                <img
                  src={`/uploads/${link.image}`}
                  alt="image"
                  width="380"
                  height="300"
                  className="p-2"
                />

                <div className="font-semibold text-xl pl-5 pt-5">
                  {link.projectTitle}
                </div>
                <div className="text-sm text-gray-500 pl-5">{link.academicYear}</div>

                <div>
                    <div>
                      <div className="text-sm text-gray-500 pl-5 pt-5 pb-3">
                        {link.description}
                      </div>

                        {link.pdf && (
                          <a
                            href={`/uploads/${link.pdf}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline block mt-2 ml-5"
                          >
                            View Documentation
                          </a>
                        )}
                     
                    </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
    )
}

export default UploadedProjects
