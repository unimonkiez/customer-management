import * as React from 'react';
import ViewDriverDetails from './view-driver-details';
import { shallow } from 'enzyme';

const domMap = {
    name: '[data-unittest-id="name"]',
    phone: '[data-unittest-id="phone"]',
    email: '[data-unittest-id="email"]'
}

describe('ViewDriverDetails', () => {
    test('renders', () => {
        shallow(
            <ViewDriverDetails />
        );
    });
    test('renders name when given', () => {
        const name = 'YUVAL';
        const viewDriverDetails =  shallow(
            <ViewDriverDetails name={name} />
        );
        const nameElement = viewDriverDetails.find(domMap.name);
        expect(nameElement.text()).toBe(name);
    });
    test('renders phone when given', () => {
        const phone = 'YUVAL';
        const viewDriverDetails =  shallow(
            <ViewDriverDetails phone={phone} />
        );
        const phoneElement = viewDriverDetails.find(domMap.phone);
        expect(phoneElement.text()).toBe(phone);
    });
    test('renders email when given', () => {
        const email = 'YUVAL';
        const viewDriverDetails =  shallow(
            <ViewDriverDetails email={email} />
        );
        const emailElement = viewDriverDetails.find(domMap.email);
        expect(emailElement.text()).toBe(email);
    });
});