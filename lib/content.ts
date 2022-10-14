export type Content = string
export type Contents = string[]

export type Day = string
export type SheetId = string

type FormData = {
  sheet_id: SheetId,
  day: Day,
}


export const form_datas: FormData[] =
  [{ sheet_id: '1YImOf1T5XqnGr5m5CM5LOatyYa_P5NtU7w-mviqotME', day: '2022-10-07' },
  { sheet_id: '1vSIJ1ayXrw75woVU8MaWJC1z-a1757NFB0-kpI0CWXk', day: '2022-10-14' },
  // { sheet_id: '', day: '2022-05-06' },
  // { sheet_id: '', day: '2022-05-13' },
  // { sheet_id: '', day: '2022-05-20' },
  // { sheet_id: '', day: '2022-05-27' },

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