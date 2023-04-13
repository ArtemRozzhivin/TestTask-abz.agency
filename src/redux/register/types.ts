export type userDataType = {
  name: string;
  email: string;
  phone: string;
  position_id: number;
  photo: File;
};

export interface registerSliceState {
  response: responseRegister;
  positions: usersPosition[];
}

export type responseRegister = {
  success: boolean | null;
  message: string;
};

export type usersPosition = {
  id: number;
  name: string;
};
