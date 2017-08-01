import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgbDatepickerConfig, NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import * as HolidayAPI from 'node-holidayapi/index.js';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('calendarForm') form;
  // Default properties
  public hapi = new HolidayAPI('1a23aa3c-74c3-4fce-b84f-ea3b37eae634').v1;
  public MAX_CAL_PER_ROW: number = 4;
  public model = {date: <string> '', numDays: <string> '', countryCode: <string> ''};
  public fromDate: Date;
  public totalCalRows: Array<any> = [];
  public toDate: Date;
  public firstDayOfWeek = 7;
  public formSubs: Subscription;
  // Datepicker public methods
  public isInside = date => this._afterDate(date, this.fromDate) && this._beforeDate(date, this.toDate);
  public isFrom = date => this._equalDate(date, this.fromDate);
  public isTo = date => this._equalDate(date, this.toDate);
  public isWeekend = date => this._equalWeekend(date);
  public isOutRangeDate = date => this._disabledDays(date);
  constructor(config: NgbDatepickerConfig) {
    config.navigation = 'none';
    config.outsideDays = 'hidden';
    // console.log(this.hapi);
  }
  // LIFE-CYCLE METHODS
  ngOnInit() {}
  ngAfterViewInit() {
    // Control form field changes
    this.formSubs = this.form.control.valueChanges.subscribe(values => {
      if (this.form.valid) {
        this._initCalendarConf();
      }
    });
  }
  ngOnDestroy() {
    this.formSubs.unsubscribe();
  }
  // METHODS
  private _afterDate(dateA, dateB) {
    const aDate = this._getDefaultNgBDate(dateA);
    const bDate = this._getDefaultDate(dateB);
    return aDate >= bDate;
  }
  private _beforeDate(dateA, dateB) {
    const aDate = this._getDefaultNgBDate(dateA);
    const bDate = this._getDefaultDate(dateB);
    return aDate < bDate;
  }
  private _disabledDays(date) {
    const aDate = new Date(date.year, date.month - 1, date.day);
    return aDate < this._getDefaultDate(this.fromDate) || aDate >= this._getDefaultDate(this.toDate);
  }
  private _equalDate(dateA, dateB) {
    const aDate = this._getDefaultNgBDate(dateA);
    const bDate = this._getDefaultDate(dateB);
    return aDate === bDate;
  }
  private _equalWeekend(date) {
    const aDate = new Date(date.year, date.month - 1, date.day);
    return aDate.getDay() === 6 || aDate.getDay() === 0;
  }
  private _getDefaultDate(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }
  private _getDefaultNgBDate(date) {
    return new Date(date.year, date.month - 1, date.day);
  }
  private _initCalendarConf() {
    this.totalCalRows = [];
    this.fromDate = new Date(this.model.date);
    this.toDate = new Date(this.model.date);
    this.toDate.setDate(this.toDate.getDate() + (+this.model.numDays));
    const diffMonths = this._monthDiff(this.fromDate, this.toDate);
    const totalRows = Math.ceil(diffMonths / this.MAX_CAL_PER_ROW);
    const currentMonth = this.fromDate.getMonth() + 1;
    const toMonthMod = (currentMonth) % this.MAX_CAL_PER_ROW;
    for (let calMonths = 1, toMonth = currentMonth, toYear = this.fromDate.getFullYear();
         calMonths <= totalRows; calMonths += 1, toMonth += this.MAX_CAL_PER_ROW) {
      if (toMonth % this.MAX_CAL_PER_ROW === toMonthMod) {
        if (toMonth > 12) {
          toYear++;
          toMonth = toMonth - 12;
        }
        let displayMonths;
        if (diffMonths > this.MAX_CAL_PER_ROW) {
          if (calMonths === totalRows) {
            displayMonths = diffMonths % this.MAX_CAL_PER_ROW;
            if (displayMonths === 0) {
              displayMonths = this.MAX_CAL_PER_ROW;
            }
          } else {
            displayMonths = this.MAX_CAL_PER_ROW;
          }
        } else {
          displayMonths = diffMonths;
        }
        this.totalCalRows.push({
          startDate: {
            year: toYear,
            month: toMonth
          } as NgbDateStruct,
          displayMonths: displayMonths
        });
      }
    }
  }
  private _monthDiff(d1, d2) {
    let months = 0;
    const currentDate = new Date(d1);
    currentDate.setDate(1);
    while (currentDate <= d2) {
      currentDate.setMonth(currentDate.getMonth() + 1);
      months++;
    }
    return months;
  }
}
