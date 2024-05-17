import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'jhipsterApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'course',
    data: { pageTitle: 'jhipsterApp.course.home.title' },
    loadChildren: () => import('./course/course.routes'),
  },
  {
    path: 'course-section',
    data: { pageTitle: 'jhipsterApp.courseSection.home.title' },
    loadChildren: () => import('./course-section/course-section.routes'),
  },
  {
    path: 'accounts',
    data: { pageTitle: 'jhipsterApp.accounts.home.title' },
    loadChildren: () => import('./accounts/accounts.routes'),
  },
  {
    path: 'enrollment',
    data: { pageTitle: 'jhipsterApp.enrollment.home.title' },
    loadChildren: () => import('./enrollment/enrollment.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
