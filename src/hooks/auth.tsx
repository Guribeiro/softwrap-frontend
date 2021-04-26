import React, {
  createContext,
  useCallback,
  useState,
  useContext,
} from 'react';
import api from '../services/api';

interface IUser {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: IUser;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: IUser;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: IUser): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@softwrap:token');
    const user = localStorage.getItem('@softwrap:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { user, token } = response.data;

    localStorage.setItem('@softwrap:token', token);
    localStorage.setItem('@softwrap:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@softwrap:token');
    localStorage.removeItem('@softwrap:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: IUser) => {
      setData({
        token: data.token,
        user,
      });
      localStorage.setItem('@softwrap:user', JSON.stringify(user));
    },
    [data.token],
  );

  return (
    <AuthContext.Provider
      value={{
        user: data.user, signIn, signOut, updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth most be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
