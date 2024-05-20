import { IAccounts, NewAccounts } from './accounts.model';

export const sampleWithRequiredData: IAccounts = {
  id: 14959,
  username: 'buckwheat ah',
  fullName: 'rowboat',
  sortableName: 'while',
  phone: '361.527.6806',
  gender: 'cheer silent',
  userType: 'TEACHER',
  userStatus: 'PENDING',
};

export const sampleWithPartialData: IAccounts = {
  id: 16684,
  username: 'beneath soulful',
  fullName: 'worth when since',
  sortableName: 'lest',
  avatarImageUrl: 'gadzooks an weak',
  phone: '510.388.5072',
  gender: 'bah',
  userType: 'STUDENT',
  userStatus: 'BLOCKED',
};

export const sampleWithFullData: IAccounts = {
  id: 27168,
  username: 'ha update',
  fullName: 'than',
  sortableName: 'greedily ouch lunge',
  avatarImageUrl: 'quarrelsomely into walker',
  phone: '700.353.9655 x4268',
  locale: 'indelible soupy',
  gender: 'beside',
  userType: 'STUDENT',
  userStatus: 'PENDING',
};

export const sampleWithNewData: NewAccounts = {
  username: 'until praises urgently',
  fullName: 'rural extent light',
  sortableName: 'from hence correspondence',
  phone: '1-734-882-9923 x37191',
  gender: 'since unlike wetly',
  userType: 'STUDENT',
  userStatus: 'BLOCKED',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
