import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

const SignInPage = ({ providers }) => {
  const providersValues = Object.values(providers);

  const handleSignIn = (providerId) => signIn(providerId, { callbackUrl: "/" });

  return (
    <div className="text-center h-full flex flex-col justify-center">
      {providersValues.map((provider) => (
        <div key={provider.id} className="-mt-20">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
            alt={`Image of ${provider.name}`}
            width="208"
            height="100"
            objectFit="contain"
          />
          <p className="text-sm italic my-10">
            This website is a clone for learning and practicing purpose
          </p>
          <button
            onClick={handleSignIn.bind(this, provider.id)}
            className="rounded-lg p-3 text-white bg-blue-500 hover:bg-blue-600">
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default SignInPage;
