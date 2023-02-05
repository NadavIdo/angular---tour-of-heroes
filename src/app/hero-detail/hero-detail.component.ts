import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {

  @Input() hero ?: Hero; 
  @Output() shouted = new EventEmitter<string>();

  constructor(
    private rout: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
    ) {}

  ngOnInit(): void {
    this.getHero();
  }
  getHero() {
    const id = +this.rout.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  onShout() {
    this.shouted.emit(`Hello from ${this.hero?.name} !!`);
  }

  goBack() {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
    .subscribe(() => this.goBack());
   }
   

}
