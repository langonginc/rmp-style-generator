import React from 'react';
import { Svgs } from '../../constants/svgs';

const defaultCircleSvgAttrs: Record<string, string> = {
    r: '5',
    opacity: '1',
    fill: '"black"',
    stroke: '"none"',
    strokeWidth: '0',
};

const circleIcon = (
    <svg viewBox="0 0 24 24" height={40} width={40} focusable={false}>
        <circle fill="currentColor" cx="12" cy="12" r="5" />
    </svg>
);

const circleSvgs: Svgs = {
    icon: circleIcon,
    defaultAttrs: defaultCircleSvgAttrs,
    displayName: 'Circle',
};

export default circleSvgs;
