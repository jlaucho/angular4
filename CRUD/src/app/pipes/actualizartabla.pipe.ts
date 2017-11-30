import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actualizartabla',
  pure: false
})
export class ActualizartablaPipe implements PipeTransform {

  transform(value: any): any {

    let resp = [];
    for (let key in value) {

      resp.push(value[key]);
    }
    //console.log(resp);
    return resp;
  }

}
