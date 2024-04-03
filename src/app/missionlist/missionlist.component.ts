import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missions : Mission[] = [];

  constructor(private spaceXapiService: SpacexapiService, private router: Router) { }

  ngOnInit(): void {
    this.spaceXapiService.allLaunch().subscribe(data => {
      this.missions = data.map((l: any)=>{
        return new Mission(l.flight_number, l.mission_name, l.launch_year, l.details, l.links.mission_patch_small)
      })
    })
  }

  launchDetails(number: number) {
    this.router.navigate(['missions', number]);
    console.log(number);
  }
}