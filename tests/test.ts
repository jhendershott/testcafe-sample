import { Selector, Role} from 'testcafe';
import { HomePage } from '../page-objects/home-page'
import { Seller } from '../page-objects/seller-offer-generate';

fixture `Tests for Peddle`
    .page `https://www.peddle.com/`
    .httpAuth({
        username: 'some.dude@email.com',
        password: 'definitelynotmyrealpassword',
        domain: 'us/corp',
        workstation: 'theMostPowerful'
    })

    const homePage = new HomePage();
    const seller = new Seller();

    const regularUser = Role('https://www.peddle.com', async t => {
        await t
            .click(Selector('#headerLoginLinkId'))
            .typeText(Selector('#loginEmailInput'), 'some.dude@email.com')
            .typeText(Selector('#loginPasswordInput') ,'definitelynotmyrealpassword')
            .click(Selector('#loginModalButtonId'));
    });

// Tests
test('Testing Nissan Titan', async t => {
    await t
        .expect(homePage.header.innerText).contains('This is Peddle,')
        .click(homePage.offerButton)
        .typeText(seller.yearInput,'2009')
        .typeText(seller.makeInput,'Nissan')
        .typeText(seller.modelInput,'Titan')
        .click(seller.listItem.withText('Titan Crew Cab (4 door)'))
        .click(seller.listItem.withText('SE (Flex Fuel)'))
        .click(seller.titleYes)
        .click(seller.zipInput)
        .typeText(seller.zipInput, '78641')        
        .click(seller.listItem.withText('All wheels are mounted and tires are inflated.'))
        .click(seller.listItem.withText('It starts and drives.'))
        .typeText(seller.mileageInput, '125')        
        .pressKey('enter')
        .click(seller.listItem.withText('All body panels (doors, bumpers, hood, etc.) are properly intact and attached.'))
        .click(seller.listItem.withText('It has no exterior damage.'))
        .click(seller.listItem.withText('The mirrors, glass or lights are intact.'))
        .click(seller.listItem.withText('All the interior parts (seats, airbags, radio, etc.) are properly intact and attached.'))
        .click(seller.listItem.withText('It has no flood or fire damage.'))

        .expect(seller.InstantOfferContainer.innerText).contains(`We'll pick it up and pay`)
        .expect(seller.preInstantOfferAmt.innerText).eql('$9,000', 'this is less than I owe, its total crap');
});
        
 test('Testing Chev Silverado', async t => {
     await t
         .resizeWindow(400, 480)
         .expect(homePage.header.innerText).contains('This is Peddle,')
         .click(homePage.offerButton)
         .typeText(seller.yearInput,'2009')
         .typeText(seller.makeInput,'Chevrolet')
         .typeText(seller.modelInput,'silver')
         .click(seller.listItem.withText('Silverado Crew Cab (4 door)'))
         .click(seller.listItem.withText('C1500 (Flex Fuel)'))
 });

 test('Log in', async t => {
    await t
        .resizeWindow(1024,768)
        .useRole(regularUser);
        
 });
