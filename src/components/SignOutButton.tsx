'use client';

import { FC, useState } from 'react';
import { Button } from './ui/Button';
import { signOut } from 'next-auth/react';

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setisLoading] = useState<boolean>(false);

  const signUserOut = async () => {
    setisLoading(true);

    try {
      await signOut();
    } catch (error) {
      /* toast({
        title: 'Error signing out',
        messade: 'Please try again later',
        type: 'error',
      }); */
      console.log(error);
    }
  };

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign out
    </Button>
  );
};

export default SignOutButton;
