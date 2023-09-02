import { NextApiRequest, NextApiResponse } from "next";

import load_xlsx from "../../load_xlsx";

export async function GET (req: NextApiRequest){
    load_xlsx("development");
    return new Response(JSON.stringify({success: true}));
}