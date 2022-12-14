import xlsx from "fs";

const xlsx = requrie('xlsx');
const workbook = xlsx.readFile(__dirname + '2022_union.xlsx');

const json = {};
let i = workbook.SheetNames.length;

while (i--) {
    const sheetname = workbook.SheetNames[i];
    json[sheetname] = xlsx.utils.sheet_to_json(workbook.Sheets[sheetname]);
}

const fs = require('fs');
fs.writeFile('시트1.json', JSON.stringify(json["시트1"]));