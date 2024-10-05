import { Component, Input } from '@angular/core';
import { Produit } from '../Produit';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pannier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pannier.component.html',
  styleUrl: './pannier.component.css'
})
export class PannierComponent {
  @Input() mapProduit!:Map<Produit,number>;
  get keys(){
    return Array.from(this.mapProduit.keys());
  }
  calculateTotalPrice(): number {
    let total = 0;
    this.keys.forEach(produit => {
      const quantite = this.mapProduit.get(produit) || 0;
      total += produit.price * quantite;
    });
    return total;
  }
  
}
