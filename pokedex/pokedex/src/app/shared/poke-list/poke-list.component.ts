import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit{

  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false;

  constructor ( 
    private pokeApiService: PokeApiService
  ){}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
        // console.log(this.getAllPokemons);
        // this.apiError = true;
      },
      error => {
        this.apiError = true;
      }
    );
  }

  // Para resgatar o valor digitado no componente poke-search
  public getSearch(value: string){
    const filter = this.setAllPokemons.filter( (res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    })

    this.getAllPokemons = filter;
    // console.log(this.setAllPokemons, "setAllPokemons");
    // console.log(this.getAllPokemons, "getAllPokemons");
  }
}
