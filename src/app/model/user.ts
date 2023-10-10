export interface User {
  $key?: string;
  name: string;
  email: string;
  password: string;
  bloodType: string;
  weight: string;
  birthday: string;
  lastDonation: string;
  address?: string;
  stateId?: string;
  cityId?: string;
}
