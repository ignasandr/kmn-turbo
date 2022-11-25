import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logo from './Logo';

export default {
    title: 'Logo',
    component: Logo,
    argTypes: {
        width: { control: 'number' },
        height: { control: 'number' },
     },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Small = Template.bind({});

Small.args = {
    width: 109,
    height: 40,
};

export const Large = Template.bind({});

Large.args = {
    width: 218,
    height: 80,
};
