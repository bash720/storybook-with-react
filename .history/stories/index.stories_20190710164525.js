import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { HeaderWithColor} from '../src/HeaderWithColor';

storiesOf('Button', module)
  .add('with text', () => <HeaderWithColor onClick={action('clicked')}>Hello Button</HeaderWithColor>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
