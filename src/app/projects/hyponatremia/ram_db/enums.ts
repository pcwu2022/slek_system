/* This file provides the variable-to-name conversion inside the whole website */

// Control Flow of the Program
enum State {
    Entry = "病人入院",
    CC = "主訴",
    MedHistory = "病史",
    PE = "理學檢查",
    Diagnosis1 = "第一次診斷",
    Examination = "檢查",
    Diagnosis2 = "第二次診斷",
    Therapy = "治療",
    Transition = "太陽升起後又落下",
    DiagnosisF = "最終診斷",
    Success = "順利出院",
    ExaminationN = "檢查（重複）",
    DiagnosisN = "診斷（重複）",
    TherapyN = "治療（重複）",
    Fail = "治療失敗"
};

// Inital Variables Throughout the Program
enum Main {
    CC = "主訴",
    GCS = "GCS",
    Respiration = "呼吸",
    Temperature = "體溫",
    Heartbeat = "心跳",
    Pressure = "血壓",
    IndexH = "指數上限",
    IndexL = "指數下限",
    Answer = "解答",
    Detailed = "詳解",
    Radiology = "放射檢查",
    Urine = "尿液檢查",
    Blood = "血液檢查",
    ABG = "動脈氣體分析",
    Weight = "體重"
};

enum Units {
    Na = "mmol/L",
    K = "mmol/L",
    Creatinine = "mg/dL",
    Osmolarity = "mOsm/kgH2O",
    BUN = "mg/dL",
    EGFR = "ml/min/1.73 m^2",
    TSH = "ulU/mL",
    FREET4 = "ng/dL",
    ACTH = "pg/mL",
    UricAcid = "mg/dL",
    Weight = "kg",
    Pressure = "mmHg/mmHg"
};

// Variables for Dignosis Choices
enum Diagnosis {
    CHF = "Chronic Heart Failure",
    RO = "Reset Osmostat",
    PP = "Primary Polydipsia",
    Cirrhosis = "Cirrhosis",
    SIADH = "SIADH",
    Endocrine = "Endocrine",
    Hypovolemia = "Volume Depletion"
};

// Variables for Therapy
enum Therapy {
    Saline3 = "3%Saline",
    Saline = "Normal Saline",
    Restriction = "Fluid Restriction",
    Diuretics = "Diuretics",
    VRA = "Vasopressin Receptor Antagonists"
};

enum Dosage {
    L05 = "500 ml",
    L10 = "1000 ml",
    L15 = "1500 ml",
    L20 = "2000 ml",
    L25 = "2500 ml",
    L30 = "3000 ml"
};

enum Time {
    Q12H = "Q12H",
    Q8H = "Q8H",
    Q6H = "Q6H",
    Q4H = "Q4H"
}

// Variables for History Questions
enum MedHistory {
    PMH = "既往病史",
    Family = "家族病史",
    Travel = "旅遊史",
    Allergy = "過敏史",
    Medications = "藥物史",
    LQQOPERA = "LQQOPERA"
};

// Variables for Physical Examination Items
enum PE {
    Inquiry = "問診",
    Inspection = "視診",
    Auscultation = "聽診",
    Percussion = "叩診",
    Palpation = "觸診"
};

// Variables for the First Level of Examination
enum Examination {
    Blood = "Blood Test",
    Urea = "Urea Test",
    Radiology = "Radiology",
    ABG = "ABG"
};

// Variables for the Second Level of Examination: Blood Test
enum Blood {
    RBC = "紅血球",
    WBC = "白血球",
    Platelet = "血小板",
    Na = "Na",
    K = "K",
    Cl = "Cl",
    Mg = "Mg",
    Ca = "Ca",
    Osmolality = "Plasma Osmolality",
    BUN = "BUN",
    Creatinine = "Creatinine",
    EGFR = "eGFR",
    T3 = "T3",
    T4 = "T4",
    GPT = "GPT",
    ACTH = "ACTH",
    GOT = "GOT",
    Protein = "血蛋白",
    Sugar = "血糖",
    TBIL = "總膽紅素",
    FREET4 = "FREET4",
    UricAcid = "Uric Acid"
};

// Variables for the Second Level of Examination: Urea Test
enum Urine {
    Density = "比重",
    Color = "顏色",
    PH = "pH",
    Glucose = "尿糖",
    Protein = "尿蛋白",
    OB = "尿潛血",
    RBC = "紅血球",
    WBC = "白血球",
    Na = "Na",
    K = "K",
    Creatinine = "Creatinine",
    Osmolality = "Urine Osmolality",
    Gravity = "Urine Specific Gravity"
};

// Variables for the Second Level of Examination: Radiology
enum Radiology {
    ChestCT = "Chest Xray and CT",
    AbdSono = "腹部超音波",
    ThySono = "甲狀腺超音波",
    HeadCT = "CT Scan of head"
};

// Variables for the Second Level of Examination: ABG
enum ABG {
    PH = "pH",
    PCO2 = "CO2 Partial Pressure",
    PO2 = "Oxygen Partial Pressure",
    SO2 = "Oxygen Saturation",
    HCO3 = "Bicarbonate",
    BE = "Base Excess"
}

export {
    State,
    Main,
    Units,
    Diagnosis,
    Therapy,
    MedHistory,
    PE,
    Examination,
    Blood,
    Urine,
    Radiology,
    ABG,
    Dosage,
    Time
};