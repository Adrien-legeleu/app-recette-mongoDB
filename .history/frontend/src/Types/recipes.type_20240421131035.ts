export interface ITask {
    _id:string:
    description:string;
    title:string;
      status: 'in progress' | 'done';
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}