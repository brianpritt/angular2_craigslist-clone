import { Component } from '@angular/core';
import { Community } from '../community.model';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})

export class CommunityComponent{
  masterCommunityList: Community[] = [
    new Community("World War Two Reenacting", "Come out to the community center with us this Saturday for make fake war.", "http://i219.photobucket.com/albums/cc203/Pounce_the_jaguar/073.jpg", "stooge234",1),
    new Community("Looking for female self-defense trainer", "I am trying to organize a self defense group for women that is taught by women. Looking for someone who has taken Krav Maga and feels comfortable teaching it. We are trying to make this accessible to all women so classes will be free and work will be volunteer based.", "https://s-media-cache-ak0.pinimg.com/originals/48/62/0c/48620cbab7d904d6afedfc00e2b5b4cc.jpg", "shellypunchnutz",2)
  ];



}
