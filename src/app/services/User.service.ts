import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
  //  private users: User[  
  //      firstName: 'Aymen',
  //      lastName: 'Ahmed',
  //      email: 'aymen@gmail.com',
  //      drinkPreference: 'coca',
  //      hobbies?: [
  //       'coder', 
  //       'boire du café'
  //      ]
    
  // ];
  private users: User[] = [
    new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café'])
];

  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}