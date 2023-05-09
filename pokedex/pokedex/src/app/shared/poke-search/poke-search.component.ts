import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit{
  //Saida de dados
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  constructor( ) { }

  ngOnInit(): void {
  }

// Ira emiter o value para outro componente regastar o value
  public search(value: string){
    this.emmitSearch.emit(value);
  }
}
