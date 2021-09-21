import { Story, Meta} from '@storybook/react'
import { Footer } from './Footer'

const Template : Story = (args) => <Footer{...args} />

export default {
    component: Footer,
    title: 'Molecules/Footer',
}

export const Default= Template.bind({});