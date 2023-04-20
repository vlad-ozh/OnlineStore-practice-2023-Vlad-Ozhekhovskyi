export interface IUserRegister {
  email: string;
  name: string;
  password: string;
};
export interface IUserRegisterConfirm {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};
export interface IUserLogin {
  email: string;
  password: string;
};
export interface IUser {
  email: string;
  name: string;
  id: string;
  isActivated: boolean;
  isAuth: boolean;
};
export interface IUserResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
