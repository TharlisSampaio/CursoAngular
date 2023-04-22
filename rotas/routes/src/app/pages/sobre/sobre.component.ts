import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    // params é para pegar os parametros da rota no exemplo id e username
    this.activatedRoute.params.subscribe(
      res => console.log(res['id'], res['username'], res)
    )

    // queryParams é para pegar os paramentro passado na url
    this.activatedRoute.queryParams.subscribe(
      res => console.log(res['idade'])
    )
  }

}
