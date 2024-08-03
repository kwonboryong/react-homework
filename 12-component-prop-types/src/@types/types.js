import { string, isRequired } from 'prop-types';
import exact from 'prop-types-exact';

export const ProfileType = exact({
  name: string.isRequired,
  description: string.isRequired,
  img: string.isRequired
});

