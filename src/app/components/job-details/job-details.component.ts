import { Component, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/job-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

   currentTitle: string = '';
   currentDetails: string = '';
   currentId: number = 0;
   currentDuration: string = "";
   currentEmployer: string = "";

  pastJobs: any = [];
  

  constructor(private jobServiceService: JobServiceService, private actRoute: ActivatedRoute) { }
 
  //instructions for Job-details Component:
  // should be loaded via a parameterized route with a "jobId" parameter (/jobs/:jobId)
  // should load in the details of the job from the jobId parameter, using the snapshot method from the lesson
  // Hint: You can use parseInt() to convert the route string to a number
  
  // should display all job details on the page
  // should include a link back to the job list page

  ngOnInit(): void {
    console.log(this.actRoute.snapshot.paramMap);
    this.currentTitle = this.actRoute.snapshot.paramMap.get("title") ?? "";
    // this.currentId = this.actRoute.snapshot.paramMap.get("id"); need to do parseint or something
    this.jobServiceService.getJob(this.currentTitle).subscribe(foundDetails =>{
      this.currentDetails = foundDetails;
    });

    this.jobServiceService.getJobs().subscribe(list => {
      this.pastJobs = list;
    })


  }

}
