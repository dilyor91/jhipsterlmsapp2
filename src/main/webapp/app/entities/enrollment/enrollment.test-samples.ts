import dayjs from 'dayjs/esm';

import { IEnrollment, NewEnrollment } from './enrollment.model';

export const sampleWithRequiredData: IEnrollment = {
  id: 22787,
  enrollmentStatus: 'REJECTED',
};

export const sampleWithPartialData: IEnrollment = {
  id: 11482,
  enrollmentStatus: 'ACTIVE',
};

export const sampleWithFullData: IEnrollment = {
  id: 15953,
  enrollmentStatus: 'REJECTED',
  lastActivityAt: dayjs('2024-05-17T01:06'),
  enrollmentStartAt: dayjs('2024-05-17T01:57'),
  enrollmentEndAt: dayjs('2024-05-16T14:27'),
};

export const sampleWithNewData: NewEnrollment = {
  enrollmentStatus: 'PENDING',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
