// good cheatsheet for vue unit testing
// https://github.com/dekadentno/vue-unit-testing-cheat-sheet

import { mount, shallowMount } from '@vue/test-utils'
import Person from '@/components/Person.vue';

describe('Person.vue', () => {
  
  const createCmp = propsData => mount(Person, { propsData });
  
  it('renders props when passed', () => {
    const cmp = createCmp({ firstName: 'fred'})
    expect(cmp.props('firstName')).toBe('fred')
  });
  
  it('reverses the name with a computed property', () => {
    const cmp = createCmp({ firstName: 'fred'})
    const reversed = cmp.vm.reversedName
    expect(reversed).toBe('derf')
  });
  
})