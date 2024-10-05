import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Produit } from '../Produit';


@Component({
  selector: 'app-produit-item',
  standalone: true,
  imports: [],
  templateUrl: './produit-item.component.html',
  styleUrl: './produit-item.component.css'
})
export class ProduitItemComponent {
  @Input () produit!:Produit;
  @Output() selectedProduct: EventEmitter<Produit> =new EventEmitter<Produit>();
  addToPannier(){
    this.selectedProduct.emit(this.produit);
  } 
}
