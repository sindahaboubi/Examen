import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.css']
})

export class AddDepComponent {
constructor(private departementService: DepartementService,
  private router: Router,
  private formBuilder: FormBuilder
){}

  depForm: FormGroup;

  ajouterDepartement(){
    this.departementService.ajouterDepartement(this.depForm.value).subscribe(data => {
      console.log('Nouveau département ajouté : ', data);
      this.router.navigate(['/list']);
    });
  }

  get domaine(){
    return this.depForm.controls['domaine'];
  }

  get matricule(){
    return this.depForm.controls['matricule'];
  }

  ngOnInit() {
    this.depForm = this.formBuilder.group({
      matricule: ['', [Validators.minLength(3), Validators.maxLength(7)]],
      domaine: ['', [Validators.pattern(/^(informatique|texterff|finance|RH)$/)]],
      nb_employer: [0],
      max_salaire:[0]
    });
  }

}
