import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {useHistory} from 'react-router-dom';

import {api} from '../services/api';

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthState {
  isLogged: boolean;
  firstName: string;
  lastName?: string;
  institution: string;
  phone: string;
  mobile: string;
  id: string;
  email: string;
}

interface AuthContextData {
  signOut(): Promise<void>;
  signIn(data: SignInCredentials): Promise<void>;
  clearSession: () => void;
  session: AuthState;

  loading: boolean;
}

interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: IAuthProviderProps): JSX.Element {
  const [session, setSession] = useState<AuthState>({
    isLogged: false,
    firstName: '',
    lastName: '',
    phone: '',
    mobile: '',
    institution: '',
    id: '',
    email: '',
  });

  const [loading, setLoading] = useState<boolean>(true);
  const history = useHistory();

  useEffect(() => {
    api
      .get('/lumis/api/rest/lumis/authentication/users/current', {
        withCredentials: true,
      })
      .then(response => {
        console.log(response.data);
        // if (response.data.login === 'guest') {
        //   setSession({
        //     isLogged: false,
        //     firstName: '',
        //     lastName: '',
        //     phone: '',
        //     mobile: '',
        //     institution: '',
        //     id: '',
        //     email: '',
        //   });
        //   setLoading(false);
        // } else {
        //   setSession({
        //     isLogged: true,
        //     firstName: response.data.firstName,
        //     lastName: response.data.lastName,
        //     phone: '',
        //     institution: '',
        //     mobile: '',
        //     id: response.data.id,
        //     email: response.data.login,
        //   });
        //   setLoading(false);
        // }
      })
      .catch(err => {
        return err;
      });
  }, []);

  const clearSession = useCallback(() => {
    setSession({
      firstName: '',
      lastName: '',
      phone: '',
      mobile: '',
      institution: '',
      id: '',
      email: '',
      isLogged: false,
    });
  }, []);

  const signIn = useCallback(async (data: SignInCredentials) => {
    try {
      console.log(data);
      const formData = new URLSearchParams();
      formData.append('username', data.username);
      formData.append('password', data.password);
      console.log('SALVE');
      console.log(formData);

      await api.post('/api/lol/v1/auth/login', formData);
      console.log('dadasdasd');
      // const response = await api.get(
      //   '/lumis/api/rest/lumis/authentication/users/current',
      //   {withCredentials: true},
      // );

      // setSession({
      //   isLogged: true,
      //   firstName: response.data.firstName,
      //   lastName: response.data.lastName,
      //   phone: '',
      //   institution: '',
      //   mobile: '',
      //   id: response.data.id,
      //   email: response.data.login,
      // });
    } catch (err) {
      setSession({
        isLogged: false,
        firstName: '',
        lastName: '',
        phone: '',
        institution: '',
        mobile: '',
        id: '',
        email: '',
      });
      setLoading(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      await api.post('/lumis/api/rest/lumlogout', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      console.log('executa?');

      setSession({
        firstName: '',
        lastName: '',
        phone: '',
        mobile: '',
        institution: '',
        id: '',
        email: '',
        isLogged: false,
      });
      // history.push('/login');
    } catch (err) {
      console.log(err);
    }
  }, [history]);

  return (
    <AuthContext.Provider
      value={{signOut, session, loading, signIn, clearSession}}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAuth = () => {
  return useContext(AuthContext);
};
