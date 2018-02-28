import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Organization } from '../../models/organization';


@Component({
  selector: 'app-organization-prof-conf',
  templateUrl: './organization-prof-conf.component.html',
  styleUrls: ['./organization-prof-conf.component.css']
})

export class OrganizationProfConf implements OnInit {
    public OrgConfProfForm: FormGroup;
    public organization: Organization;
    public updateError: string;
    private listTop: string[] = [];

    toppingList = ['AMBIENTAL', 'COMUNITARIO', 'CULTURAL', 'EDUCATIVO', 'INTERNACIONAL',
                 'PROTECCIÓN CIVIL','DEPORTIVO','SOCIO-SANITARIO','SOCIAL','OCIO Y TIEMPO LIBRE'];

    constructor(public formBuilder:FormBuilder,public usersService: UsersService,public router: Router) {
        usersService.getUser(sessionStorage.getItem("currentUser")).subscribe(
            volg => {
                this.organization = volg;
                console.info(this.organization);
            }
        );
    }

    ngOnInit() {
        this.OrgConfProfForm = this.formBuilder.group({
            businessName: '',
            commercialName: '',
            email: '',
            nit: '',
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
        return (this.OrgConfProfForm.get('password').value.length > 4);
    }

    doUpdate(){
        if(this.OrgConfProfForm.get('password').value === this.OrgConfProfForm.get('confirmPassword').value){
            if(this.checkPassword(this.OrgConfProfForm.get('password').value)){
                let organizationUpdate: Organization = new Organization(this.organization.username,this.OrgConfProfForm.get('password').value,this.OrgConfProfForm.get('email').value,
                this.OrgConfProfForm.get('state').value,this.OrgConfProfForm.get('city').value,this.OrgConfProfForm.get('address').value,this.OrgConfProfForm.get('description').value,this.listTop,
                this.organization.volunteersMade,this.organization.eventRegistered,this.OrgConfProfForm.get('commercialName').value,this.OrgConfProfForm.get('businessName').value,this.OrgConfProfForm.get('nit').value,this.OrgConfProfForm.get('image').value);

                this.usersService.updateOrganization(organizationUpdate).subscribe(responde =>{
                    this.router.navigate(['/']);
                },error =>{
                    this.updateError = "It is not possible update organization profile!!"
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