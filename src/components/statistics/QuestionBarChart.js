import React from 'react';
import {Bar} from 'react-chartjs-2';

const QuestionBarChart = (props) => {
    const data = {
        labels: props.labels,
        datasets: [
            {
                label: '# of Votes',
                data: props.data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <Bar data={data} options={options}/>
    );
}

export default QuestionBarChart;
