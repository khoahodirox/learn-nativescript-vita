import { createApp, registerElement } from 'nativescript-vue'
import { SVGView } from '@nativescript-community/ui-svg';

import Home from './components/Home.vue'

registerElement('SVGView', () => SVGView);

createApp(Home).start()
