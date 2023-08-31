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

type SheetJson = {
    [column: string]: {
        [key: string]: string
    }
}

// type SheetJson = {
//     Main: { [key in Main]: string },
//     MedHistory: { [key in MedHistory]: string },
//     PE: { [key in PE]: string },
//     Radiology: { [key in Radiology]: string },
//     Blood: { [key in Blood]: string },
//     Urine: { [key in Urine]: string },
//     ABG: { [key in ABG]: string }
// }

type DBJson = {
    [sheetName: string]: SheetJson
}

export type {
    DBJson,
    SheetJson
};