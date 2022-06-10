export type Content = string
export type Contents = string[]

export type Day = string
export type SheetId = string

type FormData = {
  sheet_id: SheetId,
  day: Day,
}


export const form_datas: FormData[] =
  [{ sheet_id: '1phjOtK0SocSdtu0TxM7dVAd6AEWFOegH8QDeMBSOY4E', day: '2022-04-15' },
  { sheet_id: '1oSk0RJl89URTgPfU3hE1sV0snMlk_AIrWc5jr5jllxE', day: '2022-04-22' },
  { sheet_id: '1xNYzpKa6o0nCrUwTGrG2cizj9t7fq4MDeyFC9U1wdQc', day: '2022-05-06' },
  { sheet_id: '1WffswcJAvjMblm1di0jR-H78hsMQgtboDn2j1qCKkt0', day: '2022-05-13' },
  { sheet_id: '1xAl1E0NfYNkRGdZZOsIWQgnQabkIYR5QLsC6Wb3SxqU', day: '2022-05-20' },
  { sheet_id: '1ID_6XUsD-hz_iBluRs28-r3Ft23hxPbTu-5MspCm53Q', day: '2022-05-27' },
  { sheet_id: '1goceY7G-Qt4lAUurSUjQkWwIaD4hKzdJAJNV_FbOybU', day: '2022-06-03' },
  { sheet_id: '1qwPB8HSaebGsLco29fF0OSZMlCYd7zZ2skWsaqf3NpE', day: '2022-06-10' },
  { sheet_id: '1aqwIibvHlOAy1TvBRhAOBoCviM7UHDfa4DFHNN87iYg', day: '2022-06-17' },
  { sheet_id: '1ZU3UiFwfJUCV6bo4hVM4or6PqB91cjvXHusDWiPLsLc', day: '2022-06-24' },
  { sheet_id: '15iaxDLnES6D_hrlZNTJ83YdqaHHEc7OID1mIKx1pZtU', day: '2022-07-01' },
  { sheet_id: '1Uje_Wv1wEasmWOSwAOR-loc_8eHGE3FbkP85rnKtPWE', day: '2022-07-08' },
  { sheet_id: '1BJyjfyYNJ6NCzIugfaq5QYI6g9FGxpJPCN7VNJSDrbo', day: '2022-07-15' },
  { sheet_id: '1rRzHDxZCN67W_F6gmN_fWbMLcHRN0Y2EA1sHGlA-tOE', day: '2022-07-22' },  

  ]

export class ContentModel {
  data = form_datas;
  sheet_ids: { [key: Day]: SheetId } = {};

  constructor() {
    this.data.forEach(e => {
      this.sheet_ids[e.day] = e.sheet_id;
    });
  }

  get_sheet_id = (day: Day) => {
    return this.sheet_ids[day];
  }
}