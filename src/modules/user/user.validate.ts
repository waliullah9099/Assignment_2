import { z } from 'zod';

const UserFullNameValidationSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

// Define the schema for user's address
const UserAddressValidationSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

// Define the schema for the main user
const UsersValidationSchema = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: UserFullNameValidationSchema,
  age: z.number(),
  email: z.string().email({ message: 'invalid email' }),
  isActive: z.enum(['true', 'false']),
  hobbies: z.array(z.string()),
  address: UserAddressValidationSchema,
});

export default UsersValidationSchema;
