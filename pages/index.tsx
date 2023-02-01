import Head from 'next/head'
import { useEffect } from 'react'
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import axios from 'axios'
import { AppDispatch } from '../src/store'
import { setUsername, setToken } from '@/features/auth/authSlice'
import { useRouter } from 'next/router'

export default function Home() {
  const usernameState: TypedUseSelectorHook<any> = useSelector((state: any) =>  state.auth.username);

  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');

    if(username && token){
      dispatch(setUsername(username));
      dispatch(setToken(token));
    } else {
      router.push('/login');
    }

    return () => {
      // nothing
    }
  }, [])

  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        {`${usernameState}`}
      </div>
    </>
  )
}
