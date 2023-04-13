export interface UsersState {
  users: UserType[];
  totalPages: number | null;
  totalUsers: number | null;
  page: number;
  isHaveUsers: boolean;
}

export interface UserType {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: string;
  registration_timastamp: number;
  photo: string;
}

export interface fetchAsyncUsersTypeReturn {
  users: UserType[];
  totalPages: number;
  totalUsers: number;
}
