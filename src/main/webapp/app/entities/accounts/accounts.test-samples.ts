import { IAccounts, NewAccounts } from './accounts.model';

export const sampleWithRequiredData: IAccounts = {
  id: 21122,
  username: 'ha until',
  fullName: 'actually remit',
  sortableName: 'inside instantly now',
  phone: '1-557-900-4179 x33924',
  gender: 'wooden adolescent cheek',
  userType: 'TEACHER',
  userStatus: 'PENDING',
};

export const sampleWithPartialData: IAccounts = {
  id: 22593,
  username: 'after',
  fullName: 'admire over',
  sortableName: 'gosh welcome',
  phone: '1-924-791-8531 x0148',
  gender: 'bore oh when',
  userType: 'STUDENT',
  userStatus: 'BLOCKED',
};

export const sampleWithFullData: IAccounts = {
  id: 6547,
  username: 'uh-huh hop runny',
  fullName: 'valuable who remand',
  sortableName: 'pish makeup',
  avatarImageUrl: 'however that boycott',
  phone: '929-653-6558',
  locale: 'misbehave unwieldy',
  gender: 'instead woot yum',
  userType: 'STUDENT',
  userStatus: 'ACTIVE',
};

export const sampleWithNewData: NewAccounts = {
  username: 'undervalue',
  fullName: 'bah knowingly belch',
  sortableName: 'indeed tragic large',
  phone: '1-690-895-9261 x917',
  gender: 'portfolio pelt',
  userType: 'STUDENT',
  userStatus: 'PENDING',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
