import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Tokenmodel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44349/api/auth/';
  constructor(private httpClient:HttpClient) { }

  login(user: LoginModel){
    return this.httpClient.post<SingleResponseModel<Tokenmodel>>(this.apiUrl+"login",user)
  }


  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }
}
