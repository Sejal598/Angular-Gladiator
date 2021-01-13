import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortpipe'
})
export class SortpipePipe implements PipeTransform {

  transform(value: any ) {
   
if(value.length===0){
  return value;
}
else{
  value.sort((a, b) => {
    let fa = a.name,
        fb = b.name;

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
return value;
}

  }

}
