import CourseCard from "../../../components/course/CourseCard";

export default {
  title: "CourseCard",
  component: CourseCard,
  argTypes: {},
};

const Template = (args) => <CourseCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  logo: <img src="/tic_logo.svg" alt="Thinking in Code course logo" />,
  title: "Thinking in Code",
  price: 9.0,
  description: "Start your coding journey by mastering universal principles",
};
