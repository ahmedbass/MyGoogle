import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const User = (props) => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <button
        onClick={signIn}
        className="bg-blue-500 text-white px-4 py-1 rounded-md font-medium whitespace-nowrap 
          text-sm sm:text-base hover:brightness-110 hover:shadow-md">
        Sign in
      </button>
    );
  } else {
    return (
      <div onClick={signOut}>
        <Image
          src={session.user.image}
          alt="User Account"
          width={35}
          height={35}
          className="h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer"
        />
      </div>
    );
  }
};

export default User;
