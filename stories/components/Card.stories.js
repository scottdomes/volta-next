import Card from "../../components/Card";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    children: { control: <h1>Hello!</h1> },
  },
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <h1>Hello!</h1>,
};
