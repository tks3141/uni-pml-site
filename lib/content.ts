export type Content = string
export type Contents = string[]

export type Day = string
export type SheetId = string

type FormData = {
  sheet_id: SheetId,
  day: Day,
}


export const form_datas: FormData[] =
  [{ sheet_id: '1phjOtK0SocSdtu0TxM7dVAd6AEWFOegH8QDeMBSOY4E', day: '2022-04-15' }]

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