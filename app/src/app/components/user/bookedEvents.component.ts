// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MAT_DIALOG_DATA } from '@angular/material/dialog'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-bookedEvents',
  templateUrl: './bookedEvents.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class bookedEventsComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_1ezfsBE4ke3XSo0u(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_1ezfsBE4ke3XSo0u(bh) {
    try {
      bh = this.sd_96htzDtgiWHMDbfo(bh);
      //appendnew_next_sd_1ezfsBE4ke3XSo0u
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1ezfsBE4ke3XSo0u');
    }
  }

  //appendnew_flow_bookedEventsComponent_start

  sd_96htzDtgiWHMDbfo(bh) {
    try {
      this.page.visitorUser = this.__page_injector__.get(MAT_DIALOG_DATA);

      bh = this.sd_bDKMVrIJxkFmS1s5(bh);
      //appendnew_next_sd_96htzDtgiWHMDbfo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_96htzDtgiWHMDbfo');
    }
  }

  sd_bDKMVrIJxkFmS1s5(bh) {
    try {
      bh = this.sd_ZyPaI4PZ9IpRBv0h(bh);
      //appendnew_next_sd_bDKMVrIJxkFmS1s5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bDKMVrIJxkFmS1s5');
    }
  }

  sd_ZyPaI4PZ9IpRBv0h(bh) {
    try {
      const page = this.page;
      page.myevents = [];

      let adminData = JSON.parse(localStorage.getItem('admin'));
      console.log(page.visitorUser);

      if (Array.isArray(adminData)) {
        adminData.forEach((adminItem) => {
          if (adminItem.events && Array.isArray(adminItem.events)) {
            page.myevents.push(...adminItem.events);
          }
        });
      }

      page.allEventsBookedByMe = [];
      page.myevents.forEach((events) => {
        if (events.bookeBy.includes(page.visitorUser.email)) {
          page.allEventsBookedByMe.push(events);
        }
      });

      //appendnew_next_sd_ZyPaI4PZ9IpRBv0h
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZyPaI4PZ9IpRBv0h');
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
  //appendnew_flow_bookedEventsComponent_Catch
}
