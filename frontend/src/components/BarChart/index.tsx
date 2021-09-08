import Chart from 'react-apexcharts';

const BarChart = () => {
    
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Alexandra Ortiz', 'Nícolas Ramos', 'Paola da Silva', 'Manoel Alcantara', 'Petrusca Nonnia', 'Oscar Monteiro', 'Cristiano Müller', 'Baxter Zulão']
        },
        series: [
            {
                name: "% Sucesso",
                data: [54.54, 73.52, 27.58, 58.33, 80.00, 45.45, 66.12, 87.50]                   
            }
        ]
    };
    
    
    
    return (
        <Chart 
            options={{ ...options, xaxis: mockData.labels}}
            series={mockData.series}
            type="bar"
            height="240"
        />
    );
}

export default BarChart;
