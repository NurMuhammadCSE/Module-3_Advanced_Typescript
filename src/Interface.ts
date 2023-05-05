type User = {
  name: string;
  age: number;
};

type extendedUser = User & {
    role: string;
}

interface IUser {
  name: string;
  age: number;
}

interface IExtendUser extends IUser {
  role: string;
}

const user:IExtendUser = {
    name: 'John',
    age: 20,
    role: 'admin'
}

console.log(user);

const userWithTypeAlias: User = {
  name: "string",
  age: 234,
};
userWithTypeAlias.age = 234;

const userWithTypeInterface: IUser = {
  name: "string",
  age: 234,
};

