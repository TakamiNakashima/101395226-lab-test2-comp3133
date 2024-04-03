import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mission } from '../models/mission';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  number!: number;
  mission!: Mission;

  constructor(private spaceXapiService: SpacexapiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.mission = new Mission();
    this.number = this.route.snapshot.params['id'];

    this.spaceXapiService.Launch(this.number)
      .subscribe(data => {
        this.mission = new Mission(data.flight_number, data.mission_name, data.launch_year, data.details, data.links.mission_patch_small)
      }, error => console.log(error));
  }

  backToMissionList(){
    this.router.navigate(['missions']);
  }
}