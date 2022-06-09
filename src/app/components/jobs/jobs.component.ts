import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  
  // currentJob: string = '';
  // currentDetails: string = '';
  // currentId: number = 0;

  constructor(private router: Router) { }


  //contain the job titles loaded in from a service file
  //each job name should b a link to a correspondin "job-detail page"

  ngOnInit(): void {
  }

  lookUp(title: string) {
    this.router.navigateByUrl(`/job-details/${title}`)
  }

}