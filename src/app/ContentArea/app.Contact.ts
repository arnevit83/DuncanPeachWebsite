import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'Contact',
  templateUrl: './Contact.html',
})

export class ContactComponent {

  faPhone = faPhone;
  faskype = faSkype;
  faEnvelope = faEnvelope;
  falinkedin = faLinkedin;
  public constructor(private titleService: Title , private meta: Meta) {
      //  this.titleService.setTitle( "" );
        //  this.meta.updateTag({ name: 'description', content: '' });
        //  this.meta.updateTag({ name: 'keywords', content: '' });  }
}
}