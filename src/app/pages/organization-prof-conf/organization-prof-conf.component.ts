import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganizationService } from '../../services/organization.service';
import { Organization } from '../../models/organization';
import { RolUser } from '../../models/rolUser';
import { Roles } from '../../models/roles';

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

    constructor(public formBuilder:FormBuilder,public organizationService: OrganizationService,public router: Router) {
        organizationService.getOrganizationByEmail(sessionStorage.getItem("currentUser")).subscribe(
            volg => {
                this.organization = volg;
            }
        );
    }

    ngOnInit() {
        this.OrgConfProfForm = this.formBuilder.group({
            businessName: '',
            commercialName: '',
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
        return (this.OrgConfProfForm.get('password').value.length >= 0);
    }

    doUpdate(){
        if(this.OrgConfProfForm.get('password').value === this.OrgConfProfForm.get('confirmPassword').value){
            if(this.checkPassword(this.OrgConfProfForm.get('password').value)){
                var organizationUpdate=this.organization;
                if(this.OrgConfProfForm.get('businessName').value!=''){organizationUpdate.businessName=this.OrgConfProfForm.get('businessName').value;}
                if(this.OrgConfProfForm.get('commercialName').value!=''){organizationUpdate.commercialName=this.OrgConfProfForm.get('commercialName').value;}
                if(this.OrgConfProfForm.get('address').value!=''){organizationUpdate.address=this.OrgConfProfForm.get('address').value;}
                if(this.OrgConfProfForm.get('state').value!=''){organizationUpdate.state=this.OrgConfProfForm.get('state').value;}
                if(this.OrgConfProfForm.get('city').value!=''){organizationUpdate.city=this.OrgConfProfForm.get('city').value;}
                if(this.OrgConfProfForm.get('password').value!=''){organizationUpdate.password=this.OrgConfProfForm.get('password').value;}
                if(this.OrgConfProfForm.get('description').value!=''){organizationUpdate.description=this.OrgConfProfForm.get('description').value;}
                if(this.OrgConfProfForm.get('image').value!=''){organizationUpdate.photo=this.OrgConfProfForm.get('image').value;}
                organizationUpdate.mail=new RolUser(sessionStorage.getItem("currentUser"),new Roles(1,"Organization"));
                this.organizationService.updateOrganization(organizationUpdate).subscribe(responde =>{
                    this.router.navigate(['/']);
                },error =>{
                    this.updateError = "It is not possible update organization profile!!"
                });
            }else{
                this.updateError = "Password have to be larger!!";
                alert(this.updateError);
            }
        }else{
            this.updateError = "Password are not equal!!";
            alert(this.updateError);
        }
        
    }
}