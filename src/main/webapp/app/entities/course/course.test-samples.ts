import dayjs from 'dayjs/esm';

import { ICourse, NewCourse } from './course.model';

export const sampleWithRequiredData: ICourse = {
  id: 32086,
  courseName: 'fast psst down',
  courseCode: 'that phooey sum',
  courseStartDate: dayjs('2024-05-17T03:53'),
  courseEndDate: dayjs('2024-05-16T19:56'),
  courseFormat: 'woozy bemoan',
  published: true,
  storageQuota: 13044,
  status: false,
};

export const sampleWithPartialData: ICourse = {
  id: 21065,
  courseName: 'milestone',
  courseCode: 'swing dull',
  courseStartDate: dayjs('2024-05-16T14:14'),
  courseEndDate: dayjs('2024-05-17T09:12'),
  courseFormat: 'than',
  published: true,
  storageQuota: 20618,
  status: true,
};

export const sampleWithFullData: ICourse = {
  id: 31598,
  courseName: 'order',
  courseCode: 'fooey',
  courseImagePath: 'violent arctic',
  courseStartDate: dayjs('2024-05-17T02:09'),
  courseEndDate: dayjs('2024-05-16T15:38'),
  courseFormat: 'till brr',
  published: true,
  selfEnrollment: false,
  selfEnrollmentCode: 'awkwardly which',
  storageQuota: 17929,
  status: true,
};

export const sampleWithNewData: NewCourse = {
  courseName: 'survey prime',
  courseCode: 'zowie aha insulate',
  courseStartDate: dayjs('2024-05-16T16:37'),
  courseEndDate: dayjs('2024-05-16T21:56'),
  courseFormat: 'down fortunately',
  published: false,
  storageQuota: 19435,
  status: true,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
