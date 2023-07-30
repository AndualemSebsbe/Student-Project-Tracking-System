import { useEffect } from "react";
import { useSession,signOut } from "next-auth/react";
import { useRouter } from "next/router";


const useSignOut = () => {
    const {data: session, status} = useSession();
    const router = useRouter();
  
    useEffect(() => {
      if (!status && !session) {
        router.push("/");
      }
    }, [status, router, session]);
  
    const handleSignOut = async () => {
      await signOut();
      router.push("/");
    };
  
    return { handleSignOut };
  };
  export default useSignOut;