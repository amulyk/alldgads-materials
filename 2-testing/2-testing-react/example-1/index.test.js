import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Header } from './index';

it('Renders without crashing', () => {
    const div = document.createElement('div');
    render(<Header />, div);
    unmountComponentAtNode(div);
});

