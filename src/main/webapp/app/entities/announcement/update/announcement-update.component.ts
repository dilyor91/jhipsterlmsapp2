import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ICourseSection } from 'app/entities/course-section/course-section.model';
import { CourseSectionService } from 'app/entities/course-section/service/course-section.service';
import { IAnnouncement } from '../announcement.model';
import { AnnouncementService } from '../service/announcement.service';
import { AnnouncementFormService, AnnouncementFormGroup } from './announcement-form.service';

@Component({
  standalone: true,
  selector: 'jhi-announcement-update',
  templateUrl: './announcement-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class AnnouncementUpdateComponent implements OnInit {
  isSaving = false;
  announcement: IAnnouncement | null = null;

  courseSectionsSharedCollection: ICourseSection[] = [];

  protected announcementService = inject(AnnouncementService);
  protected announcementFormService = inject(AnnouncementFormService);
  protected courseSectionService = inject(CourseSectionService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: AnnouncementFormGroup = this.announcementFormService.createAnnouncementFormGroup();

  compareCourseSection = (o1: ICourseSection | null, o2: ICourseSection | null): boolean =>
    this.courseSectionService.compareCourseSection(o1, o2);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ announcement }) => {
      this.announcement = announcement;
      if (announcement) {
        this.updateForm(announcement);
      }

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const announcement = this.announcementFormService.getAnnouncement(this.editForm);
    if (announcement.id !== null) {
      this.subscribeToSaveResponse(this.announcementService.update(announcement));
    } else {
      this.subscribeToSaveResponse(this.announcementService.create(announcement));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IAnnouncement>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(announcement: IAnnouncement): void {
    this.announcement = announcement;
    this.announcementFormService.resetForm(this.editForm, announcement);

    this.courseSectionsSharedCollection = this.courseSectionService.addCourseSectionToCollectionIfMissing<ICourseSection>(
      this.courseSectionsSharedCollection,
      ...(announcement.announcements ?? []),
    );
  }

  protected loadRelationshipsOptions(): void {
    this.courseSectionService
      .query()
      .pipe(map((res: HttpResponse<ICourseSection[]>) => res.body ?? []))
      .pipe(
        map((courseSections: ICourseSection[]) =>
          this.courseSectionService.addCourseSectionToCollectionIfMissing<ICourseSection>(
            courseSections,
            ...(this.announcement?.announcements ?? []),
          ),
        ),
      )
      .subscribe((courseSections: ICourseSection[]) => (this.courseSectionsSharedCollection = courseSections));
  }
}
