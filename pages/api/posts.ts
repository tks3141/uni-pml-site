// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Content } from '../../lib/content';
import { getContents } from "../../lib/spreadsheet";

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<any[]>
// ) {
//   getContents(process.env.SPREADSHEET_ID as string).then((d) => {
//     console.log(d)
//     return res.status(200).json(d)
//   })
// }
