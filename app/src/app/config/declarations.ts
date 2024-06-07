// _neu_generated_code__dont_modify_directly_
import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-showBookedByUsersComponent
import { showBookedByUsersComponent } from '../components/admin/showBookedByUsers.component';
//CORE_REFERENCE_IMPORT-bookEventWithPeopelsComponent
import { bookEventWithPeopelsComponent } from '../components/user/bookEventWithPeopels.component';
//CORE_REFERENCE_IMPORT-bookedEventsComponent
import { bookedEventsComponent } from '../components/user/bookedEvents.component';
//CORE_REFERENCE_IMPORT-updateEventComponent
import { updateEventComponent } from '../components/admin/updateEvent.component';
//CORE_REFERENCE_IMPORT-mainEventPageComponent
import { mainEventPageComponent } from '../components/user/mainEventPage.component';
//CORE_REFERENCE_IMPORT-createEventComponent
import { createEventComponent } from '../components/admin/createEvent.component';
//CORE_REFERENCE_IMPORT-adminhomeComponent
import { adminhomeComponent } from '../components/admin/adminhome.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/auth/login.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-showBookedByUsersComponent
  showBookedByUsersComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-bookEventWithPeopelsComponent
  bookEventWithPeopelsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-bookedEventsComponent
  bookedEventsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-updateEventComponent
  updateEventComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-mainEventPageComponent
  mainEventPageComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-createEventComponent
  createEventComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-adminhomeComponent
  adminhomeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
  loginComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'login', component: loginComponent },
  { path: 'admin', component: adminhomeComponent },
  { path: 'createevent', component: createEventComponent },
  { path: 'mainhome', component: mainEventPageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
