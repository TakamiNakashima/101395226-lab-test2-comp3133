export class Mission {
  number!: number;
  mission_name!: string;
  launch_year!: string;
  details!: string;
  mission_patch_small!: string;

  constructor(number?: number, name?: string, year?: string, details?: string, mission_patch?: string){
      if(number !== undefined){
          this.number = number
      }
      if(name !== undefined){
          this.mission_name = name
      }
      if(year !== undefined){
          this.launch_year = year
      }
      if(details !== undefined){
          this.details = details
      }
      if(mission_patch !== undefined){
          this.mission_patch_small = mission_patch
      }
  }

   
}