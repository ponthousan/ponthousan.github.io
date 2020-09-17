import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DatePipe } from '@angular/common';
import { NumberToWordsPipe } from '../pipe/number-to-words.pipe';
import { NgModule } from '@angular/core';



import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-billgenerate',
  templateUrl: './billgenerate.component.html',
  styleUrls: ['./billgenerate.component.scss'],
  providers: [DatePipe, NumberToWordsPipe]
})

export class BillgenerateComponent implements OnInit {
  @ViewChild('mainbill') mainbill: ElementRef;
  constructor(private datePipe: DatePipe, private numberToWords: NumberToWordsPipe, private fb: FormBuilder) { }
  billGenerateForm: FormGroup;

  shopDetails: any = [];
  gstnovalue: string;
  billdate = '';
  billNewdate = '';
  billNewdateFile = '';
  shopname = [];
  shopnameVal = [];
  shoppaddress = [];
  serialno = '';
  modetransport: string;
  rate: number;
  noofbag = '';
  unit: number;
  totalvalue: number;
  modeoftransport = '';
  gstvaluefind: number;
  ngOnInit() {
    this.billGenerateForm = this.fb.group({
      serialno: ['', Validators.required],
      shopname: ['', Validators.required],
      modetransport: ['', Validators.required],
      billdate: ['', Validators.required],
      noofbag: ['', Validators.required],
      unit: ['', Validators.required],
      rate: ['', Validators.required]
    });
    this.shopDetails = [
      {
        name: 'SUPREME FIREWORKS FACTORY',
        gstno: '33AAJFS4494H1ZW',
        address: `1668/O PKN ROAD,
        SIVAKASI - 626189
        State : TAMILNADU`
      },
      {
        name: 'SUPREME FIREWORKS',
        gstno: '33AARFS1664H1ZY',
        address: `1668/O PKN ROAD,
        SIVAKASI - 626189
        State : TAMILNADU`
      },
      {
        name: 'SUPREME PYROTECHNICS',
        gstno: '33ABCFS6262M1ZW',
        address: `1668/O PKN ROAD,
        SIVAKASI - 626189
        State : TAMILNADU`
      },
      {
        name: 'SUPREME PYRO WORKS',
        gstno: '33ABIFS6160J1ZZ',
        address: `1668/O PKN ROAD,
        SIVAKASI - 626189
        State : TAMILNADU`
      },
      {
        name: 'SATHEIS FIREWORKS INDUSTRIES',
        gstno: '33AAJFS0756J1Z2',
        address: `1668/O PKN ROAD,
        SIVAKASI - 626189
        State : TAMILNADU`
      },
      {
        name: 'VASUGI FIREWORKS',
        gstno: '33AAIFV6572A1Z9',
        address: `1668/O PKN ROAD,
        SIVAKASI - 626189
        State : TAMILNADU`
      },
      {
        name: 'THENMOZHI PYROTECHNICS',
        gstno: '33AAGFT8476R1Z7',
        address: `1668/O PKN ROAD,
        SIVAKASI - 626189
        State : TAMILNADU`
      },
      {
        name: 'SURYA PYROTECHNIC',
        gstno: '33ACZFS5992A1ZL',
        address: `1668/O PKN ROAD,
        SIVAKASI - 626189
        State : TAMILNADU`
      },
      {
        name: 'SUPREME FIREWORKS AND COMPANY',
        gstno: '33ADRFS9582K1Z4',
        address: `1668/O PKN ROAD,
        SIVAKASI - 626189
        State : TAMILNADU`
      },
      {
        name: 'VELAVAN MINI BAZAAR',
        gstno: '33AAFFV1207M1Z9',
        address: `162-C, P.K.S. ARUMUGAM ROAD,
        SIVAKASI - 626189
        State : TAMILNADU`
      },
      {
        name: 'DURGA FIREWORKS',
        gstno: '33AABFD9193L1Z4',
        address: `SIVAKASI - 626189
        State : TAMILNADU`
      }
    ];
  }
  getShopSelect(args) {
    this.gstnovalue = args.target.value;
    const getshop = this.shopDetails.find(s => s.gstno === this.gstnovalue);
    this.shopname = getshop.name;
    this.shopnameVal = this.shopname;
    this.shoppaddress = getshop.address;
  }
  getModeTransport(args) {
    this.modeoftransport = args.target.value;
  }
  get f() {
    return this.billGenerateForm.controls;
  }

