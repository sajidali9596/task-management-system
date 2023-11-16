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