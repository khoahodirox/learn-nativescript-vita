import { createApp, registerElement } from 'nativescript-vue'
import { SVGView } from '@nativescript-community/ui-svg';

import Grid from './components/Grid.vue'

registerElement('SVGView', () => SVGView);

createApp(Grid).start()
