import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'Home',
  templateUrl: './Home.html',
})
export class HomeComponent {
    // faChevronDown = faChevronDown;
    // faPhone = faPhone;
    // faEnvelope = faEnvelope;
    faAngleDoubleDown = faAngleDoubleDown;
    public constructor(private titleService: Title, private meta: Meta ) {
        //  this.titleService.setTitle( "" );
        //  this.meta.updateTag({ name: 'description', content: '' });
        //  this.meta.updateTag({ name: 'keywords', content: '' });
       }
}
