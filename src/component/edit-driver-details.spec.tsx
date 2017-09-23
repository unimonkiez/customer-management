import * as React from 'react';
import EditDriverDetails from './edit-driver-details';
import { shallow } from 'enzyme';
import * as ShallowRenderer from 'react-test-renderer/shallow';

const domMap = {
    name: '[data-unittest-id="name"]',
    phone: '[data-unittest-id="phone"]',
    email: '[data-unittest-id="email"]'
}

describe('EditDriverDetails', () => {
    test('renders with some classes', () => {
        const renderer = ShallowRenderer.createRenderer();
        const component = renderer.render(
            <EditDriverDetails />
        );
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    });
    describe('accepts name', () => {
        test('renders name when given', () => {
            const name = 'YUVAL';
            const viewDriverDetails =  shallow(
                <EditDriverDetails name={name} />
            );
            const nameElement = viewDriverDetails.find(domMap.name);
            expect(nameElement.props().value).toBe(name);
        });
        test('ok on change without change callback', () => {
            const name = 'YUVAL';
            const viewDriverDetails =  shallow(
                <EditDriverDetails name={name}  />
            );
            const nameElement = viewDriverDetails.find(domMap.name);
            nameElement.simulate('change', { target: { value: '' } });
        });
        test('calls on name change when name is changed', () => {
            const name = 'YUVAL';
            const handleNameChange = jest.fn();
            const viewDriverDetails =  shallow(
                <EditDriverDetails name={name} onNameChange={handleNameChange} />
            );
            const nameElement = viewDriverDetails.find(domMap.name);
            const newName = 'YUVAL2';
            nameElement.simulate('change', { target: { value: newName } });
    
            expect(handleNameChange.mock.calls[0][0]).toBe(newName);
        });
    });
    describe('accepts phone', () => {
        test('renders phone when given', () => {
            const phone = 'YUVAL';
            const viewDriverDetails =  shallow(
                <EditDriverDetails phone={phone} />
            );
            const phoneElement = viewDriverDetails.find(domMap.phone);
            expect(phoneElement.props().value).toBe(phone);
        });
        test('ok on change without change callback', () => {
            const phone = 'YUVAL';
            const viewDriverDetails =  shallow(
                <EditDriverDetails phone={phone}  />
            );
            const phoneElement = viewDriverDetails.find(domMap.phone);
            phoneElement.simulate('change', { target: { value: '' } });
        });
        test('calls on phone change when phone is changed', () => {
            const phone = 'YUVAL';
            const handlePhoneChange = jest.fn();
            const viewDriverDetails =  shallow(
                <EditDriverDetails phone={phone} onPhoneChange={handlePhoneChange} />
            );
            const phoneElement = viewDriverDetails.find(domMap.phone);
            const newPhone = 'YUVAL2';
            phoneElement.simulate('change', { target: { value: newPhone } });
    
            expect(handlePhoneChange.mock.calls[0][0]).toBe(newPhone);
        });
    });
    describe('accepts email', () => {
        test('renders email when given', () => {
            const email = 'YUVAL';
            const viewDriverDetails =  shallow(
                <EditDriverDetails email={email} />
            );
            const emailElement = viewDriverDetails.find(domMap.email);
            expect(emailElement.props().value).toBe(email);
        });
        test('ok on change without change callback', () => {
            const email = 'YUVAL';
            const viewDriverDetails =  shallow(
                <EditDriverDetails email={email}  />
            );
            const emailElement = viewDriverDetails.find(domMap.email);
            emailElement.simulate('change', { target: { value: '' } });
        });
        test('calls on email change when email is changed', () => {
            const email = 'YUVAL';
            const handleEmailChange = jest.fn();
            const viewDriverDetails =  shallow(
                <EditDriverDetails email={email} onEmailChange={handleEmailChange} />
            );
            const emailElement = viewDriverDetails.find(domMap.email);
            const newEmail = 'YUVAL2';
            emailElement.simulate('change', { target: { value: newEmail } });
    
            expect(handleEmailChange.mock.calls[0][0]).toBe(newEmail);
        });
    });
});