import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import  HeaderWithColor from '../src/HeaderWithColor';

storiesOf('HeaderWithColor', module)
  .add('Red Header', () => <HeaderWithColor color="red">Red Box</HeaderWithColor>)
  .add('Green Header', () => (
    <HeaderWithColor color="green">
     Green Box
    </HeaderWithColor>
  ));
