// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'; //_splitter_
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-bookEventWithPeopels',
  templateUrl: './bookEventWithPeopels.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class bookEventWithPeopelsComponent {
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
      this.sd_Q8f6Z8Lnb010SCEN(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Q8f6Z8Lnb010SCEN(bh) {
    try {
      bh = this.sd_pYBnSaipmiAGQDwG(bh);
      //appendnew_next_sd_Q8f6Z8Lnb010SCEN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q8f6Z8Lnb010SCEN');
    }
  }

  bookTicketWithGuests(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_rJ7xFYDqR4w3CP5g(bh);
      //appendnew_next_bookTicketWithGuests
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w1xrl8kUc6gy3LlI');
    }
  }

  addUser(value: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { value };
      bh.local = {};
      bh = this.sd_j2eOm3npVGehIfne(bh);
      //appendnew_next_addUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_POcKVCWEMqQ279Vn');
    }
  }
  //appendnew_flow_bookEventWithPeopelsComponent_start

  sd_pYBnSaipmiAGQDwG(bh) {
    try {
      this.page.ticketValue = this.__page_injector__.get(MAT_DIALOG_DATA);

      bh = this.sd_844c5amgYVcdRjHE(bh);
      //appendnew_next_sd_pYBnSaipmiAGQDwG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pYBnSaipmiAGQDwG');
    }
  }

  sd_844c5amgYVcdRjHE(bh) {
    try {
      bh = this.sd_RqnNwjCJcnqJLbDT(bh);
      //appendnew_next_sd_844c5amgYVcdRjHE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_844c5amgYVcdRjHE');
    }
  }

  sd_RqnNwjCJcnqJLbDT(bh) {
    try {
      bh = this.sd_KDeWBN57RyF4DjQ8(bh);
      //appendnew_next_sd_RqnNwjCJcnqJLbDT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RqnNwjCJcnqJLbDT');
    }
  }

  sd_KDeWBN57RyF4DjQ8(bh) {
    try {
      const page = this.page;
      page.visitorUser = JSON.parse(localStorage.getItem('visitorUser'));

      page.member = [];

      page.addEventForm = new FormGroup({
        userName: new FormControl(page.visitorUser.email),
        multiUser: new FormControl(''),
      });

      //appendnew_next_sd_KDeWBN57RyF4DjQ8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KDeWBN57RyF4DjQ8');
    }
  }

  sd_rJ7xFYDqR4w3CP5g(bh) {
    try {
      const page = this.page;
      console.log(page.ticketValue);

      let data = JSON.parse(localStorage.getItem('admin'));
      console.log(data);

      if (data) {
        data.forEach((admin) => {
          admin.events.forEach((event) => {
            if (event.eventName === page.ticketValue.eventName) {
              // console.log(event.bookeBy,'booked by')
              page.member.forEach((valuess) => {
                if (event.bookeBy.includes(valuess)) {
                  console.log('User already booked the event');
                } else {
                  event.bookeBy.push(valuess);
                  console.log('User booked the event successfully');
                }
              });
            }
          });
        });
        localStorage.setItem('admin', JSON.stringify(data));
        console.log(data);
      } else {
        console.log('No data found in localStorage');
      }

      localStorage.setItem('admin', JSON.stringify(data));

      bh = this.sd_5fZHNKWTR2GRUzDE(bh);
      //appendnew_next_sd_rJ7xFYDqR4w3CP5g
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rJ7xFYDqR4w3CP5g');
    }
  }

  sd_5fZHNKWTR2GRUzDE(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.visitorUser);

      //appendnew_next_sd_5fZHNKWTR2GRUzDE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5fZHNKWTR2GRUzDE');
    }
  }

  sd_j2eOm3npVGehIfne(bh) {
    try {
      const page = this.page; // console.log(bh.input.value)
      // page.member.push(bh.input.value)

      // console.log(page.member)
      // page.value=''
      page.member.push(page.addEventForm.value.multiUser);
      console.log(page.member);
      page.addEventForm.value.multiUser = '';
      //appendnew_next_sd_j2eOm3npVGehIfne
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_j2eOm3npVGehIfne');
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
  //appendnew_flow_bookEventWithPeopelsComponent_Catch
}
