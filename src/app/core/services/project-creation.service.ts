import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PromptService} from '../../shared/services/prompt.service';
import {EstimationRoot} from '../../syncable/shared/estimation';

@Injectable({
  providedIn: 'root'
})
export class ProjectCreationService {

  constructor(private _http: HttpClient,
              private _prompt: PromptService) {
  }


  public initProjectCreation(): void {
    this._prompt.prompt$({
      header: 'Enter project name',
      description: 'Please enter the name of your project.',
      promptData: '',
      placeholder: 'Project name'
    }).subscribe((projectName: string | undefined) => {
      this.createProject(projectName);
    });
  }

  private createProject(name: string): void {
    const body: EstimationRoot = {
      projectTitle: name,
      riskFactors: {
        low: 1,
        moderate: 1.5,
        high: 2,
        showstopper: 99
      }
    };
    this._http.put('api/estimation', body).subscribe(v => console.log(v));
  }
}
