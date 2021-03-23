import Logo from "../components/Logo";

export default {
  title: "Logo",
  component: Logo,
  argTypes: {},
};

const Template = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
