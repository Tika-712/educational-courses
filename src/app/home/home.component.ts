import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import servicesj from "./../../assets/data/service.json";
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [FooterComponent, CommonModule]
})
export class HomeComponent {
tastimage:string = "pictures/shutterstock_525008128.jpg"
public services:any[]=[];
id: any;
constructor() { 
    this.services=servicesj;
}
}
