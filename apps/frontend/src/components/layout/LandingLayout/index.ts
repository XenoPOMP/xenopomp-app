import { jsxDotNotation } from 'xenopomp-essentials';

import {
  Internal_LandingBody,
  Internal_LandingHeader,
  Internal_LandingLayout,
} from './components';

const LandingLayout = jsxDotNotation(Internal_LandingLayout, {
  Body: Internal_LandingBody,
  Header: Internal_LandingHeader,
});
