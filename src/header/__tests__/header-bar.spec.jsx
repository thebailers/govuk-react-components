import React from 'react';
import { render } from 'enzyme';
import Header from 'govuk-react-components/header/header-bar';

describe('The Header Bar Component', () => {
  it('should render correctly', () => {
    expect(
      render(<Header propositionHeader='Lorem ipsum' />)
    ).toMatchSnapshot();
  });

  it('should render correctly when no propositionHeader is passed', () => {
    expect(render(<Header />)).toMatchSnapshot();
  });

  it('should render a link when passed', () => {
    expect(
      render(<Header propositionHeader="Lorem ipsum" propositionHeaderLink="/" />)
    ).toMatchSnapshot();
  });
});
