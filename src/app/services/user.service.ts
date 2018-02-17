import{ Injectable }from'@angular/core';
import 'rxjs/add/observable/of';

import { User }from '../models/user';
import { Observable } from 'rxjs/Observable';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { Http } from '@angular/http';
import { AuthService } from '../common/auth.service';

@Injectable()
export class UserService extends APIService{
    private users: User[];

    constructor(public config: AppConfiguration, public http:Http, public authService: AuthService) {
        super(config,authService,http);
    }

    login(username: string, password: string) {
        // Mock
        //this.authService.accessToken = 'test_access_token';
        //return Observable.of({ access_token: this.authService.accessToken });
        return this.post('user/login', { username, password }, {credentials: false}).map(loginResponse => {
            if(loginResponse){
                this.authService.accessToken = loginResponse.accesstoken;
            }
        })
    }
 
    list(): Observable<User[]> {
        // Mock
        //return Observable.of(this.users);
        console.log(this.get('user/items'));
        return this.get('user/items');
    }

     
    create(firstname: string, lastname: string, image: string, username:string, email: string, password:string) {
        // Mock
        //this.users.push(new User(name, lastname, image));
        //return Observable.of({});
        return this.post('user/items', new User(firstname, lastname, image, username, email, password));
    }

    getUserByEmail(email : string){
        return this.get('user/userByEmail/'+email);

    }

}