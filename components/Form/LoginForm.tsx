// import React, { useState } from 'react'
// import { useRouter, usePathname } from 'next/navigation'
// import { BsPerson } from 'react-icons/bs'
// import { AiOutlineUnlock } from 'react-icons/ai'
// import Button from '../Button'
// import { signIn } from 'next-auth/react';

// import {
//     Container,
//     Form,
//     FormTitle,
//     InfoText,
//     InfoTextContainer,
//     Link
// } from './FormElements'
// import InputFeild from './InputFeild'
// import { ErrorText } from './InputFeildElements'

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
//             switch (role) {
//               case 'student':
//                 router.push('/students/formGroup');
//                 break;
//               case 'coordinator':
//                 router.push('/coordinator/dashboard');
//                 break;
//               case 'guest':
//                 router.push('/');
//                 break;
//               case 'advisor':
//                 router.push('/advisors/dashboard');
//                 break;
//               case 'examiner':
//                 router.push('/examiners/dashboard');
//                 break;
//               default:
//                 router.push('/'); // Default redirect if role is not recognized
//                 break;
//             }
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