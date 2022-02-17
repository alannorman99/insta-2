import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'

//running on browser
function signIn({ providers }: any) {
  return (
    <>
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <button onClick={() => SignIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

//running on middle server (server side render)
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}

export default signIn
