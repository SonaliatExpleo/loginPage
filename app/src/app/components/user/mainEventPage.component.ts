// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { bookedEventsComponent } from 'app/components/user/bookedEvents.component'; //_splitter_
import { bookEventWithPeopelsComponent } from 'app/components/user/bookEventWithPeopels.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-mainEventPage',
  templateUrl: './mainEventPage.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class mainEventPageComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_wkAENryNoqul8Cob(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_wkAENryNoqul8Cob(bh) {
    try {
      bh = this.sd_LXKiOmM2HgP0oUEI(bh);
      //appendnew_next_sd_wkAENryNoqul8Cob
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wkAENryNoqul8Cob');
    }
  }

  signout(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_ip8ixQsXF31mQfWx(bh);
      //appendnew_next_signout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OVc2avPpYHGYvRvS');
    }
  }

  bookticket(bookticketValue: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { bookticketValue };
      bh.local = {};
      bh = this.sd_SD1AOe3rDcbTOeJH(bh);
      //appendnew_next_bookticket
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CqnrVhaBfsUHnJ75');
    }
  }

  search(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_5YFi9d1P24DxA0KE(bh);
      //appendnew_next_search
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6T5N0qZs5aoHJ6bu');
    }
  }

  getBookedevents(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_w21oEOf7ryvTT1EK(bh);
      //appendnew_next_getBookedevents
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_maqcpW69zaPrsJQu');
    }
  }
  //appendnew_flow_mainEventPageComponent_start

  sd_LXKiOmM2HgP0oUEI(bh) {
    try {
      bh = this.sd_yEUpysnnG94STmFA(bh);
      //appendnew_next_sd_LXKiOmM2HgP0oUEI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LXKiOmM2HgP0oUEI');
    }
  }

  sd_yEUpysnnG94STmFA(bh) {
    try {
      const page = this.page;
      console.log(localStorage.getItem('admin'));
      page.events = [];
      page.search = undefined;

      let adminData = JSON.parse(localStorage.getItem('admin'));

      if (Array.isArray(adminData)) {
        adminData.forEach((adminItem) => {
          if (adminItem.events && Array.isArray(adminItem.events)) {
            page.events.push(...adminItem.events);
          }
        });
      }

      page.visitorUser = JSON.parse(localStorage.getItem('visitorUser'));

      console.log(page.visitorUser);

      //appendnew_next_sd_yEUpysnnG94STmFA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yEUpysnnG94STmFA');
    }
  }

  sd_ip8ixQsXF31mQfWx(bh) {
    try {
      const page = this.page;
      localStorage.removeItem('visitorUser');

      console.log(localStorage.getItem('visitorUser'));

      bh = this.sd_foevTdZMWQKnTL53(bh);
      //appendnew_next_sd_ip8ixQsXF31mQfWx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ip8ixQsXF31mQfWx');
    }
  }

  async sd_foevTdZMWQKnTL53(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_foevTdZMWQKnTL53
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_foevTdZMWQKnTL53');
    }
  }

  sd_SD1AOe3rDcbTOeJH(bh) {
    try {
      const bookEventWithPeopelsDialog = this.__page_injector__.get(MatDialog);
      const bookEventWithPeopelsDialogRef = bookEventWithPeopelsDialog.open(
        bookEventWithPeopelsComponent,
        { data: bh.input.bookticketValue }
      );
      bookEventWithPeopelsDialogRef.beforeClosed().subscribe((event) => {
        this.sd_yEUpysnnG94STmFA(bh);
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SD1AOe3rDcbTOeJH');
    }
  }

  sd_5YFi9d1P24DxA0KE(bh) {
    try {
      const page = this.page;
      page.events = [];

      let adminData = JSON.parse(localStorage.getItem('admin'));

      if (Array.isArray(adminData)) {
        adminData.forEach((adminItem) => {
          if (adminItem.events && Array.isArray(adminItem.events)) {
            page.events.push(...adminItem.events);
          }
        });
      }

      if (page.search) {
        console.log(page.search);
        const regex = new RegExp(page.search, 'i');

        let events = page.events.filter((value) => {
          return regex.test(value.eventName);
        });
        console.log(events);
        page.events = events;
      }

      //appendnew_next_sd_5YFi9d1P24DxA0KE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5YFi9d1P24DxA0KE');
    }
  }

  sd_w21oEOf7ryvTT1EK(bh) {
    try {
      const bookedEventsDialog = this.__page_injector__.get(MatDialog);
      const bookedEventsDialogRef = bookedEventsDialog.open(
        bookedEventsComponent,
        { data: this.page.visitorUser }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w21oEOf7ryvTT1EK');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_mainEventPageComponent_Catch
}
