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
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
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
      this.sd_9t9INRzmQByxrZPv(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_9t9INRzmQByxrZPv(bh) {
    try {
      bh = this.sd_gOWr9ItM0qm9mRDa(bh);
      //appendnew_next_sd_9t9INRzmQByxrZPv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9t9INRzmQByxrZPv');
    }
  }

  onLogin(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_auJzayrpu6nBSMgf(bh);
      //appendnew_next_onLogin
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O8tdBbDey73jLCSL');
    }
  }
  //appendnew_flow_loginComponent_start

  sd_gOWr9ItM0qm9mRDa(bh) {
    try {
      bh = this.sd_MrI3OWXeQlBoB2Uj(bh);
      //appendnew_next_sd_gOWr9ItM0qm9mRDa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gOWr9ItM0qm9mRDa');
    }
  }

  sd_MrI3OWXeQlBoB2Uj(bh) {
    try {
      bh = this.sd_oi74dOS2oMCJVwa7(bh);
      //appendnew_next_sd_MrI3OWXeQlBoB2Uj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MrI3OWXeQlBoB2Uj');
    }
  }

  sd_oi74dOS2oMCJVwa7(bh) {
    try {
      const page = this.page;
      page.role = ['admin', 'user'];

      page.formData = new FormGroup({
        email: new FormControl('', {
          validators: [Validators.required, Validators.email],
        }),
        password: new FormControl('', { validators: [Validators.required] }),
        role: new FormControl(''),
      });
      //appendnew_next_sd_oi74dOS2oMCJVwa7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oi74dOS2oMCJVwa7');
    }
  }

  async sd_auJzayrpu6nBSMgf(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.formData.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_nEgA8CNCdnBB7CTn(bh);
      } else {
        bh = await this.sd_a0JOooZHEGlJkZiV(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_auJzayrpu6nBSMgf');
    }
  }

  sd_nEgA8CNCdnBB7CTn(bh) {
    try {
      const page = this.page;
      console.log(page.formData.value);
      bh = this.sd_3t5zODEcHzEUzJJc(bh);
      //appendnew_next_sd_nEgA8CNCdnBB7CTn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nEgA8CNCdnBB7CTn');
    }
  }

  async sd_3t5zODEcHzEUzJJc(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          this.page.formData.value.role,
          'admin',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_srFoclrWRYo2Jxgs(bh);
      } else {
        bh = await this.sd_OTiu9utO5HE9itg7(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3t5zODEcHzEUzJJc');
    }
  }

  sd_srFoclrWRYo2Jxgs(bh) {
    try {
      const page = this.page;

      let adminData = JSON.parse(localStorage.getItem('admin'));

      if (!adminData) {
        adminData = [];
      }

      const isAdminExists = adminData.some((adminItem) => {
        return adminItem.username === page.formData.username;
      });
      if (!isAdminExists) {
        adminData.push({ ...page.formData.value, events: [] });
      }

      localStorage.setItem('admin', JSON.stringify(adminData));
      localStorage.setItem('user', JSON.stringify(page.formData.value));

      bh = this.sd_DpdjEjGY6x4rTuMI(bh);
      //appendnew_next_sd_srFoclrWRYo2Jxgs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_srFoclrWRYo2Jxgs');
    }
  }

  async sd_DpdjEjGY6x4rTuMI(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/admin');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_DpdjEjGY6x4rTuMI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DpdjEjGY6x4rTuMI');
    }
  }

  sd_OTiu9utO5HE9itg7(bh) {
    try {
      const page = this.page;
      console.log(page.formData.value.role);

      let previousUserData = JSON.parse(localStorage.getItem('allUserDetail'));

      if (!previousUserData) {
        previousUserData = [];
      }

      const isAdminExists = previousUserData.some((adminItem) => {
        return adminItem.username === page.formData.username;
      });
      if (!isAdminExists) {
        previousUserData.push({ ...page.formData.value, bookedEvents: [] });
      }

      localStorage.setItem('allUserDetail', JSON.stringify(previousUserData));

      localStorage.setItem('visitorUser', JSON.stringify(page.formData.value));
      bh = this.sd_QtjdAVOLDhT0UMei(bh);
      //appendnew_next_sd_OTiu9utO5HE9itg7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OTiu9utO5HE9itg7');
    }
  }

  async sd_QtjdAVOLDhT0UMei(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/mainhome');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_QtjdAVOLDhT0UMei
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QtjdAVOLDhT0UMei');
    }
  }

  sd_a0JOooZHEGlJkZiV(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('', 'Enter Credentials', {
        duration: 1000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_a0JOooZHEGlJkZiV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a0JOooZHEGlJkZiV');
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
  //appendnew_flow_loginComponent_Catch
}
