export type Item = {
    id: number;
    name: string;
    categories: string[];
    subjects: string[];
    school: string;
    description: string;
    timestamp: string;
    likes: number;
    views: number; // New 'views' attribute
    uploader: {
        username: string;
    };
    comments: {
        username: string;
        text: string;
        likes: number;
    }[];
    filePaths: string[]; // Changed from 'filePath' to 'filePaths' as an array
    resources: string[]; // 'resources' attribute with random links
};

export const items: Item[] = [
    {
        id: 0,
        name: 'Complete Study Guide for Biology 101',
        categories: ['Biology', 'Cheat Sheets', 'Guides'],
        subjects: ['Biology', 'Science'],
        school: 'Greenwood High',
        description: 'This study guide contains everything you need to pass Biology 101, including detailed explanations of key concepts, diagrams, and practice questions.',
        timestamp: '2024-09-15T10:32:00Z',
        likes: 25,
        views: 120,
        uploader: {username: 'studentHelper01'},
        comments: [
            {username: 'user123', text: 'Super helpful! Got an A.', likes: 15},
            {username: 'cheater123', text: 'Could use more diagrams.', likes: 2}
        ],
        filePaths: [
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
        ],
        resources: ['https://www.khanacademy.org', 'https://www.coursera.org']
    },
    {
        id: 1,
        name: 'Chemistry Equations Cheat Sheet',
        categories: ['Chemistry', 'Formulas', 'Cheat Sheets'],
        subjects: ['Chemistry', 'Science'],
        school: 'Springfield Academy',
        description: 'A concise cheat sheet covering all major chemistry equations, perfect for quick reference during exams.',
        timestamp: '2024-09-14T09:45:00Z',
        likes: 32,
        views: 240,
        uploader: {username: 'scienceGuru'},
        comments: [
            {username: 'examCracker', text: 'Saved me so much time!', likes: 20},
        ],
        filePaths: [
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
        ],
        resources: ['https://www.chemguide.co.uk', 'https://www.edx.org']
    },
    {
        id: 2,
        name: 'History Exam Notes',
        categories: ['History', 'Notes', 'Exams'],
        subjects: ['History'],
        school: 'Hilltop School',
        description: 'Detailed notes on key events in world history, perfect for exam prep. Covers ancient civilizations to modern history.',
        timestamp: '2024-09-13T15:22:00Z',
        likes: -5,
        views: 95,
        uploader: {username: 'historyBuff'},
        comments: [
            {username: 'factChecker', text: 'Some dates are wrong.', likes: -10},
        ],
        filePaths: [
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
        ],
        resources: ['https://www.history.com', 'https://www.britannica.com']
    },
    {
        id: 3,
        name: 'Math Formulas Handbook',
        categories: ['Mathematics', 'Formulas', 'Handbook'],
        subjects: ['Mathematics'],
        school: 'Riverside College',
        description: 'Comprehensive handbook of all major math formulas, from algebra to calculus, with examples and applications.',
        timestamp: '2024-09-12T13:00:00Z',
        likes: 50,
        views: 350,
        uploader: {username: 'mathWhiz'},
        comments: [
            {username: 'calcMaster', text: 'Exactly what I needed for the test.', likes: 25},
        ],
        filePaths: [
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
        ],
        resources: ['https://www.wolframalpha.com', 'https://www.khanacademy.org/math']
    },
    {
        id: 4,
        name: 'Essay Template for English 101',
        categories: ['English', 'Essays', 'Templates'],
        subjects: ['English'],
        school: 'Maplewood Academy',
        description: 'A template that outlines the structure of an English 101 essay, complete with tips on introduction, body, and conclusion writing.',
        timestamp: '2024-09-11T08:50:00Z',
        likes: 10,
        views: 78,
        uploader: {username: 'wordSmith'},
        comments: [
            {username: 'essayPro', text: 'Well-organized template.', likes: 8},
        ],
        filePaths: [
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
        ],
        resources: ['https://www.grammarly.com', 'https://www.purdue.edu/owl']
    }
];