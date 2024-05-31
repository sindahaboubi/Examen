import { Component } from '@angular/core';
import { Departement } from 'src/app/classes/departement';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-list-dep',
  templateUrl: './list-dep.component.html',
  styleUrls: ['./list-dep.component.css']
})
export class ListDepComponent {
constructor(private depService: DepartementService){}

  lesDepartements:Departement[];
  salaireMax: number;
  totalEmployees: number=0;

  afficherDepartements(){
    this.depService.getDepartements()
    .subscribe( data => this.lesDepartements = data)
  }

  ngOnInit(){
    this.afficherDepartements();
  }

  filtrerDepartements() {
    if (this.salaireMax) {
      return this.lesDepartements.filter(departement => departement.max_salaire < this.salaireMax);
    } else {
      return this.lesDepartements;
    }
  }

  calculer(){
    for (let i = 0; i < this.lesDepartements.length; i++) {
      this.totalEmployees = this.totalEmployees + this.lesDepartements[i].nb_employer;
    }
    console.log("nombre total = ", this.totalEmployees);
    alert("Le nombre totale des employés dans tous les départements est: "+ this.totalEmployees);
  }


}
