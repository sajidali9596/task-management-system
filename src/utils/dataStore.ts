import { Group, User, Task, NewTask } from "./interfaces";

const groups: Group[] = [
  { id: "1700127265545", name: "Blue Beta" },
  { id: "1700127265546", name: "Blue Moon" },
  { id: "1700127265547", name: "Beta Sun" },
];

const users: User[] = [
  {
    name: "User1",
    email: "user1@email.com",
    id: "1700129211012",
    password: "user1pass",
    groupId: "1700127265545",
  },
  {
    name: "User2",
    email: "user2@email.com",
    id: "1700129211013",
    password: "user2pass",
    groupId: "1700127265545",
  },
  {
    name: "User3",
    email: "user3@email.com",
    id: "1700129211014",
    password: "user3pass",
    groupId: "1700127265545",
  },
  {
    name: "User4",
    email: "user4@email.com",
    id: "1700129211015",
    password: "user4pass",
    groupId: "1700127265546",
  },
  {
    name: "User5",
    email: "user5@email.com",
    id: "1700129211016",
    password: "user5pass",
    groupId: "1700127265546",
  },
  {
    name: "User6",
    email: "user6@email.com",
    id: "1700129211017",
    password: "user6pass",
    groupId: "1700127265546",
  },
  {
    name: "User7",
    email: "user7@email.com",
    id: "1700129211018",
    password: "user7pass",
    groupId: "1700127265547",
  },
  {
    name: "User8",
    email: "user8@email.com",
    id: "1700129211019",
    password: "user8pass",
    groupId: "1700127265547",
  },
  {
    name: "User9",
    email: "user9@email.com",
    id: "1700129211020",
    password: "user9pass",
    groupId: "1700127265547",
  },
];

const tasks: Task[] = [
  {
    id: "1",
    title: "Task 1",
    description: "Description 1",
    group: "1700127265545",
    userId: "1700129211012",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Description 2",
    group: "1700127265545",
    userId: "1700129211013",
    completed: true,
  },
  {
    id: "3",
    title: "Task 3",
    description: "Description 3",
    group: "1700127265546",
    userId: "1700129211014",
    completed: false,
  },
];

const dataStore = {
  getGroups: () => groups,
  getUsers: () => users,
  getTasks: () => tasks,
  setUser: (user: User) => users.push(user),
  addTask: (task: Task) => {
    tasks.push(task);
    return tasks;
  },
};

export default dataStore;
