import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { CaseNew } from './caseNew';
@Injectable({
  providedIn: 'root'
})
export class CasesService {
  private apiKey = 'e69ccc2a5fd348f78df8722bbda96ae4';
  //private api_url = "https://pomber.github.io/covid19/timeseries.json";
  constructor(private api: HttpClient) { }

  getCases():Observable<CaseNew[]>{
    return this.api.get<CaseNew[]>(`https://api.covid19api.com/live/country/sri-lanka/status/confirmed`);
  }
  getNews(){
    return this.api.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`);
  }
}
