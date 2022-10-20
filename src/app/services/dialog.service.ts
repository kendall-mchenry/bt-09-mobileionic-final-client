import { Injectable } from '@angular/core';
import { Dialog } from '@capacitor/dialog';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  showPrompt(title: string, message: string): Observable<string> {
    return from(Dialog.prompt({
        title,
        message
    })).pipe(map(result => {
      // This will account for if "Cancel" was clicked or the prmopt was empty.
        if (result.cancelled == true || result.value == "") {
          // console.log(result);
          return null;
        } else {
          // console.log(result);
          return result.value;
        }
    }));
    
};
}
