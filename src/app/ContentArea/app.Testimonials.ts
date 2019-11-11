import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';



declare var $: any;


@Component({
  selector: 'Testimonials',
  templateUrl: './Testimonials.html',
})
export class TestimonialsComponent {

  public constructor(private titleService: Title, private meta: Meta  ) {
      //  this.titleService.setTitle( "" );
        //  this.meta.updateTag({ name: 'description', content: '' });
        //  this.meta.updateTag({ name: 'keywords', content: '' });  }
      }
        ngOnInit() {
          $(function() {
            var spanWidth = $('.text span').width();
            $('.text').animate( { width: spanWidth }, 1000 );
          });
        };


}
