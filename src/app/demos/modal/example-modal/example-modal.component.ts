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

  private closeSubscription: Subscription;

  constructor(public modalService: EasyModalService) {
    this.onClose = this.modalService.closeEvent.subscribe(() => {
      this.onClose();
    });
  }

  ngOnDestroy() {
    if (this.closeSubscription) {
      this.closeSubscription.unsubscribe();
    }
  }

  open() {
    this.modalService.open(this.template);
  }

  close() {
    this.modalService.close();
  }

  onClose() {
    console.log('On Close');
  }
}
