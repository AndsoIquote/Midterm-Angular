import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  pastJobs: any[] = [
    {
      id: 1,
      title: "Software Engineer",
      details: "Installed and configured software applications and tested solutions for effectiveness.",
      duration: "2 years",
      employer: "Pierces Holdings Inc."
    },
    {
      id: 2,
      title: "Software Development Associate",
      description: "Administered government-supported community development programs and promoted department programs and services.",
      duration: "2 years",
      employer: "Carson Technologies"
    },
    {
      id: 3,
      title: "Web Development Intern",
      description: "Participated with preparation of design documents for trackwork, including alignments, specifications, criteria details and estimates.",
      duration: "2 years",
      employer: "Anita Appraisal Services"
    }

  ]

  constructor() { }

  getJobs(): Observable<any>{
    return of(this.pastJobs);
  }

  getJob(job: string): Observable<any>{
    let details: string = "";
    this.pastJobs.forEach(j => {
      if (j.job === job){
        details = j.details;
      }
    });
    return of(details);
  }

}




// should include a method called getJobs that retrieves the list of jobs as an observable
// should include a method called getJob that retrieves a single job based on its id
// Hint: Make sure each job has a unique id.
