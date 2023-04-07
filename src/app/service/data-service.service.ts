import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  private globalData: any;
  constructor() { }

  getData(): any {
    return this.globalData;
  }

  setData(data: any): void {
    this.globalData = data;
  }

}
