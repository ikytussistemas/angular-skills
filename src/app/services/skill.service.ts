import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
 
  constructor(
    private http: HttpClient,
  ) {}

  updateSkill(skill: Skill) {
    return this.http.put('/api/skills', skill);
  }

  findAll() {
    return this.http.get('/api/skills');
  }
}
