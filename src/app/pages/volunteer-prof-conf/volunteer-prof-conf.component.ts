import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Volunteer } from '../../models/volunteer';

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

    constructor(public formBuilder:FormBuilder,public usersService: UsersService,public router: Router) {
        usersService.getUser(sessionStorage.getItem("currentUser")).subscribe(
            volg => {
                this.volunteer = volg;
                console.log(this.volunteer);
            }
        );
    }

    ngOnInit() {
        this.VolConfProfForm = this.formBuilder.group({
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            gender: '',
            bornDate: '',
            address: '',
            state: '',
            city: '',
            password: '',
            confirmPassword: '',
            description: '',
            hours: '',
            image: ''
        });
    }

    add(typescript: string){
        if(this.listTop.indexOf(typescript) == -1){
            this.listTop.push(typescript);
        }

    }

    checkPassword(password: string): boolean{
        return (this.VolConfProfForm.get('password').value.length > 4);
    }

    doUpdate(){
        if(this.VolConfProfForm.get('password').value === this.VolConfProfForm.get('confirmpassword').value){
            if(this.checkPassword(this.VolConfProfForm.get('password').value)){
                let volunteerUpdate: Volunteer = new Volunteer(this.volunteer.username,this.VolConfProfForm.get('password').value,this.VolConfProfForm.get('mail').value,
                this.VolConfProfForm.get('state').value,this.VolConfProfForm.get('city').value,this.VolConfProfForm.get('address').value,this.VolConfProfForm.get('description').value,this.listTop,this.volunteer.getVolunteersMade(),this.volunteer.eventRegistered,this.VolConfProfForm.get('firstName').value,this.VolConfProfForm.get('lastName').value,this.VolConfProfForm.get('gender').value,
                this.VolConfProfForm.get('bornDate').value,this.VolConfProfForm.get('hours').value,this.VolConfProfForm.get('image').value);

                this.usersService.updateVolunteer(volunteerUpdate).subscribe(responde =>{
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