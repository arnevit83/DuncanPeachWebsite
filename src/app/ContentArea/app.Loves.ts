import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'Loves',
  templateUrl: './Loves.html',
})

export class LovesComponent {
  public constructor(private titleService: Title, private meta: Meta ) {

          //  this.titleService.setTitle( "" );
        //  this.meta.updateTag({ name: 'description', content: '' });
        //  this.meta.updateTag({ name: 'keywords', content: '' });  }
      }
      ngOnInit() {
        $(function() {
          function galleryfeedkFunc() {
            window.setTimeout(function() {
              $(".gallery-feed").find("a").replaceWith(function() {
                return $(this).contents();
              });

            }, 3000);
          };
       
          setTimeout(function() {
            var spanWidth = $('.text span').width();
            $('.text').animate( { width: spanWidth }, 1000 );
        }, 100);
            $('.gallery-feed').spectragram('getUserFeed', {
        complete: galleryfeedkFunc(),
        max: 8,
        size: "small",
        wrapEachWith: "<div class='IGFeed'></div>"
      });
        });
      };
}
