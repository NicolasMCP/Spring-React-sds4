import Chart from 'react-apexcharts';

const DonutChart = () => {
    
    const mockData = {
        series: [5017, 45961, 55421, 60000, 17017],
        labels: ['Alexandra Ortiz', 'Nícolas Ramos', 'Paola da Silva', 'Manoel Alcantara', 'Petrusca Nonnia']
    }
    
    const options = {
        legend: {
            show: true
        }
    }
    
    return (
        <Chart 
            options={{ ...options, labels: mockData.labels}}
            series={mockData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;
