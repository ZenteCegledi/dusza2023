'use client';

import AddOrEditUser from '@/app/webmaster/utils/add-or-edit-user';
import { createUser } from '@/app/utils/fetchers/users';

export default function AddUser() {
  const handleSubmit = async ({
    name,
    username,
    password,
    role,
    grade,
    class: class_,
  }: // Dirty fix instead of using the User type
  {
    name: User['name'];
    username: User['username'];
    password: User['password'];
    role: Role;
    grade: Student['grade'];
    class: Student['class'];
  }) => {
    const user = await createUser({
      name,
      username,
      password,
      role,
      grade: role === 'student' ? grade : undefined,
      class: role === 'student' ? class_ : undefined,
    } as Student);

    if (!user) {
      alert('Hiba történt a felhasználó hozzáadása közben!');
      return;
    } else {
      alert('Sikeresen hozzáadtad a felhasználót!');
      return;
    }
  };

  return (
    <AddOrEditUser
      title='Felhasználó hozzáadása'
      button='Hozzáadás'
      user={{
        name: '',
        username: '',
        password: '',
        role: 'student' as Role,
        grade: 5,
        class: 'A',
      }}
      submit={handleSubmit}
    />
  );
}
