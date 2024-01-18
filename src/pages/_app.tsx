import axios from 'axios';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/contexts/AuthContext';
import { Plus_Jakarta_Sans } from 'next/font/google';

import Cookies from 'js-cookie';
import { Toaster } from 'react-hot-toast';
import baseUrl from '@/utils/environment/base-url';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export default function App({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = baseUrl;
  axios.defaults.headers.common['Authorization'] = String(
    `Bearer ${Cookies.get('token')}`
  );

  return (
    <main className={plusJakartaSans.className}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>

      <Toaster position="top-right" reverseOrder={false} />
    </main>
  );
}
