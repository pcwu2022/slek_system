import {
    State,
    Main,
    Diagnosis,
    Therapy,
    MedHistory,
    PE,
    Examination,
    Blood,
    Urea
} from "./enums";

type DBJson = {
    [sheetName: string]: {
        [columnName: string]: {
            [key: string]: string
        }
    }
}

export type {
    DBJson
};