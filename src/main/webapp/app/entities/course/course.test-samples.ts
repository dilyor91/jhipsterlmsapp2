import dayjs from 'dayjs/esm';

import { ICourse, NewCourse } from './course.model';

export const sampleWithRequiredData: ICourse = {
  id: 32297,
  courseName: 'boohoo defiant unexpectedly',
  courseCode: 'whether',
  courseStartDate: dayjs('2024-05-16T22:38'),
  courseEndDate: dayjs('2024-05-16T23:22'),
  courseFormat: 'grumpy failing phony',
  published: true,
  storageQuota: 5917,
  status: false,
};

export const sampleWithPartialData: ICourse = {
  id: 5289,
  courseName: 'user',
  courseCode: 'broadly',
  courseStartDate: dayjs('2024-05-17T08:03'),
  courseEndDate: dayjs('2024-05-16T16:22'),
  courseFormat: 'palatable soon yesterday',
  published: false,
  selfEnrollmentCode: 'shortwave midst decide',
  storageQuota: 26234,
  status: false,
};

export const sampleWithFullData: ICourse = {
  id: 24655,
  courseName: 'scrip',
  courseCode: 'meaningfully kissingly',
  courseImagePath: 'apropos pastel enthusiastically',
  courseStartDate: dayjs('2024-05-17T03:26'),
  courseEndDate: dayjs('2024-05-16T16:56'),
  courseFormat: 'kiddingly',
  published: true,
  selfEnrollment: false,
  selfEnrollmentCode: 'instead solidly',
  storageQuota: 17675,
  status: true,
};

export const sampleWithNewData: NewCourse = {
  courseName: 'keenly kindly',
  courseCode: 'cease ugh',
  courseStartDate: dayjs('2024-05-16T09:41'),
  courseEndDate: dayjs('2024-05-16T20:33'),
  courseFormat: 'unnecessarily drat',
  published: false,
  storageQuota: 3222,
  status: true,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
