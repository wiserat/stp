export type Item = {
    id: number;
    name: string;
    categories: string[];
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
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',],
        resources: ['https://www.khanacademy.org', 'https://www.coursera.org', 'https://www.biologystudyguide.com']
    },
    {
        id: 1,
        name: 'Chemistry Equations Cheat Sheet',
        categories: ['Chemistry', 'Formulas', 'Cheat Sheets'],
        description: 'A concise cheat sheet covering all major chemistry equations, perfect for quick reference during exams.',
        timestamp: '2024-09-14T09:45:00Z',
        likes: 32,
        views: 240,
        uploader: {username: 'scienceGuru'},
        comments: [
            {username: 'examCracker', text: 'Saved me so much time!', likes: 20},
            {username: 'quizMaster', text: 'Missing some key equations.', likes: -3}
        ],
        filePaths: [
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',],
        resources: ['https://www.chemguide.co.uk', 'https://www.edx.org', 'https://www.chemteam.info']
    },
    {
        id: 2,
        name: 'History Exam Notes',
        categories: ['History', 'Notes', 'Exams'],
        description: 'Detailed notes on key events in world history, perfect for exam prep. Covers ancient civilizations to modern history.',
        timestamp: '2024-09-13T15:22:00Z',
        likes: -5,
        views: 95,
        uploader: {username: 'historyBuff'},
        comments: [
            {username: 'factChecker', text: 'Some dates are wrong.', likes: -10},
            {username: 'aceStudent', text: 'Great for last-minute review.', likes: 5}
        ],
        filePaths: [
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',],
        resources: ['https://www.history.com', 'https://www.britannica.com', 'https://www.academic.oup.com']
    },
    {
        id: 3,
        name: 'Math Formulas Handbook',
        categories: ['Mathematics', 'Formulas', 'Handbook'],
        description: 'Comprehensive handbook of all major math formulas, from algebra to calculus, with examples and applications.',
        timestamp: '2024-09-12T13:00:00Z',
        likes: 50,
        views: 350,
        uploader: {username: 'mathWhiz'},
        comments: [
            {username: 'calcMaster', text: 'Exactly what I needed for the test.', likes: 25},
            {username: 'strugglingStudent', text: 'Wish it had more examples.', likes: 3}
        ],
        filePaths: [
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
        ],
        resources: ['https://www.wolframalpha.com', 'https://www.khanacademy.org/math', 'https://www.desmos.com']
    },
    {
        id: 4,
        name: 'Essay Template for English 101',
        categories: ['English', 'Essays', 'Templates'],
        description: 'A template that outlines the structure of an English 101 essay, complete with tips on introduction, body, and conclusion writing.',
        timestamp: '2024-09-11T08:50:00Z',
        likes: 10,
        views: 78,
        uploader: {username: 'wordSmith'},
        comments: [
            {username: 'essayPro', text: 'Well-organized template.', likes: 8},
            {username: 'noviceWriter', text: 'The conclusion section is lacking.', likes: 1}
        ],
        filePaths: [
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',],
        resources: ['https://www.grammarly.com', 'https://www.purdue.edu/owl', 'https://www.prowritingaid.com']
    },
    {
        id: 5,
        name: 'Physics Problem Solving Strategies',
        categories: ['Physics', 'Problem Solving', 'Guides'],
        description: 'This guide provides step-by-step strategies for solving common physics problems, with a focus on mechanics and electromagnetism.',
        timestamp: '2024-09-10T12:10:00Z',
        likes: -12,
        views: 54,
        uploader: {username: 'physicsFanatic'},
        comments: [
            {username: 'solver99', text: 'Didn’t really help me.', likes: -5},
            {username: 'mechanicsMaster', text: 'Good strategies, but hard to follow.', likes: 3}
        ],
        filePaths: [
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
        ],
        resources: ['https://www.phys.org', 'https://www.physicsclassroom.com', 'https://www.howstuffworks.com']
    },
    {
        id: 6,
        name: 'Short Summary of Macbeth',
        categories: ['English', 'Literature', 'Summaries'],
        description: 'A brief but thorough summary of Shakespeare’s Macbeth, covering key plot points, themes, and character analysis.',
        timestamp: '2024-09-09T18:30:00Z',
        likes: 0,
        views: 112,
        uploader: {username: 'litLover'},
        comments: [
            {username: 'theaterFan', text: 'Perfect summary for class discussions.', likes: 10},
            {username: 'sparkNotesFan', text: 'Not as detailed as I hoped.', likes: 2}
        ],
        filePaths: [
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
            'http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0',
        ],
        resources: ['https://www.sparknotes.com', 'https://www.cliffsnotes.com', 'https://www.shakespeare.org.uk']
    }
];