import { Selector } from 'testcafe';

const label = Selector('label');

export class Seller {
    listItem: Selector;
    nextButton: Selector;
    drivableYes: Selector;
    mileageInput: Selector;
    bodyPanelsYes: Selector;
    bodyDamageNo: Selector;
    glassLightDamagaNo: Selector;
    InteriorItemsYes: Selector;
    floodDamageNo: Selector;
    InstantOfferContainer: Selector;
    preInstantOfferAmt: Selector;
    titleYes: Selector;
    tiresInflatedYes: Selector;
    zipInput: Selector;
    makeInput: Selector;
    selectList: Selector;
    modelInput: Selector;
    yearInput: Selector;

    constructor () {
        this.yearInput          = Selector('#yearInput');
        this.makeInput          = Selector('#makeInput');
        this.modelInput         = Selector('#modelInput');
        this.selectList         = Selector('.list-group-item');
        this.zipInput           = Selector('.zipInput');
        this.titleYes           = Selector('#titleTypeCheckboxYesId > div > input[type="radio"]');
        this.tiresInflatedYes   = Selector('#tiresCheckboxYesId > div > input[type="radio"]');
        this.titleYes           = Selector('#tiresCheckboxYesId > div > input[type="radio"]');
        this.drivableYes        = Selector('#drivableCheckboxYesId > div > input[type="radio"]');
        this.mileageInput       = Selector('#mileageInput');
        this.bodyPanelsYes      = Selector('#bodyPanelCheckboxYesId > div > input[type="radio"]');
        this.bodyDamageNo       = Selector('#bodyDamageCheckboxYesId > div > input[type="radio"]');
        this.glassLightDamagaNo = Selector('#glassAndLightCheckboxYesId > div > input[type="radio"]');
        this.InteriorItemsYes   = Selector('#interiorItemsCheckboxYesId > div > input[type="radio"]');
        this.floodDamageNo      = Selector('#floodAndFireCheckboxYesId > div > input[type="radio"]');

        this.InstantOfferContainer = Selector('#preInstantOfferContainer');
        this.preInstantOfferAmt = Selector('#preInstantOfferAmt');
        this.nextButton         = Selector('.navNextLinkClass');
        this.listItem           = Selector('.list-group-item');
    }

}