import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../Services/user.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  let userService: UserService = new UserService(); 
  let router: Router = new Router();
  
  if (userService != null && !userService.isLogged()) {
    router.navigate(['/Login']); 
    return false;
  }
  
  return true;

};
