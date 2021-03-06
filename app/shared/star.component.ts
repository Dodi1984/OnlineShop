import { Component, OnChanges, Input, Output, EventEmitter } from 'angular2/core'

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})



export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    ratingClicked() {
        this.notify.emit(`The rating ${this.rating} was clicked!`);
    }
}