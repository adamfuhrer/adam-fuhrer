import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-color-swatch-large',
    templateUrl: './color-swatch-large.component.html',
    styleUrls: ['./color-swatch-large.component.scss']
})
export class ColorSwatchLargeComponent implements OnInit {
    @Input() name: string;
    @Input() pantone: string;
    @Input() hex: string;
    @Input() year: string;
    @Input() link: string;
    @Input() imageSources: Array<string>;

    @Input() @HostBinding('class.has-second-color') nameSecond: string;
    @Input() pantoneSecond: string;
    @Input() hexSecond: string;
    @Input() @HostBinding('class.is-hiding-color-bar') isHidingColorBar: boolean;

    ngOnInit() {
    }
}
