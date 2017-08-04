webpackJsonp([2,4],{

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 162;


/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(176);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_node_holidayapi_index_js__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_node_holidayapi_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_node_holidayapi_index_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(config) {
        var _this = this;
        // Default properties
        this.hapi = new __WEBPACK_IMPORTED_MODULE_2_node_holidayapi_index_js__('1a23aa3c-74c3-4fce-b84f-ea3b37eae634').v1;
        this.MAX_CAL_PER_ROW = 4;
        this.model = { date: '', numDays: '', countryCode: '' };
        this.totalCalRows = [];
        this.firstDayOfWeek = 7;
        // Datepicker public methods
        this.isInside = function (date) { return _this._afterDate(date, _this.fromDate) && _this._beforeDate(date, _this.toDate); };
        this.isFrom = function (date) { return _this._equalDate(date, _this.fromDate); };
        this.isTo = function (date) { return _this._equalDate(date, _this.toDate); };
        this.isWeekend = function (date) { return _this._equalWeekend(date); };
        this.isOutRangeDate = function (date) { return _this._disabledDays(date); };
        config.navigation = 'none';
        config.outsideDays = 'hidden';
        // console.log(this.hapi);
    }
    // LIFE-CYCLE METHODS
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Control form field changes
        this.formSubs = this.form.control.valueChanges.subscribe(function (values) {
            if (_this.form.valid) {
                _this._initCalendarConf();
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.formSubs.unsubscribe();
    };
    // METHODS
    AppComponent.prototype._afterDate = function (dateA, dateB) {
        var aDate = this._getDefaultNgBDate(dateA);
        var bDate = this._getDefaultDate(dateB);
        return aDate >= bDate;
    };
    AppComponent.prototype._beforeDate = function (dateA, dateB) {
        var aDate = this._getDefaultNgBDate(dateA);
        var bDate = this._getDefaultDate(dateB);
        return aDate < bDate;
    };
    AppComponent.prototype._disabledDays = function (date) {
        var aDate = new Date(date.year, date.month - 1, date.day);
        return aDate < this._getDefaultDate(this.fromDate) || aDate >= this._getDefaultDate(this.toDate);
    };
    AppComponent.prototype._equalDate = function (dateA, dateB) {
        var aDate = this._getDefaultNgBDate(dateA);
        var bDate = this._getDefaultDate(dateB);
        return aDate === bDate;
    };
    AppComponent.prototype._equalWeekend = function (date) {
        var aDate = new Date(date.year, date.month - 1, date.day);
        return aDate.getDay() === 6 || aDate.getDay() === 0;
    };
    AppComponent.prototype._getDefaultDate = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    };
    AppComponent.prototype._getDefaultNgBDate = function (date) {
        return new Date(date.year, date.month - 1, date.day);
    };
    AppComponent.prototype._initCalendarConf = function () {
        this.totalCalRows = [];
        this.fromDate = new Date(this.model.date);
        this.toDate = new Date(this.model.date);
        this.toDate.setDate(this.toDate.getDate() + (+this.model.numDays));
        var diffMonths = this._monthDiff(this.fromDate, this.toDate);
        var totalRows = Math.ceil(diffMonths / this.MAX_CAL_PER_ROW);
        var currentMonth = this.fromDate.getMonth() + 1;
        var toMonthMod = (currentMonth) % this.MAX_CAL_PER_ROW;
        for (var calMonths = 1, toMonth = currentMonth, toYear = this.fromDate.getFullYear(); calMonths <= totalRows; calMonths += 1, toMonth += this.MAX_CAL_PER_ROW) {
            if (toMonth % this.MAX_CAL_PER_ROW === toMonthMod) {
                if (toMonth > 12) {
                    toYear++;
                    toMonth = toMonth - 12;
                }
                var displayMonths = void 0;
                if (diffMonths > this.MAX_CAL_PER_ROW) {
                    if (calMonths === totalRows) {
                        displayMonths = diffMonths % this.MAX_CAL_PER_ROW;
                        if (displayMonths === 0) {
                            displayMonths = this.MAX_CAL_PER_ROW;
                        }
                    }
                    else {
                        displayMonths = this.MAX_CAL_PER_ROW;
                    }
                }
                else {
                    displayMonths = diffMonths;
                }
                this.totalCalRows.push({
                    startDate: {
                        year: toYear,
                        month: toMonth
                    },
                    displayMonths: displayMonths
                });
            }
        }
    };
    AppComponent.prototype._monthDiff = function (d1, d2) {
        var months = 0;
        var currentDate = new Date(d1);
        currentDate.setDate(1);
        while (currentDate <= d2) {
            currentDate.setMonth(currentDate.getMonth() + 1);
            months++;
        }
        return months;
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('calendarForm'),
    __metadata("design:type", Object)
], AppComponent.prototype, "form", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(239),
        styles: [__webpack_require__(232)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbDatepickerConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbDatepickerConfig */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_date_directive__ = __webpack_require__(175);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__directives_date_directive__["a" /* DateDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(9);
/* unused harmony export validateDate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function validateDate() {
    return function (c) {
        var checkDate = function (date) {
            if (!date) {
                return false;
            }
            var dts = date.split('/');
            if (dts.length === 0) {
                return false;
            }
            var dateTest = new Date(date);
            return !isNaN(+dateTest) &&
                dateTest.getFullYear() === parseInt(dts[2], 10) &&
                dateTest.getMonth() === (parseInt(dts[0], 10) - 1) &&
                dateTest.getDate() === parseInt(dts[1], 10);
        };
        var isValid = checkDate(c.value);
        if (isValid) {
            return null;
        }
        else {
            return {
                appDateVal: {
                    valid: false
                }
            };
        }
    };
}
var DateDirective = DateDirective_1 = (function () {
    function DateDirective() {
        this.validator = validateDate();
    }
    DateDirective.prototype.validate = function (c) {
        return this.validator(c);
    };
    return DateDirective;
}());
DateDirective = DateDirective_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({
        selector: '[appDateVal][ngModel]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: DateDirective_1, multi: true }
        ]
    }),
    __metadata("design:paramtypes", [])
], DateDirective);

var DateDirective_1;
//# sourceMappingURL=date.directive.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <header>\r\n    <div class=\"nav\">\r\n      <h1 class=\"navbar-text\">Calendar test</h1>\r\n    </div>\r\n  </header>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">\r\n      <div class=\"form-ctn\">\r\n        <form name=\"calendarForm\" #calendarForm=\"ngForm\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label>\r\n              Date:\r\n              <input type=\"text\" class=\"form-control\" name=\"date\" placeholder=\"MM/dd/YYYY\" [(ngModel)]=\"model.date\" #dateEl=\"ngModel\" appDateVal required/>\r\n            </label>\r\n            <div class=\"alert alert-danger\" *ngIf=\"dateEl.errors && (dateEl.dirty || dateEl.touched)\">\r\n              <p *ngIf=\"dateEl.errors.required\">\r\n                The start date is required.\r\n              </p>\r\n              <p *ngIf=\"dateEl.errors.appDateVal\">\r\n                Date is invalid.\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>\r\n              Number of days:\r\n              <input type=\"text\" class=\"form-control\" name=\"numDays\" #numDaysEl=\"ngModel\" placeholder=\"E.g: 9\" [(ngModel)]=\"model.numDays\" pattern=\"[0-9]+\" maxlength=\"4\" required/>\r\n            </label>\r\n            <div class=\"alert alert-danger\" *ngIf=\"numDaysEl.errors && (numDaysEl.dirty || numDaysEl.touched)\">\r\n              <p *ngIf=\"numDaysEl.errors.required\">\r\n                The number of days is required.\r\n              </p>\r\n              <p *ngIf=\"numDaysEl.errors.pattern\">\r\n                The number of days is invalid.\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>\r\n              Country Code:\r\n              <input type=\"text\" class=\"form-control\" name=\"countryCode\" [(ngModel)]=\"model.countryCode\" placeholder=\"E.g: US\"/>\r\n            </label>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"calendar-ctn\" [hidden]=\"!form.valid\">\r\n        <ngb-datepicker\r\n          *ngFor = \"let cal of totalCalRows; let aIndex = index\"\r\n          [startDate] = \"cal.startDate\"\r\n          [displayMonths] = \"cal.displayMonths\"\r\n          [firstDayOfWeek] = \"firstDayOfWeek\"\r\n          [dayTemplate] = \"dayT\">\r\n        </ngb-datepicker>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #dayT let-date=\"date\" let-focused=\"focused\">\r\n    <span class=\"custom-day\"\r\n          [class.focused]=\"focused\"\r\n          [class.range]=\"isInside(date) || isFrom(date) || isTo(date)\"\r\n          [class.weekend]=\"isInside(date) && isWeekend(date)\"\r\n          [class.disabled]=\"isOutRangeDate(date)\"\r\n    >\r\n      {{ date.day }}\r\n    </span>\r\n  </ng-template>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(163);


/***/ })

},[280]);
//# sourceMappingURL=main.bundle.js.map