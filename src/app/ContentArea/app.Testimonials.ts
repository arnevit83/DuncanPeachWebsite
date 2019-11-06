import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

//import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
//import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'Testimonials',
  templateUrl: './Testimonials.html',
})
export class TestimonialsComponent {
//  faQuoteLeft = faQuoteLeft;
//  faQuoteRight = faQuoteRight;
  public constructor(private titleService: Title, private meta: Meta  ) {
      //  this.titleService.setTitle( "" );
        //  this.meta.updateTag({ name: 'description', content: '' });
        //  this.meta.updateTag({ name: 'keywords', content: '' });  }
}
}
