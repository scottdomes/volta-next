import Header from "../../components/Header";

export default {
  title: "Header",
  component: Header,
  argTypes: {},
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
