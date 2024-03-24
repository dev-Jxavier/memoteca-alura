import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Thought } from './thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {
  private readonly BASE_URL = "http://localhost:3000/thoughts"
  constructor(private http: HttpClient) {}

  list(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.BASE_URL);
  }

  create(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.BASE_URL, thought)
  }

  remove(id: string): Observable<Thought> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.delete<Thought>(url);
  }

  getById(id: string): Observable<Thought> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.get<Thought>(url);
  }

  edit(thought: Thought) {
    const url = `${this.BASE_URL}/${thought.id}`;
    return this.http.put<Thought>(url, thought)
  }
}