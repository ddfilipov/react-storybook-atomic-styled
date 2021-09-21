import { Story, Meta} from '@storybook/react'
import { Grid } from './Grid'

const Template : Story = (args) => <Grid{...args}/>

export default{
    component: Grid,
    title: 'Organisms/Grid',
} as Meta;


export const Default = Template.bind({});