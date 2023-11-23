type SheetJson = {
    [column: string]: {
        [key: string]: string
    }
}

type DBJson = {
    [sheetName: string]: SheetJson
}

export type {
    DBJson,
    SheetJson
};