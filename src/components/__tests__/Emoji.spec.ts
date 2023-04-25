import { mount } from '@vue/test-utils'
import Emoji from '../Emoji.vue'

describe('Emoji Component', () => {
	test('should show when enabled 5 emojis', async () => {
		const count = 5
		const wrapper = mount(Emoji, {
			propsData: {
				count
			}
		})
		const button = wrapper.find('button')
		await button.trigger('click')
		const list = wrapper.findAll('span')
		expect(list.length).toBe(count)
	})
})
