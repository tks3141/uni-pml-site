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
  { sheet_id: '1goceY7G-Qt4lAUurSUjQkWwIaD4hKzdJAJNV_FbOybU', day: '2022-05-27' },
  
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