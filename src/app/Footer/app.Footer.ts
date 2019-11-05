import { Component } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {formatDate } from '@angular/common';
@Component({
  selector: 'footer',
  templateUrl: './footer.html',
})
export class FooterComponent {
    faChevronDown = faChevronUp;
    jstoday = '';
    today= new Date();
    constructor() {
      this.jstoday = formatDate(this.today, 'yyyy', 'en-US', '+0530');
    }
}
