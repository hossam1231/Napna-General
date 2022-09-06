import React from 'react';
import UserStack from './userStack';
import AuthStack from './authStack';
import { useAuthentication } from '../utils/hooks/useAuthentication';

export default function RootNavigation() {
const user = useAuthentication()

  return user ?
      <UserStack user={user} />
    : <AuthStack />;
}