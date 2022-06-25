import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const User = () => {
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
      <div onClick={signOut} className="w-9 h-9 relative">
        <Image
          src={session.user.image}
          alt="User Account"
          layout="fill"
          className="rounded-full hover:bg-gray-200 cursor-pointer hover:!border-solid !border-blue-200"
        />
      </div>
    );
  }
};

export default User;
