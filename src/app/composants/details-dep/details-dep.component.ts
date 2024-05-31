import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/classes/departement';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-details-dep',
  templateUrl: './details-dep.component.html',
  styleUrls: ['./details-dep.component.css']
})
export class DetailsDepComponent {
  constructor(private activatedRoute: ActivatedRoute, private depService: DepartementService,
    private formBuilder: FormBuilder,
    private departementService: DepartementService,
    private router: Router
  ){}

  id: number;
  departement: any;
  depForm:FormGroup;

  afficherDetailsDep(){
    this.depService.getDepartementById(this.id).subscribe(t => {
      this.departement = t;
    });
  }

  modifierDep(id:number){
    this.departement.max_salaire = this.depForm.get('max_salaire').value;
    console.log("nouveau max salaire ======= ", this.depForm.get('max_salaire').value);
    this.departementService.updateDepartement(this.id, this.departement).subscribe(updatedDep => {
      this.departement = updatedDep;
    });
    this.router.navigate(['/list']);
  }

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.afficherDetailsDep();
    console.log(this.departement);

    this.depForm = this.formBuilder.group({
      matricule: [''],
      domaine: [''],
      nb_employer: [''],
      max_salaire:['']
    });
  }
}
