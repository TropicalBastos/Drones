import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Intro from '../../frontend/src/Intro/Main';
import { ConnectedRouter } from 'connected-react-router';
import { Store, Provider, History, Enzyme } from './config';

/**
 * Basic menu context
 * should test to see if there are two menu items present
 */
describe('Testing <Intro /> container component', () => {
  it('Should display two menu links', (done) => {
    const wrapper = mount(
    <Provider store={Store}>
        <ConnectedRouter history={History}>
          <div>
            <Intro />
          </div>
        </ConnectedRouter>
      </Provider>
    );
    expect(wrapper.find('a')).to.have.length(2);
    done();
  });

});