type SheetJson = {
    [column: string]: {
        [key: string]: string | number | null
    }
}

type DBJson = {
    [sheetName: string]: SheetJson
}

export type {
    DBJson,
    SheetJson
};