import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Meta }     from '@angular/platform-browser';

@Component({
  selector: 'Inspo',
  templateUrl: './Inspo.html',
})
export class InspoComponent {

  public constructor(private titleService: Title, private meta: Meta  ) {
       //  this.titleService.setTitle( "" );
        //  this.meta.updateTag({ name: 'description', content: '' });
        //  this.meta.updateTag({ name: 'keywords', content: '' });  }
}
}