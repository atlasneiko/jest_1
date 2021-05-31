import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });
test('renders wihtout error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});
test('renders increment button', () => {});
test('renders counter display', () => {});
test('counter dispaly starts with 0', () => {});
test('clicking button increments counter display', () => {});
