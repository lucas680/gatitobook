import { AbstractControl } from "@angular/forms";

export function misnusculoValidator(control: AbstractControl){
    const valor = control.value as string;
    if(valor !== valor.toLowerCase()){
        return {minusculo: true};
    }else{
        return null;
    }
}
