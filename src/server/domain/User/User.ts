export interface SessionUser {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export class User {
  public id: string;
  public name?: string;
  public image?: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(props: {
    id: string;
    name: string;
    image: string;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this.id = props.id;
    this.name = props.name;
    this.image = props.image;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
