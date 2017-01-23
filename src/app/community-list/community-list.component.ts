import { Component, Input } from '@angular/core';
import { Community } from '../community.model';

@Component({
  selector: 'community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.css']
})
export class CommunityListComponent {
  @Input() childCommunityList: Community[];
}
