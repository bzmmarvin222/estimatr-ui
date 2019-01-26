import {UserType} from '../user.type';

export interface UserDto {
  sub: string;
  externalProfileId: string;
  displayName: string;
  userType: UserType;
}
