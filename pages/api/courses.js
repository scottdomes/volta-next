export const getMyCourses = async () => {
  return [
    {
      title: "Thinking in Code",
      slug: "thinking-in-code",
      progress: 23,
      price: 9.0,
      description:
        "Start your coding journey by mastering universal principles",
    },
  ];
};

export const getAllCourses = async () => {
  return [
    {
      title: "Thinking in Code",
      slug: "thinking-in-code",
      price: 9.0,
      description:
        "Start your coding journey by mastering universal principles",
    },
    {
      title: "Thinking in Code",
      slug: "thinking-in-code",
      price: 9.0,
      description:
        "Start your coding journey by mastering universal principles",
    },
    {
      title: "Thinking in Code",
      slug: "thinking-in-code",
      price: 9.0,
      description:
        "Start your coding journey by mastering universal principles",
    },
    {
      title: "Thinking in Code",
      slug: "thinking-in-code",
      price: 9.0,
      description:
        "Start your coding journey by mastering universal principles",
    },
  ];
};

export const getCourse = async (slug) => {
  return {
    title: "Thinking in Code",
    slug: "thinking-in-code",
    progress: 23,
    price: 9.0,
    description: "Start your coding journey by mastering universal principles",
    lessons: [
      {
        sequence: 1,
        slug: "lesson-1",
        title: "Getting started",
        progress: 100,
      },
      {
        sequence: 2,
        slug: "lesson-2",
        title: "Getting started",
        progress: 100,
      },
      {
        sequence: 3,
        slug: "lesson-3",
        title: "Getting started",
        progress: 100,
      },
      {
        sequence: 4,
        slug: "lesson-4",
        title: "Getting started",
        progress: 25,
      },
      {
        sequence: 5,
        slug: "lesson-5",
        title: "Getting started",
        progress: 50,
      },
      {
        sequence: 6,
        slug: "lesson-6",
        title: "Getting started",
        progress: 75,
      },
      {
        sequence: 7,
        slug: "lesson-7",
        title: "Getting started",
        progress: 0,
      },
      {
        sequence: 8,
        slug: "lesson-8",
        title: "Getting started",
        progress: 0,
      },
    ],
  };
};
