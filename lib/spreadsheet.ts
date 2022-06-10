import { GoogleApis, google } from 'googleapis';
import { Content } from './content';
import { ContentResponse } from '../domain/response'

const getSheets = () => {
  const googleapis = new GoogleApis();
  const scopes = ['https://www.googleapis.com/auth/spreadsheets'];
  const jwt = new googleapis.auth.JWT(
    process.env.GCP_SERVICEACCOUNT_EMAIL,
    undefined,
    (process.env.GCP_SERVICEACCOUNT_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    scopes
  );
  return google.sheets({ version: 'v4', auth: jwt });
};

export const getContents = async (sheet_id: string): Promise<Content[]> => {
  const sheets = getSheets();
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: sheet_id,
    range: 'フォームの回答 1',
  }).catch((e) => {
    console.log(e)
    return null
  })
  if (response && response.data.values) {
    const rows = response.data.values;
    const col = rows[0]
    return rows.slice(1).map((row) => {
      return row[4] as string
    });
  }
  return [];
};

// const createRepSheet = async (): => {

// }

export const getReplys = async (sheet_id: string): Promise<ContentResponse[]> => {
  const sheets = getSheets();
  // const sheets_info = await sheets.spreadsheets.get({
  //   spreadsheetId: sheet_id,
  // })

  // if (sheets_info.data.sheets && sheets_info.data.sheets.length >= 2) {
  //   // none
  // } else {
  //   // todo create sheets
  //   // sheets.spreadsheets.create({
  //   //   requestBody:{
  //   //     spreadsheetId: sheet_id,

  //   //   }
  //   // })
  // }

  const rep_sheet = await sheets.spreadsheets.values.get({
    spreadsheetId: sheet_id,
    range: 'シート2',
  }).catch((e) => {
    console.log(e)
    return null
  });

  // console.log(rep_sheet.data)
  if (rep_sheet && rep_sheet.data.values) {
    const rows = rep_sheet.data.values;
    return rows.filter(row=> row[0] && row[0] != 'id').map((row) => {
      return {
        to: parseInt(row[0],10),
        message: row[1]
      }
    });
  }
  return [];
};