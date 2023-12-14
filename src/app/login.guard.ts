// import { CanActivateFn } from '@angular/router';

import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login/login.service";

export const loginGuard: CanActivateFn = (route, state) => {
  
  if(inject(LoginService).isLoggedIn){
    return true
  }
  inject(Router).navigate(['/login'])
  return inject(LoginService).isLoggedIn
};

export const loginChildGuard: CanActivateChildFn = (route, state) => {
  
  if(inject(LoginService).isAdmin){
    return true
  }
  
  return false
};