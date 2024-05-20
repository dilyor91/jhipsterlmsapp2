import { ICourseSection, NewCourseSection } from './course-section.model';

export const sampleWithRequiredData: ICourseSection = {
  id: 25542,
  sectionName: 'vanilla woot',
};

export const sampleWithPartialData: ICourseSection = {
  id: 16275,
  sectionName: 'port',
};

export const sampleWithFullData: ICourseSection = {
  id: 161,
  sectionName: 'advanced boo',
};

export const sampleWithNewData: NewCourseSection = {
  sectionName: 'old deem yuck',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
