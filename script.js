const ctx = document.getElementById('roiChart').getContext('2d');

const chartData = {
  labels: ['Year 1', 'Year 2', 'Year 3'],
  datasets: []
};

const roiChart = new Chart(ctx, {
  type: 'line',
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'ROI over 3 Years by Cohort and University'
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'ROI (%)'
        }
      }
    }
  }
});

document.getElementById('roiForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const university = document.getElementById('university').value;
  const cohort = document.getElementById('cohort').value;
  const year1 = parseFloat(document.getElementById('year1').value);
  const year2 = parseFloat(document.getElementById('year2').value);
  const year3 = parseFloat(document.getElementById('year3').value);

  const label = `${university} - ${cohort}`;
  const newDataset = {
    label: label,
    data: [year1, year2, year3],
    borderWidth: 2,
    fill: false,
    tension: 0.2
  };

  chartData.datasets.push(newDataset);
  roiChart.update();

  this.reset();
});