  exportAsPDF(pdfOption: any) {
  this.serialno = this.billGenerateForm.controls.serialno.value;
  this.modetransport = this.billGenerateForm.controls.modetransport.value;
  this.billdate = this.billGenerateForm.controls.billdate.value;
  this.noofbag = this.billGenerateForm.controls.noofbag.value;
  this.unit = this.billGenerateForm.controls.unit.value;
  this.rate = this.billGenerateForm.controls.rate.value;
  this.billNewdate = this.datePipe.transform(this.billdate, 'dd.MM.y');
  this.billNewdateFile = this.datePipe.transform(this.billdate, 'ddMMy');
  this.totalvalue = this.unit * this.rate;
  this.gstvaluefind = Math.round(((this.totalvalue * 5) / 100) / 2)
  const documentDefinition = {
    content: [
      {
        style: 'tableExample',
        color: '#555',
        table: {
            body: [
                [
                    [
                    {
                      columns: [{
                          text: 'GSTIN : 33BQZPP9671A1Z9'
                        },
                        [{
                          text: 'Cell: 94427 10107',
                          alignment: 'right'
                        },
                        {
                          text: '70102 46020',
                          alignment: 'right'
                        }]]
                      },
                      {
                        text: 'PALANICHAMY TEXTILES',
                        style: 'textileName'
                      },
                      {
                        text: '5/13, Uranipatti Street',
                        style: 'textileStreet'
                      },
                      {
                        text: 'SRIVILLIPUTHUR - 626125',
                        style: 'textileCity'
                      },
                      {
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
                      },
                      {
                        table: {
                          body: [
                            [{
                                text: `   Details of Receiver (Billed to) details of Consignee Shipped to
                                Name: ${this.shopname}
                                Address: ${this.shoppaddress}
                                GSTIN: ${this.gstnovalue}`,
                                lineHeight: 2,
                                colSpan: 5
                              },
                              {
                                text: ''
                              },
                              {
                                text: ''
                              } ,
                              {
                                text: ''
                              },
                              {
                                text: ''
                              },
                              {
                                text: `
                                Mode of Transport: ${this.modeoftransport}
                                Veh. No ..............................
                                DL & Time of Supply: ${this.billNewdate}
                                Place of Supply ..............................`,
                                colSpan: 4,
                                lineHeight: 2,
                              },
                              {
                                text: ''
                              },
                              {
                                text: ''
                              },
                              {
                                text: ''
                              }
                            ],
                            [{
                              text: `S. No`,
                              alignment: 'center'
                            },
                            {
                              text: `Description of Goods`,
                              alignment: 'center'
                            },
                            {
                              text: `HSN
                              Code`,
                              alignment: 'center'
                            },
                            {
                              text: `No.of
                              Packages`,
                              alignment: 'center'
                            },
                            {
                              text: `Qty`,
                              alignment: 'center'
                            },
                            {
                              text: `Unit`,
                              alignment: 'center'
                            },
                            {
                              text: `Rate`,
                              alignment: 'center'
                            },
                            {
                              text: `Total Taxable Value`,
                              colSpan: 2,
                              alignment: 'center'
                            },
                            {
                              text: ''
                            }],
                            [{
                              text: `1`,
                              margin: [5, 5, 5, 5]
                            },
                            {
                              text: `CORDED COTTON CONE`,
                              margin: [5, 5, 5, 5]
                            },
                            {
                              text: `5205`,
                              margin: [5, 5, 5, 5]
                            },
                            {
                              text: this.noofbag,
                              margin: [5, 5, 5, 5]
                            },
                            {
                              text: ` `,
                            },
                            {
                              text: this.unit,
                              margin: [5, 5, 5, 5]
                            },
                            {
                              text: this.rate,
                              margin: [5, 5, 5, 5]
                            },
                            {
                              text: Math.round(this.totalvalue),
                              margin: [5, 5, 5, 5]
                            }, { text: '00', margin: [5, 5, 5, 5] } ],
                            [{text: ' ', margin: [5, 5, 5, 5]}, '', '', '', '', '', '', '', ''],
                            [{text: ' ', margin: [5, 5, 5, 5]}, '', '', '', '', '', '', '', ''],
                            [{text: ' ', margin: [5, 5, 5, 5]}, '', '', '', '', '', '', '', ''],
                            [{text: ' ', margin: [5, 5, 5, 5]}, '', '', '', '', '', '', '', ''],
                            [{text: ' ', margin: [5, 5, 5, 5]}, '', '', '', '', '', '', '', ''],
                            [{text: ' ', margin: [5, 5, 5, 5]}, '', '', '', '', '', '', '', ''],
                            [{
                              text: `
                              Rupees:  ` + this.numberToWords.transform(Math.round(this.totalvalue + (2 * this.gstvaluefind)))
                              .toUpperCase(),
                              colSpan: 5,
                              rowSpan: 4,
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
                            }],
                            [{
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
                            }],
                            [{
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
                            },  {
                              text: this.gstvaluefind,
                              alignment: 'right'
                            }, {
                              text: '00',
                              alignment: 'right'
                            }],
                            [{
                              text: '',
                              colSpan: 5
                            },  {
                              text: ''
                            }, {
                              text: ''
                            }, {
                              text: ''
                            }, {
                              text: ''
                            }, {
                              text: ' ',
                              colSpan: 2,
                            }, {
                              text: ''
                            }, {
                              text: ''
                            }, {
                              text: ''
                            }],
                            [{
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
                              text: Math.round(this.totalvalue + (2 * this.gstvaluefind)),
                              alignment: 'right'
                            }, {
                              text: '00',
                              alignment: 'right'
                            }],
                            [{
                              text: `Certified that the Particulars given above are true and correct`,
                              colSpan: 5
                            },
                            {
                              text: ''
                            },
                            {
                              text: ''
                            } ,
                            {
                              text: ''
                            },
                            {
                              text: ''
                            },
                            {
                              text: `Electronic Reference Number :`,
                              colSpan: 4
                            },
                            {
                              text: ''
                            },
                            {
                              text: ''
                            },
                            {
                              text: ''
                            }
                          ],
                          [{
                            text: `PALANICHAMY TEXTILE
                            ACC NO:  328150050800034
                            IFSC Code: TMBL0000328
                            TAMILNAD MERCANTILE BANK, SRIVILLIPUTHUR
                            E & O.E.,`,
                            colSpan: 5,
                            lineHeight: 2
                          },
                          {
                            text: ''
                          },
                          {
                            text: ''
                          } ,
                          {
                            text: ''
                          },
                          {
                            text: ''
                          },
                          {
                            text: `For PALANICHAMY TEXTILES







                            Authorized Signatory`,
                            colSpan: 4,
                          },
                          {
                            text: ''
                          },
                          {
                            text: ''
                          },
                          {
                            text: ''
                          }
                        ],
                        ]
                        }
                      },
                    ]
                ]
            ]
        },
        layout: {
          paddingLeft: (i, node) => 5,
          paddingRight: (i, node) => 5,
          paddingTop: (i, node) => 5,
          paddingBottom: (i, node) => 5,
      }
      },
    ],
    styles: {
      textileName: {
        fontSize: 20,
        bold: true,
        alignment: 'center',
        margin: [0, 20, 0, 5],
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
        border: '1px solid #000',
      },
      invoiceName: {
        alignment: 'center',
        color: '#fff',
        background: '#000',
        border: '1px solid #000',
      }
    }
};
  if (pdfOption === 'open') {
    pdfMake.createPdf(documentDefinition).open();
  } else {
    pdfMake.createPdf(documentDefinition).download(this.serialno + '.' + this.shopnameVal + '_' + this.billNewdateFile + '.pdf');
  }
  }
}
