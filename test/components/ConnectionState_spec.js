import React from 'react';
import { expect } from 'chai';
import { ConnectionState } from '../../src/components/ConnectionState';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithClass,
    findRenderedDOMComponentWithClass,
    Simulate
} from 'react-addons-test-utils';

describe('ConnectionState', () => {

    it ('is not visible when connected', () => {
        const component = renderIntoDocument(<ConnectionState connected={true} />);
        const componentDOM = scryRenderedDOMComponentsWithClass(component, 'visible');
        expect(componentDOM.length).to.equal(0);
    });

    it ('is visible connected', () => {
        const component = renderIntoDocument(<ConnectionState connected={false} />);
        const componentDOM = scryRenderedDOMComponentsWithClass(component, 'visible');
        expect(componentDOM.length).to.equal(1);
    });

    it ('contains connection state message', () => {
        const component = renderIntoDocument(<ConnectionState connected={false} connectionState="Fail" />);
        const componentDOM = findRenderedDOMComponentWithClass(component, 'visible');
        expect(componentDOM.textContent).to.contain("Fail");
    });

});
