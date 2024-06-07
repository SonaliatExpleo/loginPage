// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { AfterViewInit, Component, Injector, ViewChild } from '@angular/core'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { MatPaginator } from '@angular/material/paginator'; //_splitter_
import { MatSort } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { showBookedByUsersComponent } from 'app/components/admin/showBookedByUsers.component'; //_splitter_
import { updateEventComponent } from 'app/components/admin/updateEvent.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-adminhome',
  templateUrl: './adminhome.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class adminhomeComponent implements AfterViewInit {
  @ViewChild(MatSort)
  public MatSort: any = null;
  @ViewChild(MatPaginator)
  public MatPaginator: any = null;
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
      this.sd_5S7sshWVVim6llbm(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_5S7sshWVVim6llbm(bh) {
    try {
      bh = this.sd_Vl4MdlQvIzqnd5iD(bh);
      //appendnew_next_sd_5S7sshWVVim6llbm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5S7sshWVVim6llbm');
    }
  }

  onSignout(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_WICPklZG1DcABGPK(bh);
      //appendnew_next_onSignout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nIbNPqPW2aPVnnLR');
    }
  }

  deleteEvent(tableId: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { tableId };
      bh.local = {};
      bh = this.sd_wWVlKVZZSUzYAKEJ(bh);
      //appendnew_next_deleteEvent
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iyyKPElFwm5h4nfG');
    }
  }
  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_xKCCTWKzvgDN0rx7_1(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8KGeLSlkmellpLRZ');
    }
  }

  updateEvent(valueToUpdate: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { valueToUpdate };
      bh.local = {};
      bh = this.sd_mfoPcSpCYAZz5rNQ(bh);
      //appendnew_next_updateEvent
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KwGaEsi4TswXrSJE');
    }
  }

  showBookedUser(tableUser: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { tableUser };
      bh.local = {};
      bh = this.sd_9gnReM7ibw8T9DcQ(bh);
      //appendnew_next_showBookedUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l0MbNAmpI43Gd0ho');
    }
  }

  onFilter_3(filterEvent: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { filterEvent };
      bh.local = {};
      bh = this.sd_iBlFYTlpoczCmWts_3(bh);
      //appendnew_next_onFilter_3
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7LBNVW1pWG3cwatl');
    }
  }
  //appendnew_flow_adminhomeComponent_start

  sd_Vl4MdlQvIzqnd5iD(bh) {
    try {
      bh = this.sd_6obMRso5ewoQJxCi(bh);
      //appendnew_next_sd_Vl4MdlQvIzqnd5iD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vl4MdlQvIzqnd5iD');
    }
  }

  sd_6obMRso5ewoQJxCi(bh) {
    try {
      const page = this.page;
      page.user = JSON.parse(localStorage.getItem('user'));
      page.admin = JSON.parse(localStorage.getItem('admin'));
      console.log(page.user);
      console.log(page.admin);
      page.myEvents = [];

      page.admin.forEach((adminItem) => {
        if (page.user.email === adminItem.email) {
          adminItem.events.forEach((event) => {
            page.myEvents.push(event);
            console.log(event); // Log each event here
          });
        }
      });

      console.log(page.myEvents); // Log all events here

      bh = this.sd_eJuzOUTYKNgXaqdz_1(bh);
      //appendnew_next_sd_6obMRso5ewoQJxCi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6obMRso5ewoQJxCi');
    }
  }

  sd_eJuzOUTYKNgXaqdz_1(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource(page.myEvents);
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TSyEr1iokS9g2mT6');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IJtTYf82T73gjbKA');
    }
  }

  sd_WICPklZG1DcABGPK(bh) {
    try {
      const page = this.page;
      localStorage.removeItem('user');

      bh = this.sd_2FLvmI1KQMDFQX0Y(bh);
      //appendnew_next_sd_WICPklZG1DcABGPK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WICPklZG1DcABGPK');
    }
  }

  async sd_2FLvmI1KQMDFQX0Y(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_2FLvmI1KQMDFQX0Y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2FLvmI1KQMDFQX0Y');
    }
  }

  sd_wWVlKVZZSUzYAKEJ(bh) {
    try {
      const page = this.page;
      let adminData = JSON.parse(localStorage.getItem('admin'));
      let userData = JSON.parse(localStorage.getItem('user'));

      if (adminData && userData) {
        const adminIndex = adminData.findIndex(
          (adminItem) => adminItem.email === userData.email
        );
        console.log(adminIndex);

        if (adminIndex !== -1) {
          console.log(adminData[adminIndex].events);
          const eventIndex = adminData[adminIndex].events.findIndex(
            (event) => event.eventName === bh.input.tableId
          );

          console.log(eventIndex);
          if (eventIndex !== -1) {
            adminData[adminIndex].events.splice(eventIndex, 1);

            localStorage.setItem('admin', JSON.stringify(adminData));
          }
        }
      }

      bh = this.sd_6obMRso5ewoQJxCi(bh);
      //appendnew_next_sd_wWVlKVZZSUzYAKEJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wWVlKVZZSUzYAKEJ');
    }
  }

  sd_xKCCTWKzvgDN0rx7_1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatSort: this.MatSort,
      });
      bh = this.sd_2VNGqvcKee34lvOz_1(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SQjkLkvM6IzOgd3B');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;
      bh = this.sd_xKCCTWKzvgDN0rx7_2(bh);
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Pl0vATXBJXDTMmZ3');
    }
  }

  sd_xKCCTWKzvgDN0rx7_2(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatPaginator: this.MatPaginator,
      });
      bh = this.sd_2VNGqvcKee34lvOz_2(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NfyjUYwCC3vaELlS');
    }
  }

  sd_2VNGqvcKee34lvOz_2(bh) {
    try {
      const page = this.page;
      this.page.tableData.paginator = this.MatPaginator;
      //appendnew_next_sd_2VNGqvcKee34lvOz_2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tLXnh7O8SW8IP8XK');
    }
  }

  sd_mfoPcSpCYAZz5rNQ(bh) {
    try {
      const page = this.page;
      console.log(bh.input.valueToUpdate);

      bh = this.updatePage(bh);
      //appendnew_next_sd_mfoPcSpCYAZz5rNQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mfoPcSpCYAZz5rNQ');
    }
  }

  updatePage(bh) {
    try {
      const updateEventDialog = this.__page_injector__.get(MatDialog);
      const updateEventDialogRef = updateEventDialog.open(
        updateEventComponent,
        { data: bh.input.valueToUpdate }
      );
      updateEventDialogRef.beforeClosed().subscribe((event) => {
        this.sd_6obMRso5ewoQJxCi(bh);
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lUKQBAx3WO7I0vov');
    }
  }

  sd_9gnReM7ibw8T9DcQ(bh) {
    try {
      const showBookedByUsersDialog = this.__page_injector__.get(MatDialog);
      const showBookedByUsersDialogRef = showBookedByUsersDialog.open(
        showBookedByUsersComponent,
        { data: bh.input.tableUser }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9gnReM7ibw8T9DcQ');
    }
  }

  sd_iBlFYTlpoczCmWts_3(bh) {
    try {
      const page = this.page;
      console.log(bh.input.filterEvent);
      const filterValue = (bh.input.filterEvent.target as HTMLInputElement)
        .value;
      this.page.tableData.filter = filterValue.trim().toLowerCase();
      //appendnew_next_sd_iBlFYTlpoczCmWts_3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mDQUgUTVSnkA3mnd');
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
  //appendnew_flow_adminhomeComponent_Catch
}
