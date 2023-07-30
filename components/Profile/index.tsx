import React from 'react'
import Button from '../Button'
import {
    Container,
    UserEmail,
    UserName,
    Wrapper
} from './UserProfileElements'
import { useSession, signOut } from "next-auth/react";
import { useRouter } from 'next/router';

const UserProfile = () => {
    const { data: session }: any = useSession();
    const router = useRouter();
    return (
        <div>
            router.push('/');
        </div>
        // <Container>
        //     <Wrapper>
        //         {
        //             session &&
        //             <>

        //                 <UserName>
        //                     {
        //                         `Hello ${session?.user?.fullName}`
        //                     }
        //                 </UserName>
        //                 <UserEmail>
        //                     {session?.user?.email}
        //                 </UserEmail>

        //                 <Button
        //                     title="Logout"
        //                     onClick={signOut}
        //                 />
        //             </>
        //         }
        //     </Wrapper>
        // </Container>
    )
}

export default UserProfile