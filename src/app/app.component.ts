import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListProduitComponent,NavbarComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-eshop';
  filiere: string ='informatique';
  
}
