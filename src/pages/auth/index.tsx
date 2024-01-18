import Head from 'next/head';
import api from '@/libs/axios';
import { useEffect } from 'react';

import Cookies from 'js-cookie';

import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { UserProps } from '@/utils/interfaces/user.interface';
import { useAuth } from '@/hooks/useAuth';

interface AuthProcessProps {
  user: UserProps;
  token: string;
}

export default function AuthProcess({ user, token }: AuthProcessProps) {
  const { setUser } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    setUser(user);
    Cookies.set('token', String(token));

    push('/dashboard');
  }, [user]);

  return (
    <>
      <Head>
        <title>Estamos preparando tudo para você | Studio Jul.IA</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { token } = query;

  let user: UserProps | null = null;

  if (token && token !== undefined) {
    if (query.verified !== 'false' || query.verified === undefined) {
      const { data } = await api.get('/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      user = data;
    }
  }

  return {
    props: {
      user,
      token,
    },
  };
};
