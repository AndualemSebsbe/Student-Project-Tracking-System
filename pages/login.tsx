import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { AxiosError } from 'axios'
import { AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai'
import { loginUser } from '../helpers'
// import AppLogoTitle from './AppLogoTitle'
import Button from '../components/Button'
import {
    Container,
    Form,
    FormTitle,
    InfoText,
    InfoTextContainer,
    Link
} from '../components/Form/FormElements'
import InputFeild from '../components/Form/InputFeild'
import { ErrorText } from '../components/Form/InputFeildElements'
import { AppProps } from 'next/app'
import { Provider } from 'react'
import User from '../models/user'
import { connectToMongoDB } from '../lib/mongodb'
// import { Session } from 'next-auth'

import { useSession } from 'next-auth/react'

// interface AppPropsWithRole extends AppProps {
//   session: useSeession & {
//     user: {
//       role: string;
//     };
//   };
// }

const LoginForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [submitError, setSubmitError] = useState("")
    const { data: session } = useSession();
    const router = useRouter()

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            setLoading(true)

            const loginRes = await loginUser({ username, password })

            if (loginRes && !loginRes.ok) {
                setSubmitError(loginRes.error || "")
            }
            else {
                // const role = loginRes?.role
                // console.log(loginRes)
                // console.log(role)

                const response = await fetch(`/api/fetchApis/users?username=${username}`);
                const data = await response.json();
                console.log(data)
                if(data.role === "student"){
                  router.push('/students/formGroup')
                }
                else if(data.role === "coordinator"){
                  router.push('coordinator/dashboard')
                }
                else if(data.role === "examiner"){
                    router.push('/examiners/dashboard')
                }
                else if(data.tole === "advisor"){
                    router.push('/advisors/dashboard')
                }
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                const errorMsg = error.response?.data?.error
                setSubmitError(errorMsg)
            }
        }

        setLoading(false)
    }

    return (
        <Container>
            {/* <AppLogoTitle /> */}
            <Form onSubmit={handleLogin}>
                <FormTitle> Login </FormTitle>

                <InputFeild
                    placeholder='Username'
                    type='text'
                    icon={<AiOutlineMail />}
                    value={username}
                    onChange={handleEmailChange}
                    required
                />

                <InputFeild
                    placeholder='Password'
                    type='password'
                    icon={<AiOutlineUnlock />}
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />

                <Link href="/forgot-password">
                    Forgot Password?
                </Link>

                <Button
                    type='submit'
                    title='Login'
                    disabled={loading}
                />

                {
                    submitError &&
                    <ErrorText>
                        {submitError}
                    </ErrorText>
                }

                <InfoTextContainer>
                    <InfoText>
                        New User?
                    </InfoText>

                    <Link href='/signup'>
                        Create an Account
                    </Link>
                </InfoTextContainer>
            </Form>
        </Container>
    )
}

export default LoginForm



// import React, { useState } from 'react'
// import { useRouter, usePathname } from 'next/navigation'
// import { BsPerson } from 'react-icons/bs'
// import { AiOutlineUnlock } from 'react-icons/ai'
// import Button from '../components/Button'
// import { signIn, signOut, useSession } from 'next-auth/react';

// import {
//     Container,
//     Form,
//     FormTitle,
//     InfoText,
//     InfoTextContainer,
//     Link
// } from '../components/Form/FormElements'
// import InputFeild from '../components/Form/InputFeild'
// import { ErrorText } from '../components/Form/InputFeildElements'

// const LoginForm = () => {
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")
//     const [loading, setLoading] = useState(false)
//     const [submitError, setSubmitError] = useState("")
//     const [user, setUser] = useState(null);
//     const router = useRouter()
//     const pathName = usePathname()

//     const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setUsername(event.target.value)
//     }

//     const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(event.target.value)
//     }

//     const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault()

//         const result = await signIn('credentials', {
//             username,
//             password,
//             redirect: false, // Prevent default redirection
//           });
      
//           if (result?.error) {
//             // Handle authentication error
//             console.log(result.error);
//           } else {
//             // Redirect to the user's page based on their role
//             const role = result?.user?.role;
            // switch (role) {
            //   case 'student':
            //     router.push('/students/formGroup');
            //     break;
            //   case 'coordinator':
            //     router.push('/coordinator/dashboard');
            //     break;
            //   case 'guest':
            //     router.push('/');
            //     break;
            //   case 'advisor':
            //     router.push('/advisor/dashboard');
            //     break;
            //   case 'examiner':
            //     router.push('/examiner/dashboard');
            //     break;
            //   default:
            //     router.push('/'); // Default redirect if role is not recognized
            //     break;
            // }
//           }

//         setLoading(false)
//     }

//     return (
//         <Container>
            
//             {/* <AppLogoTitle /> */}
//             <Form onSubmit={handleLogin} className="space-y-6 ">
//                 <FormTitle> Login </FormTitle>

//                 <InputFeild
//                     placeholder='Username'
//                     type='text'
//                     icon={<BsPerson />}
//                     value={username}
//                     onChange={handleUsernameChange}
//                     required
//                 />

//                 <InputFeild
//                     placeholder='password'
//                     type='password'
//                     icon={<AiOutlineUnlock />}
//                     value={password}
//                     onChange={handlePasswordChange}
//                     required
//                 />

//                 <Link href="/forgot-password">
//                     Forgot Password?
//                 </Link>

//                 <Button
//                     type='submit'
//                     title='Login'
//                     disabled={loading}
//                 />

//                 {
//                     submitError &&
//                     <ErrorText>
//                         {submitError}
//                     </ErrorText>
//                 }

//                 <InfoTextContainer>
//                     <InfoText>
//                         New User?
//                     </InfoText>

//                     <Link href='/signup'>
//                         Create an Account
//                     </Link>
//                 </InfoTextContainer>
//             </Form>
            
//         </Container>
//     )
// }

// export default LoginForm