import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

export const usersRoutes = [
  { path: '', component: UserListComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
];

