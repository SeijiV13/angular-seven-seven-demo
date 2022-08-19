import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/core/guards/form.guard';
import { AppState } from 'src/app/state/app.state';
import { AntiHero } from '../../models/anti-hero.interface';
import { AntiHeroActions } from '../../state/anti-hero.actions';
import { selectAntiHero } from '../../state/anti-hero.selectors';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, CanComponentDeactivate {
  antiHero$: Observable<AntiHero | undefined>;
  antiHero: AntiHero | null = null;
  constructor(private router: ActivatedRoute, private store: Store<AppState>, private route: Router) {
    const id = this.router.snapshot.params['id'];
    this.antiHero$ = this.store.select(selectAntiHero(id));
    this.antiHero$.subscribe(d => {
      if(d) this.antiHero = d;
    });
  
   }

  ngOnInit(): void {

  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    const confirmation = window.confirm('Are you sure?');
    return confirmation;
  }

  formAction(data: {value: AntiHero, action: string}) {
    switch(data.action) {
      case "Create" : {
        this.store.dispatch({type: AntiHeroActions.ADD_ANTI_HERO_API, payload: data.value});
        return;
      }
      case "Update" : {
        this.store.dispatch({type: AntiHeroActions.MODIFY_ANTI_HERO_API, payload: data.value});
        return;
      }

      default: ""
    }
  }

}
