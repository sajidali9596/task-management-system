export interface Task {
  id: string;
  title: string;
  description: string;
  group: string;
  userId: string;
  completed: boolean;
}

export interface NewTask {
  title: string;
  description: string;
}

export interface Group {
  id: string;
  name: string;
}

export interface User {
  name: string;
  email: string;
  id: string;
  password: string;
  groupId: string;
}

export interface SuccessResponse {
  message: string;
  data: Task | Task[];
}

export type Response = {
  code?: number;
  message: string;
};
