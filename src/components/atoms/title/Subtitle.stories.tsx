import { Story, Meta } from '@storybook/react'
import { Subtitle, SubtitleProps } from './Subtitle'

const Template : Story<SubtitleProps> = (args) => <Subtitle{...args} />

export default {
    component: Subtitle,
    title: 'Atoms/Subtitle',
} as Meta;

export const Default = Template.bind({})
Default.args = {
    codedText: 'this is a text inside <code>'
}