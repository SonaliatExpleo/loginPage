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
  selector: 'bh-showBookedByUsers',
  templateUrl: './showBookedByUsers.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class showBookedByUsersComponent {
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
      this.sd_UGxHPNmVat7I8SN0(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_UGxHPNmVat7I8SN0(bh) {
    try {
      bh = this.sd_u7zqcMn8T3BbszbE(bh);
      //appendnew_next_sd_UGxHPNmVat7I8SN0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UGxHPNmVat7I8SN0');
    }
  }

  //appendnew_flow_showBookedByUsersComponent_start

  sd_u7zqcMn8T3BbszbE(bh) {
    try {
      this.page.dialogData = this.__page_injector__.get(MAT_DIALOG_DATA);

      bh = this.sd_UJiWmLx2QfDv4nBL(bh);
      //appendnew_next_sd_u7zqcMn8T3BbszbE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u7zqcMn8T3BbszbE');
    }
  }

  sd_UJiWmLx2QfDv4nBL(bh) {
    try {
      //appendnew_next_sd_UJiWmLx2QfDv4nBL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UJiWmLx2QfDv4nBL');
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
  //appendnew_flow_showBookedByUsersComponent_Catch
}
