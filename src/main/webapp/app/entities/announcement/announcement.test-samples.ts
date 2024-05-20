import dayjs from 'dayjs/esm';

import { IAnnouncement, NewAnnouncement } from './announcement.model';

export const sampleWithRequiredData: IAnnouncement = {
  id: 17123,
  title: 'meanwhile bright',
  content: 'gadzooks boomerang like',
};

export const sampleWithPartialData: IAnnouncement = {
  id: 28287,
  title: 'pish',
  content: 'boomerang unless',
  published: false,
};

export const sampleWithFullData: IAnnouncement = {
  id: 29952,
  title: 'conk aggravating',
  content: 'lands cuff',
  attachmentId: 9445,
  delayPost: false,
  postAt: dayjs('2024-05-20T04:29'),
  published: false,
};

export const sampleWithNewData: NewAnnouncement = {
  title: 'duh stopper energetically',
  content: 'eek angrily minus',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
