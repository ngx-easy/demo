import { Component, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { EasyModalService } from '../../../../../projects/modal/src/public_api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'example-modal',
  templateUrl: './example-modal.component.html',
  styleUrls: ['./example-modal.component.scss']
})
export class ExampleModalComponent implements OnDestroy {

  @ViewChild('template') template: TemplateRef<any>;

  private closeRequestSubscription: Subscription;

  constructor(public modalService: EasyModalService) {
    this.closeRequestSubscription = this.modalService.closeRequest.subscribe(() => {
      this.close();
    });
  }

  ngOnDestroy() {
    if (this.closeRequestSubscription) {
      this.closeRequestSubscription.unsubscribe();
    }
  }

  open() {
    this.modalService.open(this.template);
  }

  close() {
    this.modalService.close();
  }
}
