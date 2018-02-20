import React from 'react'
import {render} from 'enzyme'
import {SubNavBar} from 'govuk-react-components/subnavbar';
import {NavItem} from 'govuk-react-components/navitem';

describe('The NavItem Component', () => {
  it('should render an included classname', () => {
    expect(
      render(
        <SubNavBar>
          <NavItem href="#test" className="test class-name">Item A</NavItem>
        </SubNavBar>
      )
    ).toMatchSnapshot()
  });

  it('should render with an active class if the active flag is true', () => {
    expect(
      render(
        <SubNavBar>
          <NavItem href="#test" className="test class-name" active>Item A</NavItem>
        </SubNavBar>
      )
    ).toMatchSnapshot()
  });
});

