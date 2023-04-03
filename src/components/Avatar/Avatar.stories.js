import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Avatar from './Avatar'

storiesOf('Avatar', module).add('example', () => <Avatar size={500} name="Test" />)
