import useSignOut from "./hooks/useSignOut";
const SignOutButton = () => {
  const { handleSignOut } = useSignOut();

  return (
    <button onClick={handleSignOut}>
      Logout
    </button>
  );
};
export default SignOutButton