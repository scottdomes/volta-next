import Heading from "../../components/Heading";

export default {
  title: "Heading",
  component: Heading,
  argTypes: {
    children: { control: <h1>Hello!</h1> },
  },
};

const Template = (args) => <Heading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "My courses",
};
