import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { IUser } from 'app/entities/user/user.model';
import { UserService } from 'app/entities/user/service/user.service';
import { ICourseSection } from 'app/entities/course-section/course-section.model';
import { CourseSectionService } from 'app/entities/course-section/service/course-section.service';
import { ICourse } from 'app/entities/course/course.model';
import { CourseService } from 'app/entities/course/service/course.service';
import { IEnrollment } from '../enrollment.model';
import { EnrollmentService } from '../service/enrollment.service';
import { EnrollmentFormService } from './enrollment-form.service';

import { EnrollmentUpdateComponent } from './enrollment-update.component';

describe('Enrollment Management Update Component', () => {
  let comp: EnrollmentUpdateComponent;
  let fixture: ComponentFixture<EnrollmentUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let enrollmentFormService: EnrollmentFormService;
  let enrollmentService: EnrollmentService;
  let userService: UserService;
  let courseSectionService: CourseSectionService;
  let courseService: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, EnrollmentUpdateComponent],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{}]),
          },
        },
      ],
    })
      .overrideTemplate(EnrollmentUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(EnrollmentUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    enrollmentFormService = TestBed.inject(EnrollmentFormService);
    enrollmentService = TestBed.inject(EnrollmentService);
    userService = TestBed.inject(UserService);
    courseSectionService = TestBed.inject(CourseSectionService);
    courseService = TestBed.inject(CourseService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call User query and add missing value', () => {
      const enrollment: IEnrollment = { id: 456 };
      const user: IUser = { id: 6587 };
      enrollment.user = user;

      const userCollection: IUser[] = [{ id: 2004 }];
      jest.spyOn(userService, 'query').mockReturnValue(of(new HttpResponse({ body: userCollection })));
      const additionalUsers = [user];
      const expectedCollection: IUser[] = [...additionalUsers, ...userCollection];
      jest.spyOn(userService, 'addUserToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ enrollment });
      comp.ngOnInit();

      expect(userService.query).toHaveBeenCalled();
      expect(userService.addUserToCollectionIfMissing).toHaveBeenCalledWith(
        userCollection,
        ...additionalUsers.map(expect.objectContaining),
      );
      expect(comp.usersSharedCollection).toEqual(expectedCollection);
    });

    it('Should call CourseSection query and add missing value', () => {
      const enrollment: IEnrollment = { id: 456 };
      const courseSection: ICourseSection = { id: 4397 };
      enrollment.courseSection = courseSection;

      const courseSectionCollection: ICourseSection[] = [{ id: 9864 }];
      jest.spyOn(courseSectionService, 'query').mockReturnValue(of(new HttpResponse({ body: courseSectionCollection })));
      const additionalCourseSections = [courseSection];
      const expectedCollection: ICourseSection[] = [...additionalCourseSections, ...courseSectionCollection];
      jest.spyOn(courseSectionService, 'addCourseSectionToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ enrollment });
      comp.ngOnInit();

      expect(courseSectionService.query).toHaveBeenCalled();
      expect(courseSectionService.addCourseSectionToCollectionIfMissing).toHaveBeenCalledWith(
        courseSectionCollection,
        ...additionalCourseSections.map(expect.objectContaining),
      );
      expect(comp.courseSectionsSharedCollection).toEqual(expectedCollection);
    });

    it('Should call Course query and add missing value', () => {
      const enrollment: IEnrollment = { id: 456 };
      const course: ICourse = { id: 25431 };
      enrollment.course = course;

      const courseCollection: ICourse[] = [{ id: 29135 }];
      jest.spyOn(courseService, 'query').mockReturnValue(of(new HttpResponse({ body: courseCollection })));
      const additionalCourses = [course];
      const expectedCollection: ICourse[] = [...additionalCourses, ...courseCollection];
      jest.spyOn(courseService, 'addCourseToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ enrollment });
      comp.ngOnInit();

      expect(courseService.query).toHaveBeenCalled();
      expect(courseService.addCourseToCollectionIfMissing).toHaveBeenCalledWith(
        courseCollection,
        ...additionalCourses.map(expect.objectContaining),
      );
      expect(comp.coursesSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const enrollment: IEnrollment = { id: 456 };
      const user: IUser = { id: 14504 };
      enrollment.user = user;
      const courseSection: ICourseSection = { id: 24850 };
      enrollment.courseSection = courseSection;
      const course: ICourse = { id: 10689 };
      enrollment.course = course;

      activatedRoute.data = of({ enrollment });
      comp.ngOnInit();

      expect(comp.usersSharedCollection).toContain(user);
      expect(comp.courseSectionsSharedCollection).toContain(courseSection);
      expect(comp.coursesSharedCollection).toContain(course);
      expect(comp.enrollment).toEqual(enrollment);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IEnrollment>>();
      const enrollment = { id: 123 };
      jest.spyOn(enrollmentFormService, 'getEnrollment').mockReturnValue(enrollment);
      jest.spyOn(enrollmentService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ enrollment });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: enrollment }));
      saveSubject.complete();

      // THEN
      expect(enrollmentFormService.getEnrollment).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(enrollmentService.update).toHaveBeenCalledWith(expect.objectContaining(enrollment));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IEnrollment>>();
      const enrollment = { id: 123 };
      jest.spyOn(enrollmentFormService, 'getEnrollment').mockReturnValue({ id: null });
      jest.spyOn(enrollmentService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ enrollment: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: enrollment }));
      saveSubject.complete();

      // THEN
      expect(enrollmentFormService.getEnrollment).toHaveBeenCalled();
      expect(enrollmentService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IEnrollment>>();
      const enrollment = { id: 123 };
      jest.spyOn(enrollmentService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ enrollment });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(enrollmentService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Compare relationships', () => {
    describe('compareUser', () => {
      it('Should forward to userService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(userService, 'compareUser');
        comp.compareUser(entity, entity2);
        expect(userService.compareUser).toHaveBeenCalledWith(entity, entity2);
      });
    });

    describe('compareCourseSection', () => {
      it('Should forward to courseSectionService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(courseSectionService, 'compareCourseSection');
        comp.compareCourseSection(entity, entity2);
        expect(courseSectionService.compareCourseSection).toHaveBeenCalledWith(entity, entity2);
      });
    });

    describe('compareCourse', () => {
      it('Should forward to courseService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(courseService, 'compareCourse');
        comp.compareCourse(entity, entity2);
        expect(courseService.compareCourse).toHaveBeenCalledWith(entity, entity2);
      });
    });
  });
});
