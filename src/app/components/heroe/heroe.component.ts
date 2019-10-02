import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.services';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  constructor(private activatedRaute: ActivatedRoute,
              // tslint:disable-next-line:variable-name
              private _heroeService: HeroesService ) {
    this.activatedRaute.params.subscribe(params =>{
      // console.log(params);
      // tslint:disable-next-line:no-string-literal
      this.heroe = this._heroeService.getHeroe(params['id']);
    });
   }

  ngOnInit() {
  }

}
