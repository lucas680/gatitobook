import { FormGroup } from '@angular/forms';
export function usuarioSenhaIguaisValidator(formGroup: FormGroup){
    const userName = formGroup.get('userName')?.value ?? ''
    const passWord = formGroup.get('password')?.value ?? ''

    if(userName.trim() + passWord.trim()){
        return userName !== passWord ? null:{senhaIgualUsuario:true}
    }else{
        return null
    }
}
