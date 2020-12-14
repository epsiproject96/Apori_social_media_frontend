import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'

type User = null | {username: string}
export const AuthContext = React.createContext<{
    user: User,
    login: () => void,
    logout: () => void
}>({
    user: null,
    login: () => {},
    logout: () => {} 
});

interface AuthProviderProps {

}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<User>(null);
    return (
      <AuthContext.Provider
        value={{
          user,
          login: () => {
            console.log('test');
            const fakeUser = {username: 'bob'};
            setUser(fakeUser);
            AsyncStorage.setItem('user', JSON.stringify(fakeUser))
            console.log(AsyncStorage.getItem('user'));
          },
          logout: () => {
            setUser(null);
            AsyncStorage.removeItem('user');
          },
        }}>
        {children}
      </AuthContext.Provider>
    );
}