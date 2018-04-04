import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VolunteerService } from '../../services/volunteer.service';
import { Volunteer } from '../../models/volunteer';
import { RolUser } from '../../models/rolUser';
import { Roles } from '../../models/roles';

@Component({
  selector: 'app-volunteer-prof-conf',
  templateUrl: './volunteer-prof-conf.component.html',
  styleUrls: ['./volunteer-prof-conf.component.css']
})

export class VolunteerProfConf implements OnInit {
    public VolConfProfForm: FormGroup;
    public volunteer: Volunteer;
    public updateError: string;
    private listTop: string[] = [];

    toppingList = ['AMBIENTAL', 'COMUNITARIO', 'CULTURAL', 'EDUCATIVO', 'INTERNACIONAL',
                 'PROTECCIÓN CIVIL','DEPORTIVO','SOCIO-SANITARIO','SOCIAL','OCIO Y TIEMPO LIBRE'];

    constructor(public formBuilder:FormBuilder,public volunteerService: VolunteerService,public router: Router) {
        volunteerService.getVolunteerByEmail(sessionStorage.getItem("currentUser")).subscribe(
            volg => {
                this.volunteer = volg;
            }
        );
    }

    ngOnInit() {
        this.VolConfProfForm = this.formBuilder.group({
            firstName: '',
            lastName: '',
            gender: '',
            bornDate: '',
            address: '',
            state: '',
            city: '',
            password: '',
            confirmPassword: '',
            description: '',
            image: ''
        });
    }

    add(typescript: string){
        if(this.listTop.indexOf(typescript) == -1){
            this.listTop.push(typescript);
        }

    }

    checkPassword(password: string): boolean{
        return (this.VolConfProfForm.get('password').value.length >= 0);
    }

    doUpdate(){
        if(this.VolConfProfForm.get('password').value === this.VolConfProfForm.get('confirmPassword').value){
            if(this.checkPassword(this.VolConfProfForm.get('password').value)){

                let volunteerUpdate: Volunteer = this.volunteer;

                if(this.VolConfProfForm.get('firstName').value!=''){volunteerUpdate.name=this.VolConfProfForm.get('firstName').value}
                if(this.VolConfProfForm.get('lastName').value!=''){volunteerUpdate.lastname=this.VolConfProfForm.get('lastName').value}
                if(this.VolConfProfForm.get('gender').value!=''){volunteerUpdate.gender=this.VolConfProfForm.get('gender').value}
                if(this.VolConfProfForm.get('bornDate').value!=''){volunteerUpdate.bornDate=this.VolConfProfForm.get('bornDate').value}
                if(this.VolConfProfForm.get('address').value!=''){volunteerUpdate.address=this.VolConfProfForm.get('address').value}
                if(this.VolConfProfForm.get('state').value!=''){volunteerUpdate.state=this.VolConfProfForm.get('state').value}
                if(this.VolConfProfForm.get('city').value!=''){volunteerUpdate.city=this.VolConfProfForm.get('city').value}
                if(this.VolConfProfForm.get('password').value!=''){volunteerUpdate.password=this.VolConfProfForm.get('password').value}
                if(this.VolConfProfForm.get('description').value!=''){volunteerUpdate.description=this.VolConfProfForm.get('description').value}
                if(this.VolConfProfForm.get('image').value!=''){volunteerUpdate.photo=this.VolConfProfForm.get('image').value}
                volunteerUpdate.mail=new RolUser(sessionStorage.getItem("currentUser"),new Roles(2,"volunteer"));
                this.volunteerService.updateVolunteer(volunteerUpdate).subscribe(responde =>{
                    this.router.navigate(['/']);
                },error =>{
                    this.updateError = "It is not possible update volunteer profile!!"
                });
            }else{
                this.updateError = "Password have to be more larger!!";
                alert(this.updateError);
            }
        }else{
            this.updateError = "Password are not equal!!";
            alert(this.updateError);
        }
        
    }


}