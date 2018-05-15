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
    public preview:any="data:image/png;base64,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pWzmoF7a1Psf1EvJA6Qwkt2Rx5lvQkqh6cJfmce69hqrKyp5+2WzsrI5mvL8CEJK50YpjluOmzwlranqvw8b97xHu2Bb/zpoJBdUmftBe+DGMRskQkrvRumid2vBINs03h411544VMnbv7/csc1bd3mf98Yri+KDkNKm5YzbA3elpT9e7u7XSslrqV+lqepetfjHy92VitoDt+2MGedHxm32T3DW4bTtmLpWT1zz0TX1zX69WrDP+2Nvvrz7qV6GpuZt66Beqn+2vEnfnZ62HXbpCGkrRFIet/pCEbXirfnn9WKuXsz13elgMp8t/WUQBv9/Mp8QwtBUy9BzllktZFf+4TXHnR23tv0Z7IS0XZZB+J/zq9d79ZWlhW5ykjKe+4EfRjchmbpmW8aXLj11hpOTdp8HVBLS1gkjedzqeQv/VbOSPOf28eBVFbmMmfu29/m7O2w744gZE4S0rft48XlvNJzMjpqVnXJ+jXe4Gnln3aHHOTpCgrfw/zzvtvrj/VqxWshqmnr3rUMyjqNIDiazC8f15kvJ9SJCwk0b49liPFvomlotZKt5O29bmqreTKWNY0XGcSSlN18OvPlgMuNwiJBw1wFPd+R1R56iKJqqGrp2PZc2knHwhcf4gZBw9xGUjHzKeR64swEgJDwalvUipPV3fHXG5yND41mahLSunGUyCB+HIsNQENK6mmtdJE3nUJR4/h8hrf/tyfOXWFGUfMZslPibQkhrHyNp6pv9umls9eGBZehv9huf3w0IQvoO5Zz9++FOflu3SwXbenu0U8rxwLKvEJ7nMQpfFUSR4846w8l04W/DvTm6puYy5m6lUCtmOV9HSAC7dgAhAYQEgJAAQgIICSAkAIQEEBJASAAhMQQAIQGEBBASAEICCAkgJICQABASQEgAIQGEBICQAEICCAkgJACEBBASQEgAIQEgJICQAEICCAkAIQGEBBASAEICCAkgJICQABASQEgAIQGEBICQAEICCAkgJACEBBASQEgAIQEgJICQAEICCAkAIQGEBBASQEgACAkgJICQABASQEgAIQGEBICQAEICCAkgJACEBBASQEgAIQEgJICQAEICCAkAIQGEBBASQEgACAkgJICQAEICQEgAIQGEBICQAEICCAkgJACEBBASQEgAIQEgJICQAEICCAkAIQGP5n8DAFFi1aH1EFkPAAAAAElFTkSuQmCC";
    public uploadme;

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
                
                organizationUpdate.mail=new RolUser(sessionStorage.getItem("currentUser"),new Roles(1,"Organization"));
                this.organizationService.updateOrganization(organizationUpdate).subscribe(responde =>{
                    
                    if(this.uploadme!=null){
                        var fd = new FormData();
                        //var imgBlob = this.dataURItoBlob(this.uploadme);
                        //fd.append('file', imgBlob);
                        fd.append('file', this.uploadme);
                        this.organizationService.setOrganizationImage(sessionStorage.getItem("currentUser"),fd).subscribe(res=>{
                            this.router.navigate(['/']);
                            alert('Update Success!!');
                              }, error=>{console.log(error);});
                    }
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


    onFileSelected(event){
        this.uploadme = event.target.files[0];
        var reader = new FileReader();
        reader.onload = e => {
          this.preview=e.target.result;  
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    
       dataURItoBlob(dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var array = [];
        for (var i = 0; i < binary.length; i++) {
          array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
          type: mimeString
        });
      }


}