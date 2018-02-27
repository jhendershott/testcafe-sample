import { Selector } from 'testcafe';

const label = Selector('label');

export class Seller {

    yearInput: Selector;
    makeInput: Selector;
    modelInput: Selector;
    selectList: Selector;
    zipInput: Selector;
    titleYes: Selector;
    tiresInflatedYes: Selector;
    drivableYes: Selector;
    mileageInput: Selector;
    bodyPanelsYes: Selector;
    bodyDamageNo: Selector;
    glassLightDamagaNo: Selector;
    InteriorItemsYes: Selector;
    floodDamageNo: Selector;
    InstantOfferContainer: Selector;
    preInstantOfferAmt: Selector;
    nextButton: Selector;
    listItem: Selector;
    
    constructor () {
        this.yearInput          = Selector('#yearInput');
        this.makeInput          = Selector('#makeInput');
        this.modelInput         = Selector('#modelInput');
        this.selectList         = Selector('.list-group-item');
        this.zipInput           = Selector('.zipInput');
        this.titleYes           = Selector('#titleTypeCheckboxYesId').find('input[type="radio"]');
        this.mileageInput       = Selector('#mileageInput');

        this.InstantOfferContainer = Selector('#preInstantOfferContainer');
        this.preInstantOfferAmt = Selector('#preInstantOfferAmt');
        this.nextButton         = Selector('.navNextLinkClass');
        this.listItem           = Selector('.list-group-item');
    }

}