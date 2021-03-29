import CourseHeader from "../../components/CourseHeader";

export default {
  title: "CourseHeader",
  component: CourseHeader,
  argTypes: {},
};

const course = {
  title: "Thinking in Code",
  price: 9.0,
  slug: "thinking-in-code",
  isOwned: true,
  progress: 23,
  description: "Start your coding journey by mastering universal principles",
};

const Template = (args) => <CourseHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = { course };
