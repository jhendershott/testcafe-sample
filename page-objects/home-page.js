import { Selector } from 'testcafe';

const label = Selector('label');

export class HomePage {

    constructor () {
        this.header             = Selector('.headerTagLine');
        this.offerButton        = Selector('.getOfferCallToActionButton');

    }
}