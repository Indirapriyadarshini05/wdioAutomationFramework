const { PdfReader } = require("pdfreader");
const readExcelFile = require('read-excel-file/node');
const { parse } = require("csv-parse");
var readTextFile = require('read-text-file');
const fs = require("fs");

describe('File readers', () => {
    pdffilepath = './test/input/word.pdf';
    excelfilepath = './test/input/Excel.xlsx';
    csvfilepath = './test/input/importData.csv';
    textfilepath = './test/input/text.txt';

    it("Reading PDF File", async () => {
        new PdfReader().parseFileItems(pdffilepath, function (err,item) {
            if (item && item.text)
                console.log(item.text);
        });
    });

    it("Reading Excel File", async () => {
        readExcelFile(fs.createReadStream(excelfilepath)).then((rows)=>{
            console.log(rows);
        })
    });

    it("Reading csv File", async () => {
        
        fs.createReadStream(csvfilepath)
        .pipe(parse({ delimiter: ",", from_line: 1 }))
        .on("data", function (row) {
          console.log(row);
        })
        .on("error", function (error) {
          console.log(error.message);
        })
        .on("end", function () {
          console.log("finished");
        });
        
    });
    it("read text file",async()=>{

        var contents = readTextFile.readSync(textfilepath);
        console.log(contents);
    })

});
