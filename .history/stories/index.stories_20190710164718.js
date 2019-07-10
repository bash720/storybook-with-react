import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import  HeaderWithColor from '../src/HeaderWithColor';

storiesOf('HeaderWithColor', module)
  .add('with text', () => <HeaderWithColor color="red">Red Box</HeaderWithColor>)
  .add('with some emoji', () => (
    <HeaderWithColor color="green">
     Green Box
    </HeaderWithColor>
  ));
