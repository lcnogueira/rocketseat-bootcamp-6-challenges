import React from 'react';
import { mount } from 'enzyme';

import Header from '../../components/Header';

it('should render a search input and an img element ', () => {
  const wrapper = mount(<Header />);

  expect(wrapper.find('img').exists()).toBe(true);
  expect(wrapper.find('input[name="search"]').exists()).toBe(true);
});
