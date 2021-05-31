import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

//* Factory function to create a shallowWrapper for the App component.

const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

Enzyme.configure({ adapter: new EnzymeAdapter() });
test('renders wihtout error', () => {
  const wrapper = setup();
  // console.log(wrapper.find('[data-test="component-app"]').debug());
  const appComponent = findByTestAttr(wrapper, 'component-app');
  // expect(appComponent.length).toBe(1);
});
test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'component-increment_btn');
  expect(button.length).toBe(1);
});
test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'component-counter_display');
  expect(counterDisplay.length).toBe(1);
});
test('counter dispaly starts with 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('0');
});
test('clicking increnment button increments counter display', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'component-increment_btn');
  button.simulate('click');
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('1');
});

test('renders decrement button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'component-decrement_btn');
  expect(button.length).toBe(1);
});

test('clicking decrement button decrease count by one', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'component-decrement_btn');
  button.simulate('click');
  const count = findByTestAttr(wrapper, 'count').text('');
  expect(count).toBe('-1');
});
