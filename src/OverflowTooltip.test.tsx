import { Tooltip, Typography } from '@material-ui/core';
import { shallow } from 'enzyme';
import React from 'react';
import OverflowTooltip from './OverflowTooltip';

describe('OverflowTooltip', () => {
  const mockChildComponent = <Typography data-test-id="test">Tooltip Test</Typography>;

  it('should render without crashing', () => {
    // Given
    const wrapper = shallow(<OverflowTooltip title="Tooltip Test">{mockChildComponent}</OverflowTooltip>);

    // Then
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the Tooltip with the correct title', () => {
    // Given
    const title = 'Testing Tooltip';
    const tooltip = shallow(<OverflowTooltip title={title}>{mockChildComponent}</OverflowTooltip>).find(Tooltip);

    // Then
    expect(tooltip.exists()).toBe(true);
    expect(tooltip.prop('title')).toStrictEqual(title);
  });

  it('should render the children prop correctly', () => {
    // Given
    const children = shallow(<OverflowTooltip title="Tooltip Test">{mockChildComponent}</OverflowTooltip>).children();

    // Then
    expect(children.matchesElement(mockChildComponent)).toBe(true);
  });

  it('should disable hover listener of Tooltip when overflow is false', () => {
    // Given
    jest.spyOn(React, 'useState').mockImplementationOnce(() => [false, jest.fn()]);

    const tooltip = shallow(<OverflowTooltip title="Tooltip Test">{mockChildComponent}</OverflowTooltip>).find(Tooltip);

    // Then
    expect(tooltip.exists()).toBe(true);
    expect(tooltip.prop('disableHoverListener')).toBe(true);
  });

  it('should enable hover listener of Tooltip when overflow is true', () => {
    // Given
    jest.spyOn(React, 'useState').mockImplementationOnce(() => [true, jest.fn()]);

    const tooltip = shallow(<OverflowTooltip title="Tooltip Test">{mockChildComponent}</OverflowTooltip>).find(Tooltip);

    // Then
    expect(tooltip.exists()).toBe(true);
    expect(tooltip.prop('disableHoverListener')).toBe(false);
  });

  it('should set overflow as true when child element overflows', () => {
    // Given
    const setOverflowMock = jest.fn();
    jest.spyOn(React, 'useState').mockImplementationOnce(() => [false, setOverflowMock]);
    jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { scrollWidth: 147, clientWidth: 95 } });
    jest.spyOn(React, 'useEffect').mockImplementation(callback => callback());

    shallow(<OverflowTooltip title="Tooltip Test">{mockChildComponent}</OverflowTooltip>);

    // Then
    expect(setOverflowMock).toHaveBeenCalledWith(true);
  });

  it('should do nothing if child element does not overflow', () => {
    // Given
    const setOverflowMock = jest.fn();
    jest.spyOn(React, 'useState').mockImplementationOnce(() => [false, setOverflowMock]);
    jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { scrollWidth: 50, clientWidth: 95 } });
    jest.spyOn(React, 'useEffect').mockImplementation(callback => callback());

    shallow(<OverflowTooltip title="Tooltip Test">{mockChildComponent}</OverflowTooltip>);

    // Then
    expect(setOverflowMock).not.toHaveBeenCalled();
  });

  it('should do nothing if ref is not defined', () => {
    // Given
    const setOverflowMock = jest.fn();
    jest.spyOn(React, 'useState').mockImplementationOnce(() => [false, setOverflowMock]);
    jest.spyOn(React, 'useEffect').mockImplementation(callback => callback());

    shallow(<OverflowTooltip title="Tooltip Test">{mockChildComponent}</OverflowTooltip>);

    // Then
    expect(setOverflowMock).not.toHaveBeenCalled();
  });
});