import api from '@/libs/axios';
import { useRouter } from 'next/router';

import baseUrl from '@/utils/environment/base-url';
import { UserProps } from '@/utils/interfaces/user.interface';
import { Dispatch, ReactNode, createContext, useEffect, useState } from 'react';

import Cookies from 'js-cookie';
import { OrganizationProps } from '@/utils/interfaces/organization.interface';

interface AuthContextData {
  user: UserProps;
  hasLoadingUser: boolean;
  handleLogout: () => void;
  setUser: Dispatch<UserProps>;
  organization: OrganizationProps;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({} as UserProps);
  const [organization, setOrganization] = useState({} as OrganizationProps);
  const { pathname, push } = useRouter();

  const [hasLoadingUser, setHasLoadingUser] = useState(false);

  async function handleGetProfileInfo() {
    try {
      setHasLoadingUser(true);
      const { data } = await api.get('/auth/profile');

      setUser(data);
      setHasLoadingUser(false);

      await handleGetOrganization(data.lastOrganization);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleGetOrganization(organizationId: string) {
    try {
      const { data } = await api.get(`/organization/${organizationId}`);
      setOrganization(data);
    } catch (err) {
      console.log(err);
    }
  }

  function handleLogout() {
    const token = Cookies.get('token');
    Cookies.remove('token');

    push(`${baseUrl}/auth/logout?token=${token}`);
  }

  useEffect(() => {
    if (pathname !== '/' && pathname !== '/auth') {
      handleGetProfileInfo();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        organization,
        handleLogout,
        hasLoadingUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
