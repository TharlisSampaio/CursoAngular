import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit{

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    // params é para pegar os parametros da rota no exemplo id e username
    this.activatedRoute.params.subscribe(
      res => console.log(res['id'], res['username'], res)
    )

    // queryParams é para pegar os paramentro passado na url
    this.activatedRoute.queryParams.subscribe(
      res => console.log(res['idade'])
    )

    setInterval( () => {
      // navigate() não irá fazer o reload da pagina
      this.router.navigate(['404']);

      // navigateByUrl() irá fazer o reload da página
      // this.router.navigateByUrl('404')
    }, 5000)

  }

}
