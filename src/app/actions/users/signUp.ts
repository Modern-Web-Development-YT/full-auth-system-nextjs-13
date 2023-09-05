'use server';

import prisma from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';

export const signUp = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (user) {
        return 'User with that email already exists.';
    }

    const passwordHash = bcrypt.hashSync(password, 10);

    await prisma.user.create({
        data: {
            email,
            passwordHash,
        },
    });

    return "Successfully created new user!";
};
