import {
    State,
    Main,
    Diagnosis,
    Therapy,
    MedHistory,
    PE,
    Examination,
    Blood,
    Urine,
    Radiology,
    ABG
} from "./enums";

import {
    DBJson
} from "./types";

import * as fs from 'fs';
import * as XLSX from "xlsx";

import json from "./db.json";

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const xlsxPath = path.join(__dirname, "./db.xlsx");
const jsonPath = path.join(__dirname, "./db.json");

const transpose = (matrix: Array<Array<string>>) => {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
}

const loadInternal = () => {

    // read data from db.xlsx
    let workbook: XLSX.WorkBook = XLSX.readFile(xlsxPath);
    let sheetNames: Array<string> = workbook.SheetNames;
    
    let writeDb: DBJson = {};

    for ( let sheetName of sheetNames ){
        // extract one sheet at a time and translate to js document type
        let sheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
        let json: Array<Array<string>> = XLSX.utils.sheet_to_json(sheet, { header:1 });
        json = transpose(json);

        // group two columns to form a dictionary
        let sheetDic: { [key: string]: { [key: string]: string } } = {};
        for (let i = 0; i < json.length; i += 2){
            let dic: { [key: string]: string } = {};
            let keys = json[i];
            let values = json[i+1];
            if (values === undefined) break;
            for (let j = 1; j < keys.length; j++){
                if (keys[j] === undefined) break;
                dic[keys[j]] = (values[j] === undefined)?"-":values[j];
            }
            sheetDic[keys[0]] = dic;
        }

        writeDb[sheetName] = sheetDic;
    }

    return writeDb;
};

export default () => {
    // if dev mode convert to json
    // if production read json
    const env = process.env.NODE_ENV;
    if (env == "development"){
        const writeDb: DBJson = loadInternal();
        fs.writeFile(jsonPath, JSON.stringify(writeDb, null, 4), () => {
            console.log("updated db.json");
        });
        return writeDb;
    } else {
        return json;
    }
}
