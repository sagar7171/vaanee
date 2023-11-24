import { extendTheme } from '@chakra-ui/react';
import styles from './styles';
import Button from './components/button';
import Input from './components/input';
import Textarea from './components/textarea';
import FormLabel from './components/form-label';
import colors from './foundations/colors';
import typography from './foundations/typography';
import Select from './components/select';
import FormErrorMessage from './components/form-error-message';
import Form from './components/form';

const customTheme = {
  styles,
  colors,
  ...typography,
  components: {
    Button,
    Input,
    FormLabel,
    Textarea,
    Select,
    FormErrorMessage,
    Form
  },
};
export default extendTheme(customTheme);
