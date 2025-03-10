import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  http=inject(HttpClient);
  router=inject(Router)

  loginObj:any=
    {
      "EmailId": "",
      "Password": ""
    }

    onLogin(){
      debugger;
      this.http.post("https://freeapi.miniprojectideas.com/api/User/Login",this.loginObj).subscribe((res:any)=>{
        debugger;
        if(res.result){
         
          alert("login Success");
          localStorage.setItem("userLoginDetails",this.loginObj.User);
          localStorage.setItem("Token",res.data.token);
          this.router.navigateByUrl("dashboard");
        }else{
          alert("check user name and password");
        }
      })
    }
  


}
