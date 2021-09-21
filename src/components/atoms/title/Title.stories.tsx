import { Meta, Story } from '@storybook/react'
import { Title, TitleProps } from './Title'

const Template : Story<TitleProps> = (args) => <Title{...args} />

export default {
    component: Title,
    title: 'Atoms/Title',
} as Meta;

export const Default = Template.bind({});
Default.args = {
    url: 'https://www.google.com',
    projectName: 'Project Name'
}