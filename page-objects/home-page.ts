import { Selector } from 'testcafe';

const label = Selector('label');

export class Page {
    offerButton: Selector;
    header: Selector;

    constructor () {
        this.header             = Selector('.headerTagLine');
        this.offerButton        = Selector('.getOfferCallToActionButton');

    }
}