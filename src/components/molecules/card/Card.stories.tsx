import { Meta, Story } from '@storybook/react'
import { Card, CardProps } from './Card'

const Template: Story<CardProps>= (args) => <Card{...args} />

export default {
    component: Card,
    title: 'Molecules/Card',
  } as Meta;

export const Default = Template.bind({});
Default.args = {
    text: 'Text Test Text Test Text Test',
    title: 'Title test',
    href: 'https://www.google.com',
}