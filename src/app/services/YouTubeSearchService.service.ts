import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResult } from '../models/searchresult.model';


@Injectable()

export class YouTubeSearchService{

    constructor(private http: HttpClient,
         @Inject(YOUTUBE_API_KEY) private apiKey: string,
         @Inject(YOUTUBE_API_URL) private apiUrl: string){

    }

    search(query: string): Observable<any> {
    const params: string = [ `q=${query}`, `key=${this.apiKey}`,`part=snippet`,`type=video`,`maxResults=10`].join('&');
    const queryUrl = `${this.apiUrl}?${params}`;
    return this.http.get(queryUrl);
    }

}

export const YOUTUBE_API_KEY: string = "XXX_YOUR_KEY_HERE_XXX";
export const YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";