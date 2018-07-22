import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import assert from 'assert';
import Dashboard from '../../frontend/src/DroneSys/containers/Dashboard';
import DroneMap from '../../frontend/src/DroneSys/components/DroneMap';
import { ConnectedRouter } from 'connected-react-router';
import { Store, Provider, History, Enzyme, drones } from './config';
import socket from '../../routes/socket';

/**
 * Tests for Drone System Administrator container
 * Tests rendering of map
 * and tests the number of drones online
 */
describe('Testing <DroneSys /> container component', () => {
    const wrapper = shallow(<Dashboard store={Store} drones={drones} />);

    it('Should render Leaflet map', (done) => {
        const map = wrapper.find('.map__reactleaflet');
        assert(map !== null || map !== undefined);
        done();
    });

    it('Should display 4 drones online', (done) => {
        const title = wrapper.find('h1');
        var value = title.text().match(/[0-9]+$/);
        assert(value && parseInt(value) === 4);
        done();
        process.exit();
    });

});