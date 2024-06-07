// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-updateEvent',
  templateUrl: './updateEvent.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class updateEventComponent {
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
      this.sd_38sh2wQvxW5SkDd6(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_38sh2wQvxW5SkDd6(bh) {
    try {
      bh = this.sd_yY8dP0k6SKtFl9lp(bh);
      //appendnew_next_sd_38sh2wQvxW5SkDd6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_38sh2wQvxW5SkDd6');
    }
  }

  update(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_6MIh68tLTlI6Iy5J(bh);
      //appendnew_next_update
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0Gl9IWRY41ftdDfP');
    }
  }
  //appendnew_flow_updateEventComponent_start

  sd_yY8dP0k6SKtFl9lp(bh) {
    try {
      bh = this.sd_EAMgXry4VNLTaAYr(bh);
      //appendnew_next_sd_yY8dP0k6SKtFl9lp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yY8dP0k6SKtFl9lp');
    }
  }

  sd_EAMgXry4VNLTaAYr(bh) {
    try {
      this.page.modalData = this.__page_injector__.get(MAT_DIALOG_DATA);

      bh = this.sd_lhpigTV9yfkLhqkN(bh);
      //appendnew_next_sd_EAMgXry4VNLTaAYr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EAMgXry4VNLTaAYr');
    }
  }

  sd_lhpigTV9yfkLhqkN(bh) {
    try {
      bh = this.sd_Tr61aIodnyv11Qqj(bh);
      //appendnew_next_sd_lhpigTV9yfkLhqkN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lhpigTV9yfkLhqkN');
    }
  }

  sd_Tr61aIodnyv11Qqj(bh) {
    try {
      const page = this.page;

      page.eventtoChange = page.modalData.eventName;
      page.updateData = new FormGroup({
        eventName: new FormControl(page.modalData.eventName, {
          validators: [Validators.required],
        }),
        location: new FormControl(page.modalData.location, {
          validators: [Validators.required],
        }),
        date: new FormControl(page.modalData.date, {
          validators: [Validators.required],
        }),
        description: new FormControl(page.modalData.description, {
          validators: [Validators.required],
        }),
      });

      //appendnew_next_sd_Tr61aIodnyv11Qqj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Tr61aIodnyv11Qqj');
    }
  }

  sd_6MIh68tLTlI6Iy5J(bh) {
    try {
      const page = this.page;
      console.log(page.updateData.value, 'update');

      let data = JSON.parse(localStorage.getItem('admin'));
      let user = JSON.parse(localStorage.getItem('user'));

      data.forEach((admin) => {
        admin.events.forEach((events) => {
          if (events.eventName == page.eventtoChange) {
            console.log(events, 'eventmatch');
            console.log(events.eventName, page.updateData.value.eventName);
            (events.location = page.updateData.value.location),
              (events.descrition = page.updateData.value.descrition),
              (events.date = page.updateData.value.date),
              (events.eventName = page.updateData.value.eventName);
          }
        });
      });
      console.log(data);
      localStorage.setItem('admin', JSON.stringify(data));
      bh = this.sd_xzpJL2jE0LypXZyz(bh);
      //appendnew_next_sd_6MIh68tLTlI6Iy5J
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6MIh68tLTlI6Iy5J');
    }
  }

  sd_xzpJL2jE0LypXZyz(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.eventtoChange);

      //appendnew_next_sd_xzpJL2jE0LypXZyz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xzpJL2jE0LypXZyz');
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
  //appendnew_flow_updateEventComponent_Catch
}
