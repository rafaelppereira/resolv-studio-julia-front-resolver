import baseUrl from '@/utils/environment/base-url';
import { GetServerSideProps } from 'next';

export default function Studio() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: `${baseUrl}/auth/login`,
      permanent: true,
    },
  };
};
