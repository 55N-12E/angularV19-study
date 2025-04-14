import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'myPipe',
    standalone: true,
})
export class MyPipeClass implements PipeTransform{
    transform(val: string){
        return `Hello ${val}`
    }
}