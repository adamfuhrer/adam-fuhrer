import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-color-swatch',
    templateUrl: './color-swatch.component.html',
    styleUrls: ['./color-swatch.component.scss']
})
export class ColorSwatchComponent implements OnInit {
    @Input() color: string;
    @Input() secondColor: string;
    @Input() year: string;

    ngOnInit() {
    }

    // Scroll color into view
    onClick() {
        const element = document.getElementById(this.year);
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
}
