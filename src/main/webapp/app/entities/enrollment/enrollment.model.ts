import dayjs from 'dayjs/esm';
import { IUser } from 'app/entities/user/user.model';
import { ICourseSection } from 'app/entities/course-section/course-section.model';
import { ICourse } from 'app/entities/course/course.model';
import { EnrollmentStatusEnum } from 'app/entities/enumerations/enrollment-status-enum.model';

export interface IEnrollment {
  id: number;
  enrollmentStatus?: keyof typeof EnrollmentStatusEnum | null;
  lastActivityAt?: dayjs.Dayjs | null;
  enrollmentStartAt?: dayjs.Dayjs | null;
  enrollmentEndAt?: dayjs.Dayjs | null;
  user?: Pick<IUser, 'id'> | null;
  courseSection?: Pick<ICourseSection, 'id'> | null;
  course?: Pick<ICourse, 'id'> | null;
}

export type NewEnrollment = Omit<IEnrollment, 'id'> & { id: null };
