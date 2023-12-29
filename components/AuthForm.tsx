'use client';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import axios from 'axios';
import Input from '@/components/Input';
function AuthForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => (currentVariant === 'login' ? 'register' : 'login'));
  }, []);
  const handleLogin = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/profiles',
      }).catch((error) => {
        console.log('error in signin :>> ', error);
      });

      // router.push('/');
    } catch (error) {
      console.log('error :>> ', error);
    }
  }, [email, password]);

  const handleRegister = useCallback(async () => {
    try {
      await axios
        .post('/api/register', {
          email,
          name,
          password,
        })
        .then((rs) => {
          console.log('data :>> ', rs.data);
        });
    } catch (error) {
      console.log('error :>> ', error);
    }
  }, [email, name, password, handleLogin]);

  return (
    <div className="bg-black bg-opacity-70 px-[5%] md:px-16 md:py-16 self-center mt-2 lg:w-2/5 w-full lg:max-w-md rounded-md ">
      <h2 className="h2 text-white">{variant === 'login' ? 'Sign In' : 'Create an account'}</h2>
      <div className="flex flex-col gap-y-4">
        {variant === 'register' && (
          <Input
            id={'username'}
            onChange={(e: any) => {
              setName(e.target.value);
            }}
            label="User name"
            value={name}
          />
        )}
        <Input
          id={'email'}
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
          label="Email or phone nubmer"
          type={'email'}
          value={email}
        />
        <Input
          id={'password'}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
          label="Password"
          type={'password'}
          value={password}
        />
        <button
          onClick={variant === 'login' ? handleLogin : handleRegister}
          className="bg-accent text-white rounded-[4px] mt-6 w-full h-12 font-medium"
        >
          {variant === 'login' ? 'Login' : 'Sign Up'}
        </button>
        <div className="flex flex-row items-center gap-4 mt-8 justify-center">
          <div
            className="w-10 h-10 bg-white rounded-full flex justify-center 
                items-center cursor-pointer hover:opacity-80 transition-all duration-150"
            onClick={() => signIn('google', { callbackUrl: '/profiles' })}
          >
            <FcGoogle size={30} />
          </div>
          <div
            className="w-10 h-10 bg-white rounded-full flex justify-center 
                items-center cursor-pointer hover:opacity-80 transition-all duration-150"
            onClick={() => signIn('github', { callbackUrl: '/profiles' })}
          >
            <FaGithub size={30} />
          </div>
        </div>
        <div className="text-[#737373] mt-6">
          {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
          <span onClick={toggleVariant} className="text-white ml-2 hover:underline cursor-pointer">
            {variant === 'login' ? 'Create an account' : 'Login'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
