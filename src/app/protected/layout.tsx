import { getServerSession } from 'next-auth/next';
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';

interface ProtectedLayoutProps {
    children: React.ReactNode | React.ReactNode[];
}

const ProtectedLayout = async ({children}: ProtectedLayoutProps) => {

    const session = await getServerSession(authOptions);

    if(!session || !session.user?.email) {
        return (
            <div>
                This is protected and you do not have access to it.
            </div>
        )
    }

  return (
    <>
        {children}
    </>
  );
}

export default ProtectedLayout