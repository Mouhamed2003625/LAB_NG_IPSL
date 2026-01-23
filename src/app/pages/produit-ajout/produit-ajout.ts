import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Produit} from '../../models/produit.model';
import {ProduitService} from '../../services/produit-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-produit-ajout',
  imports: [
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './produit-ajout.html',
  styleUrl: './produit-ajout.scss',
})
export class ProduitAjout {


    produitFrom=new FormGroup({
      nom:new FormControl('', [Validators.required]),
      prix:new FormControl('', [Validators.required]),
      quantite:new FormControl('', [Validators.required]),
      description:new FormControl(''),
    });

    constructor(private produitService: ProduitService, private router: Router) {
    }

    ajoutProduit(){
      const nom=this.produitFrom.controls['nom'].value;

      const prix=this.produitFrom.controls['prix']?.value;
      const quantite=this.produitFrom.controls['quantite']?.value;
      const description=this.produitFrom.controls['description'].value;

      if (nom && prix && quantite && quantite ) {
        const produit: Produit ={
          nom:nom,
          prix:+prix,
          quantite:+quantite,
          description:description,
        }

        console.log(produit);

        this.produitService.add(produit);
        this.router.navigate(['/produits']);

      }


    }

}
