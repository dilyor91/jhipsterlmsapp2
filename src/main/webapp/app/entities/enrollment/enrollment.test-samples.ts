import dayjs from 'dayjs/esm';

import { IEnrollment, NewEnrollment } from './enrollment.model';

export const sampleWithRequiredData: IEnrollment = {
  id: 7002,
  enrollmentStatus: 'ACTIVE',
};

export const sampleWithPartialData: IEnrollment = {
  id: 12520,
  enrollmentStatus: 'ACTIVE',
  lastActivityAt: dayjs('2024-05-16T13:34'),
  enrollmentStartAt: dayjs('2024-05-17T00:27'),
  enrollmentEndAt: dayjs('2024-05-17T06:03'),
};

export const sampleWithFullData: IEnrollment = {
  id: 2835,
  enrollmentStatus: 'PENDING',
  lastActivityAt: dayjs('2024-05-17T01:30'),
  enrollmentStartAt: dayjs('2024-05-16T11:52'),
  enrollmentEndAt: dayjs('2024-05-16T15:28'),
};

export const sampleWithNewData: NewEnrollment = {
  enrollmentStatus: 'ACTIVE',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
