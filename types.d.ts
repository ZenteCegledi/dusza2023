type Settings = {
  name: string;
  slogan: string;
  icon: string;
};

type Intro = {
  title: string;
  description: string;
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

type Grade = 5 | 6 | 7 | 8;

type Task = {
  id: int;
  words: string[];
  grade: Grade;
  creatorTeacher: Teacher['id'];
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
  start: Date;
  end: Date;
  tasklist: TaskList['id'];
  teams: Team['id'][];
};

type SubmitResult = {
  id: int;
  competition: Competition['id'];
  solutions: string[];
  correctNumber: number;
  wrongNumber: number;
  team: Team['id'];
  date: Date;
}

type SubmitInput = {
  competition: Competition['id'];
  solutions: string[];
}
