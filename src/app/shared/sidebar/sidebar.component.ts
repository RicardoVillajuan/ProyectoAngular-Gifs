import { Component} from '@angular/core';
import { GifsService } from '../../gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent{

  constructor(private gifsSerice: GifsService) {}

  get historial(){
    
    return this.gifsSerice.historial;
  }

  buscar(termino: string){

    this.gifsSerice.buscarGifs(termino);
    console.log(termino)
  }

}
