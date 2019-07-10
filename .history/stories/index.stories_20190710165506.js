import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";

import  HeaderWithColor from '../src/HeaderWithColor';

const headerStories = storiesOf('HeaderWithColor', module);

headerStories.addDecorator(withKnobs);
headerStories.add('Red Header', () => <HeaderWithColor color="red">Red Box</HeaderWithColor>)
headerStories.add('Green Header', () => (
    <HeaderWithColor color="green">
     Green Box
    </HeaderWithColor>
  ));
