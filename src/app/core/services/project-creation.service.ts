import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PromptService} from '../../shared/services/prompt.service';
import {EstimationRoot} from '../../syncable/shared/estimation';
import {SessionCreatedDto} from '../shared/dtos/session-created-dto';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectCreationService {

  constructor(private _http: HttpClient,
              private _prompt: PromptService,
              private _router: Router) {
  }

  public switchSession(): void {
    this._prompt.prompt$({
      header: 'Enter session id',
      description: 'Please enter the sessions id.',
      promptData: '',
      placeholder: 'Session id'
    }).subscribe((estimationId: string | undefined) => {
      if (estimationId) {
        this.joinSession(estimationId);
      }
    });
  }

  public initProjectCreation(): void {
    this._prompt.prompt$({
      header: 'Enter project name',
      description: 'Please enter the name of your project.',
      promptData: '',
      placeholder: 'Project name'
    }).subscribe((projectName: string | undefined) => {
      if (projectName) {
        this.createProject(projectName);
      }
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
    this._http.put<SessionCreatedDto>('api/estimation', body)
      .subscribe((dto: SessionCreatedDto) => {
        this.joinSession(dto.estimationId);
      });
  }

  private joinSession(estimationId: string): void {
    this._router.navigate(['/estimate', estimationId]);
  }
}
