import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 24312,
  login: 'H&@9k\\^Nl\\dM\\C1w\\.jOdZ',
};

export const sampleWithPartialData: IUser = {
  id: 14042,
  login: 'YEYaBU',
};

export const sampleWithFullData: IUser = {
  id: 2766,
  login: 'mYWr-',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
