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
    { sheet_id: '1AOFwhJK44ImxLjn5TGCrSxrDeBczuCE98-R7Ba2TgRg', day: '2022-11-11' },
    { sheet_id: '1Y_TPteEudOiUrnIaa-Mb42TFfPT5PBRPUCfMUC9Wex0', day: '2022-11-18' },
    { sheet_id: '1RbzhdE3xCinHq6WFqOCEinS81azDouFuc7HnHmGM2JA', day: '2022-11-25' },
    { sheet_id: '1uRvhINoG233IxTaK-GWKRbfikO2MHHFLpH1RlJFwDvk', day: '2022-12-02' },
    { sheet_id: '1K0bwTdihDqNRa5atvGSMZEnfDNabx9DPMBsGe403GSE', day: '2022-12-09' },
    { sheet_id: '1hUQF5_ZlzzsASU8j8XgtiGB_PUwt8pKRTfwSjlumOlU', day: '2022-12-16' },
    { sheet_id: '14V7iXkMl19s6hvjRvAaLvgQlJDNygXRCRjnAfF8uO8g', day: '2022-12-23' },
    { sheet_id: '12evmw4POSrW7k_2kqUY9qVZ1nZ9LMXfcYgvOI_usHXQ', day: '2023-01-06' },
    { sheet_id: '1ZIlDba_qKDsGCysSg5_vukhTYH8gCUAN9v5512TKpLw', day: '2023-01-20' },
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