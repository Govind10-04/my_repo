import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  allUserList:any[]=[];

  http=inject(HttpClient);


  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    debugger;
    this.http.get("https://freeapi.miniprojectideas.com/api/User/GetAllUsers").subscribe((res:any)=>{
         this.allUserList=res.data;
    })
  }
  

}
