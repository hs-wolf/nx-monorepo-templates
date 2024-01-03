export class User {
  constructor(
    public id: string,
    public username: string,
    public creationDate: Date,
    public lastUpdateDate: Date
  ) { }

  static fromMap(map: Record<string, unknown>) {
    return !map
      ? null
      : new User(
        map.id as string,
        map.username as string,
        new Date(map.creationDate as Date),
        new Date(map.lastUpdateDate as Date)
      );
  }

  toMap(): Omit<User, 'toMap'> {
    return {
      id: this.id,
      username: this.username,
      creationDate: this.creationDate,
      lastUpdateDate: this.lastUpdateDate
    };
  }
}

export type UserCreateParams = Pick<User, 'id' | 'username' | 'creationDate' | 'lastUpdateDate'>;

export type UserUpdateParams = Pick<User, 'username' | 'lastUpdateDate'>;
