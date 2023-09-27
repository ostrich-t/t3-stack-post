import { type User } from "../User/User";

export class PostBase {
  constructor(
    public content: string,
    public user: User,
  ) {}
}

export class Post extends PostBase {
  public id: number;
  public totalComments: number;
  public totalLikes: number;
  public isLiked: boolean;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(props: {
    id: number;
    content: string;
    totalComments?: number;
    totalLikes?: number;
    isLiked?: boolean;
    user: User;
    createdAt: Date;
    updatedAt: Date;
  }) {
    super(props.content, props.user);
    this.id = props.id;
    this.totalComments = props.totalComments ?? 0;
    this.totalLikes = props.totalLikes ?? 0;
    this.isLiked = props.isLiked ?? false;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
