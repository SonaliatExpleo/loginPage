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
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-createEvent',
  templateUrl: './createEvent.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class createEventComponent {
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
      this.sd_AuKBtYU0oyTUSimT(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_AuKBtYU0oyTUSimT(bh) {
    try {
      bh = this.sd_wSfoYtbBRLfO5eQ7(bh);
      //appendnew_next_sd_AuKBtYU0oyTUSimT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AuKBtYU0oyTUSimT');
    }
  }

  onCreateEvent(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_488t5qnrt6xgVC4M(bh);
      //appendnew_next_onCreateEvent
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LPG1lIOuxNfUCkZT');
    }
  }
  //appendnew_flow_createEventComponent_start

  sd_wSfoYtbBRLfO5eQ7(bh) {
    try {
      bh = this.sd_UFoOwbFw7h7iRWSW(bh);
      //appendnew_next_sd_wSfoYtbBRLfO5eQ7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wSfoYtbBRLfO5eQ7');
    }
  }

  sd_UFoOwbFw7h7iRWSW(bh) {
    try {
      bh = this.sd_oM9Ye6u19aQTSoft(bh);
      //appendnew_next_sd_UFoOwbFw7h7iRWSW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UFoOwbFw7h7iRWSW');
    }
  }

  sd_oM9Ye6u19aQTSoft(bh) {
    try {
      const page = this.page;
      page.eventForm = new FormGroup({
        eventName: new FormControl('', { validators: [Validators.required] }),
        location: new FormControl('', { validators: [Validators.required] }),
        date: new FormControl('', { validators: [Validators.required] }),
        description: new FormControl('', { validators: [Validators.required] }),
      });

      //appendnew_next_sd_oM9Ye6u19aQTSoft
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oM9Ye6u19aQTSoft');
    }
  }

  async sd_488t5qnrt6xgVC4M(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.eventForm.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_DDXJxfuH9jT92cQv(bh);
      } else {
        bh = await this.sd_J2tNtZdgM95Hv4mL(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_488t5qnrt6xgVC4M');
    }
  }

  sd_DDXJxfuH9jT92cQv(bh) {
    try {
      const page = this.page;
      page.user = JSON.parse(localStorage.getItem('user'));
      page.admin = JSON.parse(localStorage.getItem('admin'));

      console.log(page.eventForm.value, 'eventForm');
      console.log(page.user, 'user');
      console.log(page.admin, 'admin');
      page.admin.forEach((adminItem) => {
        console.log('inside funcion');
        if (page.user.email === adminItem.email) {
          adminItem.events.push({ ...page.eventForm.value, bookeBy: [] });
          console.log('inside if');
        }
      });
      localStorage.setItem('admin', JSON.stringify(page.admin));

      bh = this.sd_fC97n5yojl4nozD0(bh);
      //appendnew_next_sd_DDXJxfuH9jT92cQv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DDXJxfuH9jT92cQv');
    }
  }

  async sd_fC97n5yojl4nozD0(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/admin');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_fC97n5yojl4nozD0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fC97n5yojl4nozD0');
    }
  }

  sd_J2tNtZdgM95Hv4mL(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Enter valid details', '', {
        duration: 1000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_J2tNtZdgM95Hv4mL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J2tNtZdgM95Hv4mL');
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
  //appendnew_flow_createEventComponent_Catch
}
