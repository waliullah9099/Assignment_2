export type users = {
  userId: string;
  username: number;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: 'true' | 'false';
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
};
