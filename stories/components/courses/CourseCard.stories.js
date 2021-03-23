import CourseCard from "../../../components/course/CourseCard";

export default {
  title: "CourseCard",
  component: CourseCard,
  argTypes: {},
};

const Template = (args) => <CourseCard {...args} />;

export const Unowned = Template.bind({});
Unowned.args = {
  logo: <img src="/tic_logo.svg" alt="Thinking in Code course logo" />,
  title: "Thinking in Code",
  price: 9.0,
  link: "thinking-in-code",
  description: "Start your coding journey by mastering universal principles",
};

export const Owned = Template.bind({});
Owned.args = {
  logo: <img src="/tic_logo.svg" alt="Thinking in Code course logo" />,
  title: "Thinking in Code",
  price: 9.0,
  link: "thinking-in-code",
  isOwned: true,
  progress: 0,
  description: "Start your coding journey by mastering universal principles",
};