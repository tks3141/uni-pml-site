export type Content = string
export type Contents = string[]

export type Day = string
export type SheetId = string

type FormData = {
  sheet_id: SheetId,
  day: Day,
  n_col?: number,
}


export const form_datas: FormData[] =
  [
    { sheet_id: '1YImOf1T5XqnGr5m5CM5LOatyYa_P5NtU7w-mviqotME', day: '2022-10-07', n_col: 8 },
    { sheet_id: '1vSIJ1ayXrw75woVU8MaWJC1z-a1757NFB0-kpI0CWXk', day: '2022-10-14' },
    { sheet_id: '1sHuY2eooMs_21XTcOaBgbG34KsZgmDhRkkDUponl2jY', day: '2022-10-21' },
    { sheet_id: '1hNIGoHRnObmIW6henIvn-iSRTO74S-qlQsCBkAB83Vk', day: '2022-11-04' },
    // { sheet_id: '', day: '2022-05-20' },
    // { sheet_id: '', day: '2022-05-27' },
    // { sheet_id: '', day: '2022-05-20' },
    // { sheet_id: '', day: '2022-05-20' },
    // { sheet_id: '', day: '2022-05-20' },

  ]

export class ContentModel {
  data = form_datas;
  sheet_ids: { [key: Day]: { sheet_id: SheetId, n_col: number } } = {};

  constructor() {
    this.data.forEach(e => {
      this.sheet_ids[e.day] = { sheet_id: e.sheet_id, n_col: e.n_col || 4 };
    });
  }

  get_sheet_id = (day: Day) => {
    return this.sheet_ids[day];
  }

  get_last_day = () => {
    const keys = Object.keys(this.sheet_ids);
    return keys[keys.length - 1];
  }
}