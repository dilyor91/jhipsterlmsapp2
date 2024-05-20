import dayjs from 'dayjs/esm';
import { ICourseSection } from 'app/entities/course-section/course-section.model';

export interface IAnnouncement {
  id: number;
  title?: string | null;
  content?: string | null;
  attachmentId?: number | null;
  delayPost?: boolean | null;
  postAt?: dayjs.Dayjs | null;
  published?: boolean | null;
  announcements?: Pick<ICourseSection, 'id'>[] | null;
}

export type NewAnnouncement = Omit<IAnnouncement, 'id'> & { id: null };
