import {
    DBJson
} from "./types";

import * as fs from 'fs';
import * as XLSX from "xlsx";

import json from "./db.json";

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import * as enums from './enums';

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

    // properties
    const date = new Date();
    let version = 0;
    if (json.hasOwnProperty("DBPROPS")){
        version = json.DBPROPS.props.version + 1;
    }

    writeDb.DBPROPS = {
        props: {
            version: version,
            dateModified: date.toString()
        }
    }

    // data
    for ( let sheetName of sheetNames ){
        // extract one sheet at a time and translate to js document type
        let sheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
        let jsonConverted: Array<Array<string>> = XLSX.utils.sheet_to_json(sheet, { header:1 });
        jsonConverted = transpose(jsonConverted);

        // group two columns to form a dictionary
        let sheetDic: { [key: string]: { [key: string]: string } } = {};
        for (let i = 0; i < jsonConverted.length; i += 2){
            let dic: { [key: string]: string } = {};
            let keys = jsonConverted[i];
            let values = jsonConverted[i+1];
            if (values === undefined) break;
            for (let j = 1; j < keys.length; j++){
                if (keys[j] === undefined) break;
                dic[keys[j]] = (values[j] === undefined || values[j] === null || values[j] === "Nil")?"-":values[j];
                if (Object.keys(enums.Units).indexOf(keys[j]) !== -1){
                    dic[keys[j]] += " " + enums.Units[keys[j] as keyof typeof enums.Units];
                }
            }
            sheetDic[keys[0]] = dic;
        }

        writeDb[sheetName.replaceAll(" ", "")] = sheetDic;
    }

    if (!writeDb.hasOwnProperty("Template")){
        console.error("Parsing XLSX Failed: No 'Template' Sheet Exist.");
        return json;
    }

    return writeDb;
};

export default (mode = "production") => {
    // if dev mode convert to json
    // if production read json
    if (mode === "development"){
        const writeDb: DBJson = loadInternal();
        fs.writeFile(jsonPath, JSON.stringify(writeDb, null, 4), () => {
            console.log("updated db.json");
        });
        return writeDb;
    } else {
        try {
            const json_typed: DBJson = json as DBJson;
            return json_typed;
        } catch {
            console.error("Error: cannot read json");
            return {} as DBJson;
        }
    }
}
