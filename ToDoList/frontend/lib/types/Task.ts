export type Task = {
    id: number;
    title: string;
    category: string;
    notes: string;
    attachment: File;
    createdAt: Date;
    status: boolean;
    dueDate: Date;
  }