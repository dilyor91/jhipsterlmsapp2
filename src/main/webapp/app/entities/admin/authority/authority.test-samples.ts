import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '480a0a1f-c8bf-4205-9110-8ef0b59f890f',
};

export const sampleWithPartialData: IAuthority = {
  name: '57ff725b-79f0-40a7-bf88-4c0518c27c8a',
};

export const sampleWithFullData: IAuthority = {
  name: 'b3deb392-af3a-45f1-9ecf-c09d7035662e',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
