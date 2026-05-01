export const whatIam = [
    // Same substring at the start will only be typed out once, initially
    'Full Stack Developer',
    1000,
    'AI Engineer',
    1000,
    'Software Engineer',
    1000,
    'Backend Specialist',
    1000,
    'Problem Solver',
    1000
]


export const experienceData = [
    {
        title: "Software Engineer",
        company: "Wells Fargo",
        duration: "11/2024 - Present",
        achievements: [
            "Architected an AI-assisted migration strategy leveraging prompt engineering to refactor a legacy Java application (JDK 11 → 17, Spring 5 → 6), compressing delivery time from 6 months to 3 weeks while maintaining code stability.",
            "Architected and developed a Kafka consumer service (1MCS) for real-time mail communication processing, enabling seamless integration with DOCD systems through asynchronous event-driven workflows.",
            "Developed a scalable in-memory caching service for routing logic in the Electronic Document Service (EDC), improving system performance, reducing I/O overhead, and enhancing overall system efficiency.",
        ],
    },
    {
        title: "Associate Software Engineer",
        company: "Securonix",
        duration: "07/2023 - 11/2024",
        achievements: [
            "Implemented a new feature in the company's main product, increasing user engagement by 15% within the first quarter of release.",
            "Developed a microservice using Spring Boot to handle policy deletion, including storing deletion history in MySQL and efficiently removing associated data from Solr and HBase.",
            "Designed optimized Solr delete and cleanup logic to ensure consistent data removal across distributed collections while maintaining index integrity.",
            "Reduced Solr heap utilization during large-scale deletions by tuning commit frequency and leveraging streaming/batch deletes resulting in lower GC pressure and reduced cloud cost.",
            "Optimized SQL queries, reducing database response time by 40% and improving overall application performance.",
        ],
    },
    {
        title: "Freelance Developer",
        company: "College Projects",
        duration: "06/2022 - 05/2023",
        achievements: [
            "Developed a dynamic quiz website using Angular for the frontend and Spring Boot for the backend.",
            "Built a full-stack e-commerce platform using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
            "Designed and delivered personalized portfolio websites for students and graduates, showcasing their skills and achievements.",
            "Created a MERN stack-based mail service application for efficient email management and communication.",
        ],
    }
];

export const educationData = [
    {
        institute: "Institute of Technical Education & Research (ITER)",
        duration: "08/2020 - 07/2024",
        degree: "BTech - Computer Science and Engineering",
        details: "CGPA: 8.29",
    },
    {
        institute: "ODM Public School",
        duration: "06/2018 - 04/2020",
        degree: "Senior Secondary",
        details: "Percentage: 89%",
    },
    {
        institute: "Venkateswar English Medium School",
        duration: "03/2017 - 03/2018",
        degree: "Secondary Education",
        details: "Percentage: 84%",
    },
];

export const skillsData = [
    {
        title: 'Backend & System Design',
        skillSet: [
            {
                skill: "Java",
                level: "Advanced",
                description: "Expert in building scalable backend services and microservices."
            },
            {
                skill: "Spring Boot",
                level: "Advanced",
                description: "Experienced in developing microservices and RESTful APIs."
            },
            {
                skill: "Node.js",
                level: "Advanced",
                description: "A JavaScript runtime for building scalable server-side applications."
            },
            {
                skill: "Python",
                level: "Advanced",
                description: "Proficient in backend development, data processing, and AI integrations."
            },
            {
                skill: "Express",
                level: "Intermediate",
                description: "A lightweight web application framework for Node.js."
            },
            {
                skill: "Flask",
                level: "Intermediate",
                description: "Lightweight Python framework for building web applications."
            },
        ]
    },
    {
        title: 'Frontend Skills',
        skillSet: [
            {
                skill: "React",
                level: "Advanced",
                description: "A JavaScript library for building user interfaces using a component-based approach."
            },
            {
                skill: "JavaScript",
                level: "Advanced",
                description: "A programming language for creating dynamic and interactive web pages."
            },
            {
                skill: "HTML",
                level: "Advanced",
                description: "The standard markup language for creating web page structure."
            },
            {
                skill: "CSS",
                level: "Intermediate",
                description: "Styles web pages with layouts, colors, and responsive designs."
            },
        ]
    },
    {
        title: 'Database & Big Data',
        skillSet: [
            {
                skill: "MySQL",
                level: "Intermediate",
                description: "A relational database management system for structured data storage and retrieval."
            },
            {
                skill: "MongoDB",
                level: "Intermediate",
                description: "A NoSQL database for scalable, flexible document-based data storage."
            },
            {
                skill: "HBase",
                level: "Intermediate",
                description: "Distributed NoSQL database for large-scale data storage and retrieval."
            },
            {
                skill: "Solr",
                level: "Intermediate",
                description: "Enterprise search platform for indexing and searching large datasets."
            },
            {
                skill: "Apache Spark",
                level: "Intermediate",
                description: "A unified analytics engine for large-scale data processing."
            },
        ]
    },
    {
        title: 'Distributed Systems & Tools',
        skillSet: [
            {
                skill: "Apache Kafka",
                level: "Intermediate",
                description: "Event streaming platform for real-time data processing and integration."
            },
            {
                skill: "Docker",
                level: "Intermediate",
                description: "Containerization platform for deploying applications."
            },
        ]
    }

];



