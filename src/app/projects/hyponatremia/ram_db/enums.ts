/* This file provides the variable-to-name conversion inside the whole website */

// Control Flow of the Program
enum State {
    Entery = "病人入院",
    CC = "主訴",
    MedHistory = "病史",
    PE = "理學檢查",
    Diagnosis1 = "第一次診斷",
    Examination = "檢查",
    Diagnosis2 = "第二次診斷",
    Therapy = "治療",
    DiagnosisF = "最終診斷",
    Success = "順利出院",
    ExaminationN = "檢查（重複）",
    DiagnosisN = "診斷（重複）",
    TherapyN = "治療（重複）",
    Fail = "治療失敗"
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
    VRA = "Vassopresin Receptor Antagonists"
};

// Variables for History Questions
enum MedHistory {
    PMH = "既往病史",
    Family = "家族病史",
    Travel = "旅遊史",
    Allergy = "過敏史",
    Pharmacy = "藥物史",
    LQQOPERA = "LQQOPERA"
};

// Variables for Physical Examination Items
enum PE {
    VS = "生命徵象及意識狀態",
    Inspection = "望診",
    Auscultation = "聽診",
    Percussion = "叩診",
    Palpation = "觸診"
};

// Variables for the First Level of Examination
enum Examination {
    Blood = "Blood Test",
    Urea = "Urea Test",
    Chest = "Chest Xray and CT",
    Abdominal = "腹部超音波",
    Thyroid = "甲狀腺超音波",
    Head = "CT Scan of head"
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
    TSH = "TSH, T3, T4",
    ACTH = "ACTH",
    GOT = "GOT",
    Protein = "血蛋白",
    Sugar = "血糖",
    TBIL = "總膽紅素"
};

// Variables for the Second Level of Examination: Urea Test
enum Urea {
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
