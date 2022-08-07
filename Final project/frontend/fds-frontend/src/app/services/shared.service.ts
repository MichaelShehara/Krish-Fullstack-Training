import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

//  fuelStation1 = 'JK-Wattala'; 
//  fuelStation2 = 'TM-Peliyagoda'; 
//  cpc = 'CPC';
//  client = 'Saman';
 fuelStation1: BehaviorSubject<String>;
 fuelStation2 : BehaviorSubject<String>;
 cpc: BehaviorSubject<String>;
 client: BehaviorSubject<String>;

  constructor() { 
    this.fuelStation1 = new BehaviorSubject('JK-Wattala');
    this.fuelStation2 = new BehaviorSubject('TM-Peliyagoda');
    this.cpc = new BehaviorSubject('CPC');
    this.client = new BehaviorSubject('Saman');
  }
}
