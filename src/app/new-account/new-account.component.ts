import { Component, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // we overrode the instances we got from app component
    // solution: just remove it from providers array
  constructor(private loggingService: LoggingService,
    private accountService: AccountsService) {
      this.accountService.statusUpdated.subscribe(
        (status: string) => alert('new status: '+status)
      );
     }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);

    //this will work, but this is not how to use services in angular
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);


    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
