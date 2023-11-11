'use client';

import AddOrEditUser from '@/app/webmaster/utils/add-or-edit-user';
import { updateUser } from '@/app/utils/fetchers/users';
import { useUser } from '@/app/utils/hooks/users';

export default function EditUser() {
  const { user, isLoading, isError } = useUser(2);

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
    if (!user) return;

    await updateUser({
      id: user.id,
      name,
      username,
      password,
      role,
      grade: role === 'student' ? grade : undefined,
      class: role === 'student' ? class_ : undefined,
    } as Student);
  };

  if (isLoading) return <div>Betöltés...</div>;
  if (isError) return <div>Hiba történt a felhasználó betöltése közben.</div>;
  if (!user) return <div>Nincs ilyen azonosítójú felhasználó.</div>;

  return (
    <div>
      <AddOrEditUser
        title='Felhasználó szerkesztése'
        button='Mentés'
        user={{
          name: user?.name ?? '',
          username: user?.username ?? '',
          password: user?.password ?? '',
          role: user?.role ?? ('student' as Role),
          grade: (user as Student)?.grade ?? 5,
          class: (user as Student)?.class ?? 'A',
        }}
        submit={handleSubmit}
      />
    </div>
  );
}
