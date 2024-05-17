import { ICourseSection, NewCourseSection } from './course-section.model';

export const sampleWithRequiredData: ICourseSection = {
  id: 78,
  sectionName: 'alongside qua',
};

export const sampleWithPartialData: ICourseSection = {
  id: 28041,
  sectionName: 'organize vainly',
};

export const sampleWithFullData: ICourseSection = {
  id: 22440,
  sectionName: 'blah',
};

export const sampleWithNewData: NewCourseSection = {
  sectionName: 'beside interpose',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
