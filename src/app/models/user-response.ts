export interface UserResponse {
  message: string;
  isSuccess: boolean;
  errors?: any;
  expireDate: Date;
}
