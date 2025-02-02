import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-bookshop',
    standalone: true,
    templateUrl: './bookshop.component.html',
    styleUrl: './bookshop.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class BookshopComponent {

}
