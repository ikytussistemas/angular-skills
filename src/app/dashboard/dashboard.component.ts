import { Component, OnInit } from '@angular/core';

import { Skill } from '../models/skill';
import { LoadingService } from '../components/loading/loading.service';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Skill[];

  constructor(
    private service: SkillService,
    private load: LoadingService,
    ) { }

  ngOnInit() {
    this.load.show({});
    this.service.findAll().subscribe((ret: Skill[]) => {
      this.cards = ret;
      this.load.dismiss();
    });
  }

}
