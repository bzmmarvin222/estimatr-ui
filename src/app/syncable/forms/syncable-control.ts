import {FormControl} from "@angular/forms";

export class SyncableControl {
  private _path: (string | number)[];
  private _control: FormControl;

  constructor(path: (string | number)[], control: FormControl) {
    this._path = path;
    this._control = control;
  }

  get path(): (string | number)[] {
    return this._path;
  }

  get control(): FormControl {
    return this._control;
  }
}
