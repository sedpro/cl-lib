(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/material/menu'), require('@angular/material/core'), require('@angular/forms'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/stepper'), require('@angular/material/datepicker'), require('@angular/material/dialog'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slider'), require('@angular/material/slide-toggle'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree')) :
    typeof define === 'function' && define.amd ? define('@sedpro/cl-lib', ['exports', '@angular/core', '@angular/common', '@angular/platform-browser', '@angular/material/menu', '@angular/material/core', '@angular/forms', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/stepper', '@angular/material/datepicker', '@angular/material/dialog', '@angular/material/divider', '@angular/material/expansion', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slider', '@angular/material/slide-toggle', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.sedpro = global.sedpro || {}, global.sedpro['cl-lib'] = {}), global.ng.core, global.ng.common, global.ng.platformBrowser, global.ng.material.menu, global.ng.material.core, global.ng.forms, global.ng.cdk.a11y, global.ng.cdk.dragDrop, global.ng.cdk.portal, global.ng.cdk.scrolling, global.ng.cdk.stepper, global.ng.cdk.table, global.ng.cdk.tree, global.ng.material.autocomplete, global.ng.material.badge, global.ng.material.bottomSheet, global.ng.material.button, global.ng.material.buttonToggle, global.ng.material.card, global.ng.material.checkbox, global.ng.material.chips, global.ng.material.stepper, global.ng.material.datepicker, global.ng.material.dialog, global.ng.material.divider, global.ng.material.expansion, global.ng.material.gridList, global.ng.material.icon, global.ng.material.input, global.ng.material.list, global.ng.material.paginator, global.ng.material.progressBar, global.ng.material.progressSpinner, global.ng.material.radio, global.ng.material.select, global.ng.material.sidenav, global.ng.material.slider, global.ng.material.slideToggle, global.ng.material.snackBar, global.ng.material.sort, global.ng.material.table, global.ng.material.tabs, global.ng.material.toolbar, global.ng.material.tooltip, global.ng.material.tree));
}(this, (function (exports, core, common, platformBrowser, menu, core$1, forms, a11y, dragDrop, portal, scrolling, stepper, table, tree, autocomplete, badge, bottomSheet, button, buttonToggle, card, checkbox, chips, stepper$1, datepicker, dialog, divider, expansion, gridList, icon, input, list, paginator, progressBar, progressSpinner, radio, select, sidenav, slider, slideToggle, snackBar, sort, table$1, tabs, toolbar, tooltip, tree$1) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent() {
        }
        return HeaderComponent;
    }());
    HeaderComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'cl-header',
                    template: "<div role=\"heading\" [attr.aria-level]=\"1\">\n    <ng-content></ng-content>\n</div>\n<span *ngIf=\"!!subheader\">{{subheader}}</span>\n",
                    styles: [":host{display:block;font-family:Open Sans,sans-serif;margin-bottom:32px;margin-top:32px}:host [role=heading]{font-size:22px}:host [aria-level=\"1\"]{font-weight:700}:host>span{color:#75767a;display:block;font-size:11px;font-weight:400;position:relative;top:5px;white-space:pre-line}"]
                },] }
    ];
    HeaderComponent.propDecorators = {
        subheader: [{ type: core.Input }]
    };

    var ClTemplateDirective = /** @class */ (function () {
        function ClTemplateDirective(template) {
            this.template = template;
        }
        Object.defineProperty(ClTemplateDirective.prototype, "i360Template", {
            set: function (val) {
                this.name = val;
            },
            enumerable: false,
            configurable: true
        });
        return ClTemplateDirective;
    }());
    ClTemplateDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[cl-template]',
                },] }
    ];
    ClTemplateDirective.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };
    ClTemplateDirective.propDecorators = {
        i360Template: [{ type: core.Input }]
    };

    var components = [
        HeaderComponent,
        ClTemplateDirective
    ];
    var ClLibModule = /** @class */ (function () {
        function ClLibModule() {
        }
        return ClLibModule;
    }());
    ClLibModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: __spread(components),
                    imports: [
                        common.CommonModule
                    ],
                    exports: __spread(components)
                },] }
    ];

    /**
     * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2020 All Rights Reserved
     *
     * Licensed under CLOUD LINUX LICENSE AGREEMENT
     * http://cloudlinux.com/docs/LICENSE.TXT
     */
    var MenuComponent = /** @class */ (function () {
        function MenuComponent() {
            this.role = 'navigation';
            this.leftTemplates = [];
            this.rightTemplates = [];
        }
        Object.defineProperty(MenuComponent.prototype, "templates", {
            set: function (templates) {
                var _this = this;
                this.leftTemplates.length = 0;
                this.rightTemplates.length = 0;
                this.logoTemplate = undefined;
                templates.forEach(function (template) {
                    switch (template.name) {
                        case 'right':
                            _this.rightTemplates.push(template.template);
                            break;
                        case 'logo':
                            _this.logoTemplate = template.template;
                            break;
                        default:
                            _this.leftTemplates.push(template.template);
                            break;
                    }
                });
            },
            enumerable: false,
            configurable: true
        });
        return MenuComponent;
    }());
    MenuComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'cl-menu',
                    template: "<!--\n    Copyright \u00A9 Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2020 All Rights Reserved\n\n    Licensed under CLOUD LINUX LICENSE AGREEMENT\n    http://cloudlinux.com/docs/LICENSE.TXT\n-->\n<div class=\"cm-navbar\">\n    <div class=\"left-aligned\">\n      <div class=\"cl-logo-container\">\n        <ng-template *ngIf=\"!!logoTemplate\" [ngTemplateOutlet]=\"logoTemplate\"></ng-template>\n      </div>\n        <ul class=\"cm-navbar-menu\">\n          <div *ngFor=\"let template of leftTemplates\">\n            <ng-template [ngTemplateOutlet]=\"template\"></ng-template>\n          </div>\n        </ul>\n    </div>\n    <div class=\"right-aligned\">\n        <a class=\"support-button\" href=\"https://cloudlinux.zendesk.com/hc/en-us/requests/new\"\n           target=\"_blank\"\n           mat-button>\n            <i class=\"support-icon\"></i>\n        </a>\n      <div *ngFor=\"let template of rightTemplates\">\n        <ng-template [ngTemplateOutlet]=\"template\"></ng-template>\n      </div>\n    </div>\n</div>\n",
                    styles: [".cm-navbar{background-color:#1b55c5;border-radius:4px;box-sizing:border-box;flex-wrap:wrap;min-height:64px;padding-left:37px}.cm-navbar,.cm-navbar-menu{align-items:center;display:flex}.cm-navbar-menu{list-style:none}.cm-navbar-menu a{align-items:center;border-radius:2px;color:#fff;cursor:pointer;display:flex;font-family:SF UI Text,sans-serif;font-size:13px;font-stretch:normal;font-style:normal;font-weight:500;letter-spacing:.5px;line-height:normal;margin-bottom:auto;margin-top:auto;padding:11px 13px}.cm-navbar-menu a.active,.cm-navbar-menu a:hover{background-color:#5883d5;transition:background-color .5s}.cm-navbar .left-aligned{display:flex;height:64px}.cm-navbar .right-aligned{flex:1}.cm-navbar-profile,.cm-navbar .right-aligned{align-items:center;display:flex;justify-content:flex-end}.cm-navbar-profile{margin-bottom:auto;margin-right:20px;margin-top:auto}.cm-navbar .blue-outline-btn{background-color:transparent;border:2px solid #fff;border-radius:2px;color:#fff;margin-left:9px}.cm-navbar .blue-outline-btn:hover{background-color:#fff;color:#1b55c5;transition:background-color .5s}.cm-navbar .vertical-divider{border:1px solid #979797;height:34px;margin-right:10px;opacity:.28}.cm-navbar .server-icon{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23ffffff%22%20fill-rule%3D%22evenodd%22%20d%3D%22M17%2010H1c-.55%200-1%20.45-1%201v6c0%20.55.45%201%201%201h16c.55%200%201-.45%201-1v-6c0-.55-.45-1-1-1zM4%2016c-1.1%200-2-.9-2-2s.9-2%202-2%202%20.9%202%202-.9%202-2%202zM17%200H1C.45%200%200%20.45%200%201v6c0%20.55.45%201%201%201h16c.55%200%201-.45%201-1V1c0-.55-.45-1-1-1zM4%206c-1.1%200-2-.9-2-2s.9-2%202-2%202%20.9%202%202-.9%202-2%202z%22%2F%3E%0A%3C%2Fsvg%3E%0A\") 50%/100% 100% no-repeat;background-size:18px 18px;display:inline-block;height:18px;margin-right:11px;width:18px}.cm-navbar .users-icon{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2228%22%20height%3D%2219%22%20viewBox%3D%220%200%2028%2019%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M17.4621%2014.9256C17.4621%2014.9256%2012.9574%2013.765%2012.3215%2012.5013C12.0314%2011.9226%2012.3165%2011.1838%2012.6066%2010.6743C12.7395%2010.4954%2012.8681%2010.3064%2012.9926%2010.1074C13.7444%208.90105%2014.3179%207.31351%2014.3767%205.35313C14.4651%202.40244%2012.1869%200.00842222%209.48355%200C9.48194%200%209.47941%200%209.47774%200C9.47607%200%209.47435%200%209.47101%200C6.76839%200.00842222%204.49041%202.40244%204.57868%205.35313C4.63755%207.31351%205.21192%208.90105%205.96276%2010.1074H5.9619H5.96276C6.08725%2010.3065%206.21755%2010.4954%206.34962%2010.6743C6.6389%2011.1838%206.92393%2011.9226%206.63465%2012.5013C5.99979%2013.765%201.49345%2014.9256%201.49345%2014.9256C0.626518%2015.2158%200%2016.0392%200%2017.0076V19H18.9555V17.0076C18.9555%2016.0392%2018.3307%2015.2158%2017.4621%2014.9256Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M26.4692%2016.0375C26.4196%2016.0206%2023.188%2015.1939%2022.7273%2014.2745C22.5145%2013.8545%2022.7239%2013.3162%2022.9349%2012.9451C23.0308%2012.8153%2023.1241%2012.6785%2023.2149%2012.5334C23.7615%2011.6562%2024.1794%2010.5022%2024.2223%209.07666C24.2871%206.9324%2022.6297%205.18959%2020.6612%205.18457C20.6595%205.18457%2020.6586%205.18457%2020.657%205.18457C20.6561%205.18457%2020.6536%205.18457%2020.6528%205.18457C18.685%205.18965%2017.026%206.9324%2017.0907%209.07666C17.1336%2010.5022%2017.5516%2011.6562%2018.0988%2012.5334C18.1896%2012.6785%2018.2838%2012.8153%2018.3788%2012.9451C18.3939%2012.9721%2018.4091%2012.999%2018.4234%2013.026C20.0186%2013.6891%2021.0713%2015.2531%2021.0713%2017.0076V19H27.5546V17.5507C27.5548%2016.8456%2027.0991%2016.2484%2026.4692%2016.0375Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E%0A\") 50%/100% 100% no-repeat;background-size:28px 19px;width:28px}.cm-navbar .alert-icon,.cm-navbar .users-icon{display:inline-block;height:18px!important;height:19px;margin-right:11px}.cm-navbar .alert-icon{background:url(\"data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2218%22%20height%3D%2220%22%20viewBox%3D%220%200%2018%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9%2020C9.6193%2020.0008%2010.2235%2019.8086%2010.7285%2019.4502C11.2335%2019.0917%2011.6143%2018.5849%2011.818%2018H6.182C6.38566%2018.5849%206.76648%2019.0917%207.27151%2019.4502C7.77654%2019.8086%208.3807%2020.0008%209%2020ZM16%2012.586V8C16%204.783%2013.815%202.073%2010.855%201.258C10.562%200.52%209.846%200%209%200C8.154%200%207.438%200.52%207.145%201.258C4.185%202.074%202%204.783%202%208V12.586L0.293001%2014.293C0.199958%2014.3857%200.126171%2014.4959%200.0758854%2014.6172C0.0256001%2014.7386%20-0.000189449%2014.8687%201.04767e-06%2015V16C1.04767e-06%2016.2652%200.105358%2016.5196%200.292894%2016.7071C0.480431%2016.8946%200.734785%2017%201%2017H17C17.2652%2017%2017.5196%2016.8946%2017.7071%2016.7071C17.8946%2016.5196%2018%2016.2652%2018%2016V15C18.0002%2014.8687%2017.9744%2014.7386%2017.9241%2014.6172C17.8738%2014.4959%2017.8%2014.3857%2017.707%2014.293L16%2012.586Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E%0A\") 50%/100% 100% no-repeat;background-size:19px 19px;width:19px}.cm-navbar .support-button .support-icon{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2221%22%20height%3D%2220%22%20viewBox%3D%220%200%2025%2024%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23ffffff%22%20fill-rule%3D%22nonzero%22%20d%3D%22M10.537%2013.201c0%20.693-.575%201.255-1.284%201.255-.709%200-1.284-.561-1.284-1.255%200-.693.575-1.255%201.284-1.255.709%200%201.284.562%201.284%201.255zm5.21-1.255c-.709%200-1.284.562-1.284%201.255%200%20.694.575%201.255%201.284%201.255.709%200%201.284-.561%201.284-1.255%200-.693-.575-1.255-1.284-1.255zm9.253.556v2.385c0%201.198-.993%202.169-2.218%202.169h-1.609C19.58%2021.385%2015.507%2024%2012.5%2024c-3.007%200-7.079-2.615-8.673-6.944h-1.61C.994%2017.056%200%2016.085%200%2014.887v-2.385c0-.825.47-1.541%201.163-1.908.023-3.387%201.032-6.032%203.004-7.86C6.123.92%208.927%200%2012.5%200c3.573%200%206.377.92%208.333%202.733%201.972%201.829%202.981%204.474%203.004%207.86A2.162%202.162%200%200%201%2025%2012.503zm-4.694.707c0-.558-.029-1.082-.072-1.59-.984-.88-2.77-1.549-5.026-1.797.296.326.552.754.707%201.318-1.381-1.065-4.092-.811-6.143-3.192a6.372%206.372%200%200%201-.307-.376l-.003-.004c-.365-.483-.49-.77-.496-.452-.06%202.737-2.044%204.87-4.247%205.171-.014.301-.025.605-.025.922%200%201.157.193%202.211.521%203.161%201.238%201.46%203.281%201.872%205.09%201.981.335-.522%201.089-.887%201.966-.887%201.19%200%202.154.67%202.154%201.495%200%20.826-.965%201.495-2.154%201.495-.915%200-1.695-.397-2.007-.955-1.264-.072-2.653-.283-3.892-.855%201.742%202.51%204.442%203.838%206.128%203.838%202.65%200%207.806-3.273%207.806-9.273zm2.196-2.876c-.14-5.91-3.59-9.032-10.002-9.032-6.411%200-9.861%203.122-10.002%209.032h.853c.312-1.992.971-3.63%201.972-4.89C6.92%203.436%209.333%202.418%2012.5%202.418s5.581%201.018%207.177%203.025c1%201.26%201.66%202.898%201.972%204.89h.853z%22%2F%3E%0A%3C%2Fsvg%3E%0A\") 50%/100% 100% no-repeat;background-size:21px 20px;display:inline-block;height:20px;width:21px}"]
                },] }
    ];
    MenuComponent.propDecorators = {
        role: [{ type: core.HostBinding, args: ['attr.role',] }],
        templates: [{ type: core.ContentChildren, args: [ClTemplateDirective, { descendants: true },] }]
    };

    /**
     * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2020 All Rights Reserved
     *
     * Licensed under CLOUD LINUX LICENSE AGREEMENT
     * http://cloudlinux.com/docs/LICENSE.TXT
     */
    var ɵ0 = { color: 'primary' };
    var MaterialModule = /** @class */ (function () {
        function MaterialModule() {
        }
        return MaterialModule;
    }());
    MaterialModule.decorators = [
        { type: core.NgModule, args: [{
                    providers: [
                        { provide: radio.MAT_RADIO_DEFAULT_OPTIONS, useValue: ɵ0 },
                    ],
                    exports: [
                        a11y.A11yModule,
                        stepper.CdkStepperModule,
                        table.CdkTableModule,
                        tree.CdkTreeModule,
                        dragDrop.DragDropModule,
                        autocomplete.MatAutocompleteModule,
                        badge.MatBadgeModule,
                        bottomSheet.MatBottomSheetModule,
                        button.MatButtonModule,
                        buttonToggle.MatButtonToggleModule,
                        card.MatCardModule,
                        checkbox.MatCheckboxModule,
                        chips.MatChipsModule,
                        stepper$1.MatStepperModule,
                        datepicker.MatDatepickerModule,
                        dialog.MatDialogModule,
                        divider.MatDividerModule,
                        expansion.MatExpansionModule,
                        gridList.MatGridListModule,
                        icon.MatIconModule,
                        input.MatInputModule,
                        list.MatListModule,
                        menu.MatMenuModule,
                        core$1.MatNativeDateModule,
                        paginator.MatPaginatorModule,
                        progressBar.MatProgressBarModule,
                        progressSpinner.MatProgressSpinnerModule,
                        radio.MatRadioModule,
                        core$1.MatRippleModule,
                        select.MatSelectModule,
                        sidenav.MatSidenavModule,
                        slider.MatSliderModule,
                        slideToggle.MatSlideToggleModule,
                        snackBar.MatSnackBarModule,
                        sort.MatSortModule,
                        table$1.MatTableModule,
                        tabs.MatTabsModule,
                        toolbar.MatToolbarModule,
                        tooltip.MatTooltipModule,
                        tree$1.MatTreeModule,
                        portal.PortalModule,
                        scrolling.ScrollingModule,
                    ]
                },] }
    ];

    /**
     * Copyright © Cloud Linux GmbH & Cloud Linux Software, Inc 2010-2020 All Rights Reserved
     *
     * Licensed under CLOUD LINUX LICENSE AGREEMENT
     * http://cloudlinux.com/docs/LICENSE.TXT
     */
    var MenuModule = /** @class */ (function () {
        function MenuModule() {
        }
        return MenuModule;
    }());
    MenuModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        MenuComponent,
                    ],
                    imports: [
                        platformBrowser.BrowserModule,
                        common.CommonModule,
                        menu.MatMenuModule,
                        core$1.MatRippleModule,
                        MaterialModule,
                        forms.FormsModule,
                    ],
                    exports: [
                        MenuComponent
                    ]
                },] }
    ];

    /*
     * Public API Surface of cl-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ClLibModule = ClLibModule;
    exports.MaterialModule = MaterialModule;
    exports.MenuModule = MenuModule;
    exports.ɵ0 = ɵ0;
    exports.ɵa = HeaderComponent;
    exports.ɵb = ClTemplateDirective;
    exports.ɵc = MenuComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sedpro-cl-lib.umd.js.map
