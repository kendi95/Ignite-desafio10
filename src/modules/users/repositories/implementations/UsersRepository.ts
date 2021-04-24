import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User();

    Object.assign(user, {
      name,
      email,
    });

    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    const user = this.users.find((findedUser) => findedUser.id === id);

    if (!user) {
      return null;
    }

    return user;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const user = this.users.find((findedUser) => findedUser.email === email);

    if (!user) {
      return null;
    }

    return user;
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    const userIndex = this.users.findIndex(
      (findedUser) => findedUser === receivedUser
    );

    this.users[userIndex].admin = true;
    this.users[userIndex].updated_at = new Date();

    return this.users[userIndex];
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
