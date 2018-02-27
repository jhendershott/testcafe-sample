import { Selector } from 'testcafe';

const label = Selector('label');

export class HomePage {

    header: Selector;
    offerButton: Selector;
    constructor () {
        this.header             = Selector('.headerTagLine');
        this.offerButton        = Selector('.getOfferCallToActionButton');

    }
}