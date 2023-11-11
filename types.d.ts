type Settings = {
  name: string;
  description: string;
  icon: string;
};

enum Role {
  STUDENT = 'student',
  TEACHER = 'teacher',
  JURY = 'jury',
}

type User = {
  id: int;
  name: string;
  username: string;
  password?: string;
} & (
  | {
      role: Role.STUDENT;
      grade: number;
      class: string;
      team?: Team['id'];
    }
  | {
      role: Role.TEACHER;
    }
  | {
      role: Role.JURY;
    }
);

type Student = Extract<User, { role: Role.STUDENT }>;
type Teacher = Extract<User, { role: Role.TEACHER }>;
type Jury = Extract<User, { role: Role.JURY }>;

type Team = {
  id: int;
  name: string;
  description: string;
};

type Grades = 5 | 6 | 7 | 8;

type Task = {
  id: int;
  words: string[];
  grade: Grades;
};

type TaskList = {
  id: int;
  name: string;
  tasks: Task['id'][];
};

type Competition = {
  id: int;
  name: string;
  description: string;
  grade: Grades;
  start: Date;
  end: Date;
  tasklist: TaskList['id'];
  teams: Team['id'][];
};
