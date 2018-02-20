import React from 'react';
import { render } from 'enzyme';
import NavBar from 'govuk-react-components/navbar';
import {NavItem} from 'govuk-react-components/navitem';

describe('The Nav Bar Component', () => {
  it('should render correctly when not passed a propositionHeader link', () => {
    expect(
      render(<NavBar propositionHeader='Lorem ipsum' />)
    ).toMatchSnapshot();
  });

  it('should render correctly when passed a link to the propositionHeader', () => {
    expect(
      render(<NavBar propositionHeader='Lorem ipsum' propositionHeaderLink='/' />)
    ).toMatchSnapshot();
  });

  describe('With navitems', () => {
    it('should render a navitem inside a navbar', () => {
      expect(
        render(
          <NavBar>
            <NavItem href='url-to-page-1' active>Navigation item #1</NavItem>
          </NavBar>
        )
      ).toMatchSnapshot();
    });
  
    it('should render multiple navitems inside a navbar', () => {
      expect(
        render(
          <NavBar>
            <NavItem href='url-to-page-1' active>Navigation item #1</NavItem>
            <NavItem href='url-to-page-2' active>Navigation item #2</NavItem>
            <NavItem href='url-to-page-3' active>Navigation item #3</NavItem>
          </NavBar>
        )
      ).toMatchSnapshot();
    });
  })
});