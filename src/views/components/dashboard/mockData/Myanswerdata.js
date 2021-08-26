import myexamans1 from '../../../../assets/images/myexamans1.png';
import myexamans2 from '../../../../assets/images/myexamans2.png';
import myexamans3 from '../../../../assets/images/myexamans3.png';
import myexamans4 from '../../../../assets/images/myexamans4.png';
import myexamans5 from '../../../../assets/images/myexamans5.png';
import myexamans6 from '../../../../assets/images/myexamans6.png';
import plane from '../../../../assets/images/travelling.png';
import dog from '../../../../assets/images/dog.png';

export const leftpart = [
    {
        image: myexamans1,
        title: 'Olympiad test on',
        desc: 'Grade 2 - Mathematics',
    },
    {
        image: myexamans2,
        title: 'Total score',
        desc: '270 poits',
    },
    {
        image: myexamans3,
        title: 'Date & time',
        desc: '04 Jul 2021 — 10 : 54 PM',
    },
    {
        image: myexamans4,
        title: 'Time taken',
        desc: '10 : 00 (Minutes)',
    },
    {
        image: myexamans5,
        title: 'Accuracy',
        desc: '90 %',
    },
    {
        image: myexamans6,
        title: 'Right answers',
        desc: '27 out of 30',
    },
];

export const rightpart = [
    {
        title: 'Check your answers and evaluate yourself',
        data: [
            {
                que: 'How many planes can you spot flying here?',
                anstext: [
                    1,
                    2,
                    3,
                    4,
                ],
                ansimg: [
                    plane,
                    plane,
                    plane,
                    plane,
                ],
            },
            {
                que: 'Select the days of the week (select more than 1 option)',
                anstext: [
                    'Sunday & Friday',
                    'Monday & Tuesday',
                    'Wednesday & Thursday',
                    'Friday & Saturday',
                ],
            },
            {
                que: 'Count the number of elephants and fill in the blanks',
                anstext: [
                    6,
                    9,
                    4,
                    7,
                ],
            },
            {
                que: 'Which two are exactly the same animals?',
                anstext: [
                    6,
                    9,
                    4,
                    7,
                ],
                ansimg: [
                    dog,
                    dog,
                    dog,
                    dog,
                ],
            },
        ],
    },
];
