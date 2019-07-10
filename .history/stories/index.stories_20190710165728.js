import React from 'react';

import { storiesOf } from '@storybook/react';
import {text, withKnobs } from "@storybook/addon-knobs";

import  HeaderWithColor from '../src/HeaderWithColor';

const headerStories = storiesOf('HeaderWithColor', module);

headerStories.addDecorator(withKnobs);
headerStories.add('Red Header', () => { 
  const color = text("color", 'red');
   return  <HeaderWithColor color={color}>Red Box</HeaderWithColor>
  });
headerStories.add('Green Header', () => {
  const color = text("color", 'green');
   return  <HeaderWithColor color={color}>
     Green Box
    </HeaderWithColor>
  });
