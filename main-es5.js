(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Angular2020\Angular-Shopping\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0Xlu":
    /*!********************************************************!*\
      !*** ./src/app/billgenerate/billgenerate.component.ts ***!
      \********************************************************/

    /*! exports provided: BillgenerateComponent */

    /***/
    function Xlu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BillgenerateComponent", function () {
        return BillgenerateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipe_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../pipe/number-to-words.pipe */
      "nzMe");
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! pdfmake/build/pdfmake */
      "5JmO");
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! pdfmake/build/vfs_fonts */
      "TruH");
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var primeng_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/calendar */
      "eO1q");

      var _c0 = ["mainbill"];

      function BillgenerateComponent_div_12_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Bill No is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function BillgenerateComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, BillgenerateComponent_div_12_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.f.serialno.errors.required);
        }
      }

      function BillgenerateComponent_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var shopList_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", shopList_r10.gstno);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](shopList_r10.name);
        }
      }

      function BillgenerateComponent_div_21_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Shop Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function BillgenerateComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, BillgenerateComponent_div_21_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.f.shopname.errors.required);
        }
      }

      function BillgenerateComponent_div_34_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Mode Of Transport is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function BillgenerateComponent_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, BillgenerateComponent_div_34_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.f.modetransport.errors.required);
        }
      }

      function BillgenerateComponent_div_41_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Bill Date is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function BillgenerateComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, BillgenerateComponent_div_41_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.f.billdate.errors.required);
        }
      }

      function BillgenerateComponent_div_48_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "No of bag is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function BillgenerateComponent_div_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, BillgenerateComponent_div_48_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r6.f.noofbag.errors.required);
        }
      }

      function BillgenerateComponent_div_54_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "No Unit is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function BillgenerateComponent_div_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, BillgenerateComponent_div_54_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r7.f.unit.errors.required);
        }
      }

      function BillgenerateComponent_div_60_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Rate is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function BillgenerateComponent_div_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, BillgenerateComponent_div_60_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r8.f.rate.errors.required);
        }
      }

      var _c1 = function _c1() {
        return ["/shop-details"];
      };

      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5___default.a.pdfMake.vfs;

      var BillgenerateComponent = /*#__PURE__*/function () {
        function BillgenerateComponent(datePipe, numberToWords, fb) {
          _classCallCheck(this, BillgenerateComponent);

          this.datePipe = datePipe;
          this.numberToWords = numberToWords;
          this.fb = fb;
          this.shopDetails = [];
          this.billdate = '';
          this.billNewdate = '';
          this.billNewdateFile = '';
          this.shopname = [];
          this.shopnameVal = [];
          this.shoppaddress = [];
          this.serialno = '';
          this.noofbag = '';
          this.modeoftransport = '';
        }

        _createClass(BillgenerateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.billGenerateForm = this.fb.group({
              serialno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              shopname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              modetransport: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              billdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              noofbag: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              unit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              rate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.shopDetails = [{
              name: 'SUPREME FIREWORKS FACTORY',
              gstno: '33AAJFS4494H1ZW',
              address: "1668/O PKN ROAD,\n        SIVAKASI - 626189\n        State : TAMILNADU"
            }, {
              name: 'SUPREME FIREWORKS',
              gstno: '33AARFS1664H1ZY',
              address: "1668/O PKN ROAD,\n        SIVAKASI - 626189\n        State : TAMILNADU"
            }, {
              name: 'SUPREME PYROTECHNICS',
              gstno: '33ABCFS6262M1ZW',
              address: "1668/O PKN ROAD,\n        SIVAKASI - 626189\n        State : TAMILNADU"
            }, {
              name: 'SUPREME PYRO WORKS',
              gstno: '33ABIFS6160J1ZZ',
              address: "1668/O PKN ROAD,\n        SIVAKASI - 626189\n        State : TAMILNADU"
            }, {
              name: 'SATHEIS FIREWORKS INDUSTRIES',
              gstno: '33AAJFS0756J1Z2',
              address: "1668/O PKN ROAD,\n        SIVAKASI - 626189\n        State : TAMILNADU"
            }, {
              name: 'VASUGI FIREWORKS',
              gstno: '33AAIFV6572A1Z9',
              address: "1668/O PKN ROAD,\n        SIVAKASI - 626189\n        State : TAMILNADU"
            }, {
              name: 'THENMOZHI PYROTECHNICS',
              gstno: '33AAGFT8476R1Z7',
              address: "1668/O PKN ROAD,\n        SIVAKASI - 626189\n        State : TAMILNADU"
            }, {
              name: 'SURYA PYROTECHNIC',
              gstno: '33ACZFS5992A1ZL',
              address: "1668/O PKN ROAD,\n        SIVAKASI - 626189\n        State : TAMILNADU"
            }, {
              name: 'SUPREME FIREWORKS AND COMPANY',
              gstno: '33ADRFS9582K1Z4',
              address: "1668/O PKN ROAD,\n        SIVAKASI - 626189\n        State : TAMILNADU"
            }, {
              name: 'VELAVAN MINI BAZAAR',
              gstno: '33AAFFV1207M1Z9',
              address: "162-C, P.K.S. ARUMUGAM ROAD,\n        SIVAKASI - 626189\n        State : TAMILNADU"
            }, {
              name: 'DURGA FIREWORKS',
              gstno: '33AABFD9193L1Z4',
              address: "SIVAKASI - 626189\n        State : TAMILNADU"
            }];
          }
        }, {
          key: "getShopSelect",
          value: function getShopSelect(args) {
            var _this = this;

            this.gstnovalue = args.target.value;
            var getshop = this.shopDetails.find(function (s) {
              return s.gstno === _this.gstnovalue;
            });
            this.shopname = getshop.name;
            this.shopnameVal = this.shopname;
            this.shoppaddress = getshop.address;
          }
        }, {
          key: "getModeTransport",
          value: function getModeTransport(args) {
            this.modeoftransport = args.target.value;
          }
        }, {
          key: "exportAsPDF",
          value: function exportAsPDF(pdfOption) {
            this.serialno = this.billGenerateForm.controls.serialno.value;
            this.modetransport = this.billGenerateForm.controls.modetransport.value;
            this.billdate = this.billGenerateForm.controls.billdate.value;
            this.noofbag = this.billGenerateForm.controls.noofbag.value;
            this.unit = this.billGenerateForm.controls.unit.value;
            this.rate = this.billGenerateForm.controls.rate.value;
            this.billNewdate = this.datePipe.transform(this.billdate, 'dd.MM.y');
            this.billNewdateFile = this.datePipe.transform(this.billdate, 'ddMMy');
            this.totalvalue = this.unit * this.rate;
            this.gstvaluefind = Math.round(this.totalvalue * 5 / 100 / 2);
            var documentDefinition = {
              content: [{
                style: 'tableExample',
                color: '#555',
                table: {
                  body: [[[{
                    columns: [{
                      text: 'GSTIN : 33BQZPP9671A1Z9'
                    }, [{
                      text: 'Cell: 94427 10107',
                      alignment: 'right'
                    }, {
                      text: '70102 46020',
                      alignment: 'right'
                    }]]
                  }, {
                    text: 'PALANICHAMY TEXTILES',
                    style: 'textileName'
                  }, {
                    text: '5/13, Uranipatti Street',
                    style: 'textileStreet'
                  }, {
                    text: 'SRIVILLIPUTHUR - 626125',
                    style: 'textileCity'
                  }, {
                    columns: [{
                      text: 'No: ' + this.serialno,
                      alignment: 'left'
                    }, {
                      text: 'INVOICE',
                      style: 'invoiceName'
                    }, {
                      text: 'Date:  ' + this.billNewdate,
                      alignment: 'right'
                    }]
                  }, {
                    table: {
                      body: [[{
                        text: "   Details of Receiver (Billed to) details of Consignee Shipped to\n                                Name: ".concat(this.shopname, "\n                                Address: ").concat(this.shoppaddress, "\n                                GSTIN: ").concat(this.gstnovalue),
                        lineHeight: 2,
                        colSpan: 5
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: "\n                                Mode of Transport: ".concat(this.modeoftransport, "\n                                Veh. No ..............................\n                                DL & Time of Supply: ").concat(this.billNewdate, "\n                                Place of Supply .............................."),
                        colSpan: 4,
                        lineHeight: 2
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }], [{
                        text: "S. No",
                        alignment: 'center'
                      }, {
                        text: "Description of Goods",
                        alignment: 'center'
                      }, {
                        text: "HSN\n                              Code",
                        alignment: 'center'
                      }, {
                        text: "No.of\n                              Packages",
                        alignment: 'center'
                      }, {
                        text: "Qty",
                        alignment: 'center'
                      }, {
                        text: "Unit",
                        alignment: 'center'
                      }, {
                        text: "Rate",
                        alignment: 'center'
                      }, {
                        text: "Total Taxable Value",
                        colSpan: 2,
                        alignment: 'center'
                      }, {
                        text: ''
                      }], [{
                        text: "1",
                        margin: [5, 5, 5, 5]
                      }, {
                        text: "CORDED COTTON CONE",
                        margin: [5, 5, 5, 5]
                      }, {
                        text: "5205",
                        margin: [5, 5, 5, 5]
                      }, {
                        text: this.noofbag,
                        margin: [5, 5, 5, 5]
                      }, {
                        text: " "
                      }, {
                        text: this.unit,
                        margin: [5, 5, 5, 5]
                      }, {
                        text: this.rate,
                        margin: [5, 5, 5, 5]
                      }, {
                        text: Math.round(this.totalvalue),
                        margin: [5, 5, 5, 5]
                      }, {
                        text: '00',
                        margin: [5, 5, 5, 5]
                      }], [{
                        text: ' ',
                        margin: [5, 5, 5, 5]
                      }, '', '', '', '', '', '', '', ''], [{
                        text: ' ',
                        margin: [5, 5, 5, 5]
                      }, '', '', '', '', '', '', '', ''], [{
                        text: ' ',
                        margin: [5, 5, 5, 5]
                      }, '', '', '', '', '', '', '', ''], [{
                        text: ' ',
                        margin: [5, 5, 5, 5]
                      }, '', '', '', '', '', '', '', ''], [{
                        text: ' ',
                        margin: [5, 5, 5, 5]
                      }, '', '', '', '', '', '', '', ''], [{
                        text: ' ',
                        margin: [5, 5, 5, 5]
                      }, '', '', '', '', '', '', '', ''], [{
                        text: "\n                              Rupees:  " + this.numberToWords.transform(Math.round(this.totalvalue + 2 * this.gstvaluefind)).toUpperCase(),
                        colSpan: 5,
                        rowSpan: 4
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: 'Total',
                        colSpan: 2,
                        alignment: 'right'
                      }, {
                        text: ''
                      }, {
                        text: Math.round(this.totalvalue),
                        alignment: 'right'
                      }, {
                        text: '00',
                        alignment: 'right'
                      }], [{
                        text: '',
                        colSpan: 5
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: 'CGST 2.5 %',
                        colSpan: 2,
                        alignment: 'right'
                      }, {
                        text: ''
                      }, {
                        text: this.gstvaluefind,
                        alignment: 'right'
                      }, {
                        text: '00',
                        alignment: 'right'
                      }], [{
                        text: '',
                        colSpan: 5
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: 'SGST 2.5 %',
                        alignment: 'right',
                        colSpan: 2
                      }, {
                        text: ''
                      }, {
                        text: this.gstvaluefind,
                        alignment: 'right'
                      }, {
                        text: '00',
                        alignment: 'right'
                      }], [{
                        text: '',
                        colSpan: 5
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ' ',
                        colSpan: 2
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }], [{
                        text: 'Eway Bill No:',
                        colSpan: 5
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: 'Invoice Total',
                        alignment: 'right',
                        colSpan: 2
                      }, {
                        text: ''
                      }, {
                        text: Math.round(this.totalvalue + 2 * this.gstvaluefind),
                        alignment: 'right'
                      }, {
                        text: '00',
                        alignment: 'right'
                      }], [{
                        text: "Certified that the Particulars given above are true and correct",
                        colSpan: 5
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: "Electronic Reference Number :",
                        colSpan: 4
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }], [{
                        text: "PALANICHAMY TEXTILE\n                            ACC NO:  328150050800034\n                            IFSC Code: TMBL0000328\n                            TAMILNAD MERCANTILE BANK, SRIVILLIPUTHUR\n                            E & O.E.,",
                        colSpan: 5,
                        lineHeight: 2
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: "For PALANICHAMY TEXTILES\n\n\n\n\n\n\n\n                            Authorized Signatory",
                        colSpan: 4
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }, {
                        text: ''
                      }]]
                    }
                  }]]]
                },
                layout: {
                  paddingLeft: function paddingLeft(i, node) {
                    return 5;
                  },
                  paddingRight: function paddingRight(i, node) {
                    return 5;
                  },
                  paddingTop: function paddingTop(i, node) {
                    return 5;
                  },
                  paddingBottom: function paddingBottom(i, node) {
                    return 5;
                  }
                }
              }],
              styles: {
                textileName: {
                  fontSize: 20,
                  bold: true,
                  alignment: 'center',
                  margin: [0, 20, 0, 5]
                },
                tableExample: {
                  fontSize: 10,
                  bold: true
                },
                textileStreet: {
                  alignment: 'center'
                },
                textileCity: {
                  alignment: 'center',
                  margin: [0, 0, 0, 20],
                  border: '1px solid #000'
                },
                invoiceName: {
                  alignment: 'center',
                  color: '#fff',
                  background: '#000',
                  border: '1px solid #000'
                }
              }
            };

            if (pdfOption === 'open') {
              pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(documentDefinition).open();
            } else {
              pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(documentDefinition).download(this.serialno + '.' + this.shopnameVal + '_' + this.billNewdateFile + '.pdf');
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.billGenerateForm.controls;
          }
        }]);

        return BillgenerateComponent;
      }();

      BillgenerateComponent.??fac = function BillgenerateComponent_Factory(t) {
        return new (t || BillgenerateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_pipe_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_3__["NumberToWordsPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      BillgenerateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: BillgenerateComponent,
        selectors: [["app-billgenerate"]],
        viewQuery: function BillgenerateComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.mainbill = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _pipe_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_3__["NumberToWordsPipe"]])],
        decls: 67,
        vars: 11,
        consts: [[1, "container"], [1, "pull-right", 3, "routerLink"], [3, "formGroup", "submit"], ["bform", "ngForm"], [1, "form-input-field"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "serialno"], ["type", "text", "name", "serialno", "value", "", "formControlName", "serialno", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["for", "shopname"], ["formControlName", "shopname", 1, "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "modetransport"], ["formControlName", "modetransport", 1, "form-control", 3, "change"], ["value", "JEYAVILAS"], ["value", "ETC"], ["for", "billdate"], ["formControlName", "billdate", "dateFormat", "dd.mm.yy"], [1, "col-md-4"], ["for", "noofbag"], ["type", "text", "name", "noofbag", "value", "", "formControlName", "noofbag", 1, "form-control"], ["for", "unit"], ["type", "text", "name", "unit", "value", "", "formControlName", "unit", 1, "form-control"], ["for", "rate"], ["type", "text", "name", "rate", "value", "", "formControlName", "rate", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "submit"], ["type", "submit", 1, "btn", "btn-primary"], [1, "text-danger"], [4, "ngIf"], [3, "value"]],
        template: function BillgenerateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Add Shop Deatils");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function BillgenerateComponent_Template_form_submit_3_listener() {
              return ctx.billGenerateForm.valid && ctx.exportAsPDF("open");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Bill No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, BillgenerateComponent_div_12_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Shop Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function BillgenerateComponent_Template_select_change_17_listener($event) {
              return ctx.getShopSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Please select shop name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, BillgenerateComponent_option_20_Template, 2, 2, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, BillgenerateComponent_div_21_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Mode of Transport");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "select", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function BillgenerateComponent_Template_select_change_27_listener($event) {
              return ctx.getModeTransport($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Please Select Mode Of Transport");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "JEYAVILAS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "ETC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, BillgenerateComponent_div_34_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Bill Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "p-calendar", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, BillgenerateComponent_div_41_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "No Of Bag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, BillgenerateComponent_div_48_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Unit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, BillgenerateComponent_div_54_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](60, BillgenerateComponent_div_60_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function BillgenerateComponent_Template_button_submit_62_listener() {
              return ctx.billGenerateForm.valid && ctx.exportAsPDF("open");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Open Pdf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Download Pdf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.billGenerateForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r0.submitted && ctx.f.serialno.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.shopDetails);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r0.submitted && ctx.f.shopname.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r0.submitted && ctx.f.modetransport.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r0.submitted && ctx.f.billdate.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r0.submitted && ctx.f.noofbag.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r0.submitted && ctx.f.unit.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r0.submitted && ctx.f.rate.errors);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], primeng_calendar__WEBPACK_IMPORTED_MODULE_7__["Calendar"]],
        styles: [".form-input-field[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  padding: 25px;\n  min-height: 150px;\n  font-size: 15px;\n  margin: 0px auto;\n}\n\n.main-panel[_ngcontent-%COMP%] {\n  width: 850px;\n  border: 1px solid #000;\n  padding: 25px;\n  min-height: 150px;\n  font-size: 15px;\n  margin: 0px auto;\n}\n\n.main-panel[_ngcontent-%COMP%]   .top-row[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.main-panel[_ngcontent-%COMP%]   .mobile-number[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.main-panel[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.main-panel[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   .textile-name[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: bold;\n}\n\n.main-panel[_ngcontent-%COMP%]   .invoice-bill[_ngcontent-%COMP%] {\n  height: 22px;\n}\n\n.main-panel[_ngcontent-%COMP%]   .invoice-bill[_ngcontent-%COMP%]   .serial-no[_ngcontent-%COMP%] {\n  width: 360px;\n}\n\n.main-panel[_ngcontent-%COMP%]   .invoice-bill[_ngcontent-%COMP%]   .invoice-name[_ngcontent-%COMP%] {\n  background-color: #000;\n  color: #fff;\n}\n\n.main-panel[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  border-top: 1px solid #000;\n  border-left: 1px solid #000;\n  border-right: 1px solid #000;\n  line-height: 30px;\n}\n\n.main-panel[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .address-left[_ngcontent-%COMP%] {\n  border-right: 1px solid #000;\n}\n\n.main-panel[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .address-left[_ngcontent-%COMP%]   .details-receiver[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.main-panel[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .address-right[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.main-panel[_ngcontent-%COMP%]   .detailed-price[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.main-panel[_ngcontent-%COMP%]   .detailed-price[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  left: 5px;\n}\n\n.main-panel[_ngcontent-%COMP%]   .detailed-price[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  height: 30px;\n  border: 1px solid #000;\n}\n\n.main-panel[_ngcontent-%COMP%]   .detailed-price[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .left-align[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.main-panel[_ngcontent-%COMP%]   .detailed-price[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.main-panel[_ngcontent-%COMP%]   .our-address[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #000;\n  border-left: 1px solid #000;\n  border-right: 1px solid #000;\n  line-height: 30px;\n}\n\n.main-panel[_ngcontent-%COMP%]   .our-address[_ngcontent-%COMP%]   .our-address-right[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.main-panel[_ngcontent-%COMP%]   .our-address[_ngcontent-%COMP%]   .our-address-right[_ngcontent-%COMP%]   .authorized[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlsbGdlbmVyYXRlL2JpbGxnZW5lcmF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFERTtFQUNFLFlBQUE7QUFHSjs7QUFERTtFQUNFLGlCQUFBO0FBR0o7O0FBREU7RUFDRSxrQkFBQTtBQUdKOztBQUZJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBSU47O0FBREU7RUFDRSxZQUFBO0FBR0o7O0FBRkk7RUFDRSxZQUFBO0FBSU47O0FBRkk7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUFJTjs7QUFERTtFQUNFLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBRkk7RUFDRSw0QkFBQTtBQUlOOztBQUhNO0VBQ0Usa0JBQUE7QUFLUjs7QUFGSTtFQUNFLGdCQUFBO0FBSU47O0FBQUk7RUFDRSxrQkFBQTtBQUVOOztBQURNO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0FBR1I7O0FBRE07RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUdSOztBQURNO0VBQ0UsZ0JBQUE7QUFHUjs7QUFETTtFQUNFLGlCQUFBO0FBR1I7O0FBQ0U7RUFDRSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUFJO0VBQ0UsZUFBQTtBQUVOOztBQURNO0VBQ0UsZ0JBQUE7QUFHUiIsImZpbGUiOiJzcmMvYXBwL2JpbGxnZW5lcmF0ZS9iaWxsZ2VuZXJhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1pbnB1dC1maWVsZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcbi5tYWluLXBhbmVsIHtcclxuICB3aWR0aDogODUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIC50b3Atcm93IHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbiAgLm1vYmlsZS1udW1iZXIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5hZGRyZXNzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC50ZXh0aWxlLW5hbWUge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW52b2ljZS1iaWxsIHtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIC5zZXJpYWwtbm8ge1xyXG4gICAgICB3aWR0aDogMzYwcHg7XHJcbiAgICB9XHJcbiAgICAuaW52b2ljZS1uYW1lIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tYWluLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAuYWRkcmVzcy1sZWZ0IHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcclxuICAgICAgLmRldGFpbHMtcmVjZWl2ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFkZHJlc3MtcmlnaHQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZGV0YWlsZWQtcHJpY2Uge1xyXG4gICAgdHIge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRoIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgICAgfVxyXG4gICAgICAubGVmdC1hbGlnbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgICAucmlnaHQtYWxpZ24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5vdXItYWRkcmVzcyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzAwMDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIC5vdXItYWRkcmVzcy1yaWdodCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgLmF1dGhvcml6ZWQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BillgenerateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-billgenerate',
            templateUrl: './billgenerate.component.html',
            styleUrls: ['./billgenerate.component.scss'],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _pipe_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_3__["NumberToWordsPipe"]]
          }]
        }], function () {
          return [{
            type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
          }, {
            type: _pipe_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_3__["NumberToWordsPipe"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, {
          mainbill: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mainbill']
          }]
        });
      })();
      /***/

    },

    /***/
    "6SU1":
    /*!******************************************************!*\
      !*** ./src/app/shopdetails/shopdetails.component.ts ***!
      \******************************************************/

    /*! exports provided: ShopdetailsComponent */

    /***/
    function SU1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShopdetailsComponent", function () {
        return ShopdetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ShopdetailsComponent_div_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "First Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ShopdetailsComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ShopdetailsComponent_div_10_div_1_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.f.gstno.errors.required);
        }
      }

      function ShopdetailsComponent_div_15_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Shop Name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ShopdetailsComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ShopdetailsComponent_div_15_div_1_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.f.shopname.errors.required);
        }
      }

      var _c0 = function _c0() {
        return ["/bill-generate"];
      };

      var ShopdetailsComponent = /*#__PURE__*/function () {
        function ShopdetailsComponent(fb) {
          _classCallCheck(this, ShopdetailsComponent);

          this.fb = fb;
        }

        _createClass(ShopdetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.shopDetailsForm = this.fb.group({
              gstno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              shopname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "addShopDetails",
          value: function addShopDetails() {
            console.log(this.shopDetailsForm.value);
          }
        }, {
          key: "f",
          get: function get() {
            return this.shopDetailsForm.controls;
          }
        }]);

        return ShopdetailsComponent;
      }();

      ShopdetailsComponent.??fac = function ShopdetailsComponent_Factory(t) {
        return new (t || ShopdetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      ShopdetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ShopdetailsComponent,
        selectors: [["app-shopdetails"]],
        decls: 19,
        vars: 5,
        consts: [[1, "container"], [1, "pull-right", 3, "routerLink"], [3, "formGroup", "ngSubmit"], ["form", "ngForm"], [1, "form-input-field"], [1, "form-group"], ["for", "serialno"], ["type", "text", "name", "gstno", "formControlName", "gstno", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["for", "shopname"], ["type", "text", "name", "shopname", "formControlName", "shopname", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "text-danger"], [4, "ngIf"]],
        template: function ShopdetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Bill Generate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ShopdetailsComponent_Template_form_ngSubmit_3_listener() {
              return ctx.shopDetailsForm.valid && ctx.addShopDetails();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "GST No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, ShopdetailsComponent_div_10_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Shop Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, ShopdetailsComponent_div_15_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Add Shop Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.shopDetailsForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r0.submitted && ctx.f.gstno.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r0.submitted && ctx.f.shopname.errors);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BkZXRhaWxzL3Nob3BkZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ShopdetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-shopdetails',
            templateUrl: './shopdetails.component.html',
            styleUrls: ['./shopdetails.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Angular-Shopping';
      };

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _pipe_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pipe/number-to-words.pipe */
      "nzMe");
      /* harmony import */


      var primeng_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! primeng/calendar */
      "eO1q");
      /* harmony import */


      var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/autocomplete */
      "V5BG");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _billgenerate_billgenerate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./billgenerate/billgenerate.component */
      "0Xlu");
      /* harmony import */


      var _shopdetails_shopdetails_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./shopdetails/shopdetails.component */
      "6SU1");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _billgenerate_billgenerate_component__WEBPACK_IMPORTED_MODULE_9__["BillgenerateComponent"], _pipe_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_4__["NumberToWordsPipe"], _shopdetails_shopdetails_component__WEBPACK_IMPORTED_MODULE_10__["ShopdetailsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _billgenerate_billgenerate_component__WEBPACK_IMPORTED_MODULE_9__["BillgenerateComponent"], _pipe_number_to_words_pipe__WEBPACK_IMPORTED_MODULE_4__["NumberToWordsPipe"], _shopdetails_shopdetails_component__WEBPACK_IMPORTED_MODULE_10__["ShopdetailsComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "nzMe":
    /*!**********************************************!*\
      !*** ./src/app/pipe/number-to-words.pipe.ts ***!
      \**********************************************/

    /*! exports provided: NumberToWordsPipe */

    /***/
    function nzMe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NumberToWordsPipe", function () {
        return NumberToWordsPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NumberToWordsPipe = /*#__PURE__*/function () {
        function NumberToWordsPipe() {
          _classCallCheck(this, NumberToWordsPipe);

          this.a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
          this.b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        }

        _createClass(NumberToWordsPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (value) {
              var num = Number(value);

              if (num) {
                if ((num = num.toString()).length > 9) {
                  return 'We are not the Iron Bank, you can lower down the stakes :)';
                }

                var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);

                if (!n) {
                  return '';
                }

                var str = '';
                str += Number(n[1]) !== 0 ? (this.a[Number(n[1])] || this.b[n[1][0]] + ' ' + this.a[n[1][1]]) + 'crore ' : '';
                str += Number(n[2]) !== 0 ? (this.a[Number(n[2])] || this.b[n[2][0]] + ' ' + this.a[n[2][1]]) + 'lakh ' : '';
                str += Number(n[3]) !== 0 ? (this.a[Number(n[3])] || this.b[n[3][0]] + ' ' + this.a[n[3][1]]) + 'thousand ' : '';
                str += Number(n[4]) !== 0 ? (this.a[Number(n[4])] || this.b[n[4][0]] + ' ' + this.a[n[4][1]]) + 'hundred ' : '';
                str += Number(n[5]) !== 0 ? (str !== '' ? 'and ' : '') + (this.a[Number(n[5])] || this.b[n[5][0]] + ' ' + this.a[n[5][1]]) + 'only' : '';
                return str;
              } else {
                return '';
              }
            } else {
              return '';
            }
          }
        }]);

        return NumberToWordsPipe;
      }();

      NumberToWordsPipe.??fac = function NumberToWordsPipe_Factory(t) {
        return new (t || NumberToWordsPipe)();
      };

      NumberToWordsPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({
        name: "numberToWords",
        type: NumberToWordsPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NumberToWordsPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'numberToWords'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _billgenerate_billgenerate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./billgenerate/billgenerate.component */
      "0Xlu");
      /* harmony import */


      var _shopdetails_shopdetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shopdetails/shopdetails.component */
      "6SU1");

      var routes = [{
        path: '',
        component: _billgenerate_billgenerate_component__WEBPACK_IMPORTED_MODULE_2__["BillgenerateComponent"],
        pathMatch: 'full'
      }, {
        path: 'bill-generate',
        component: _billgenerate_billgenerate_component__WEBPACK_IMPORTED_MODULE_2__["BillgenerateComponent"]
      }, {
        path: 'shop-details',
        component: _shopdetails_shopdetails_component__WEBPACK_IMPORTED_MODULE_3__["ShopdetailsComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map