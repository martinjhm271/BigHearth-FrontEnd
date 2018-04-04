import{Component, OnInit}from '@angular/core';
import {Router}from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-select-rol-page',
  templateUrl: './select-rol-page.component.html',
  styleUrls: ['./select-rol-page.component.css']
})
export class SelectRolPageComponent implements OnInit {
  private todoForm: FormGroup;

  constructor(
    
    public formBuilder: FormBuilder,
    public router: Router,
  ) {

  }

  ngOnInit() {

    }





}
