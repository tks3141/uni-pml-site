import { GoogleApis, google } from 'googleapis';
import { Content } from './content';

const getSheets = () => {
  const googleapis = new GoogleApis();
  const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
  const jwt = new googleapis.auth.JWT(
    process.env.GCP_SERVICEACCOUNT_EMAIL,
    undefined,
    (process.env.GCP_SERVICEACCOUNT_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    scopes
  );
  return google.sheets({ version: 'v4', auth: jwt });
};

export const getContents = async (sheed_id: string): Promise<Content[]> => {
  const sheets = getSheets();
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: sheed_id,
    range: 'フォームの回答 1',
  });
  const rows = response.data.values;
  if (rows) {
    const col = rows[0]
    return rows.slice(1).map((row) => {
      return row[row.length-1] as string
    });
  }
  return [];
};