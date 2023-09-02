import load_xlsx from "../../load_xlsx";

export async function GET (req: Request){
    load_xlsx("development");
    return new Response(JSON.stringify({success: true}));
}