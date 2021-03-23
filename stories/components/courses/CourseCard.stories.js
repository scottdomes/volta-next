import CourseCard from "../../../components/course/CourseCard";

export default {
  title: "CourseCard",
  component: CourseCard,
  argTypes: {},
};

const Template = (args) => <CourseCard {...args} />;

export const Unowned = Template.bind({});
Unowned.args = {
  title: "Thinking in Code",
  price: 9.0,
  slug: "thinking-in-code",
  description: "Start your coding journey by mastering universal principles",
};

export const Owned = Template.bind({});
Owned.args = {
  title: "Thinking in Code",
  price: 9.0,
  slug: "thinking-in-code",
  isOwned: true,
  progress: 23,
  description: "Start your coding journey by mastering universal principles",
};