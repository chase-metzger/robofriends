import {shallow, mount} from 'enzyme';

import React from 'react';
import Card from './Card';

describe('<Card />', () => {
	it('expect to render Card component', () => {
		expect(shallow(<Card />)).toMatchSnapshot();
	});
});
