import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../../models/skill';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Skill;
  color = 'black';

  constructor(private service: SkillService) {
  }

  ngOnInit() {
  }

  onLike(card: Skill) {
    card.likes += 1;
    this.service.updateSkill(card);
  }

  checkLikes(card: Skill): string {
    switch (card.likes) {
      case 1:
      case 2:
      case 3:
      case 4:
        return 'default-color btn btn-outline-info';
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        return 'blue btn btn-outline-info';
        break;
      default:
        return 'green btn btn-outline-info';
        break;
    }
  }
}
