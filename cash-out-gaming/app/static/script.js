// Get the elements
const cybersecurityContainer = document.getElementById('cybersecurity-container');
const dataScienceContainer = document.getElementById('data-science-container');
const artificialIntelligenceContainer = document.getElementById('artificial-intelligence-container');
const cloudComputingContainer = document.getElementById('cloud-computing-container');
const devOpsContainer = document.getElementById('devops-container');
const testingContainer = document.getElementById('testing-container');
const deploymentContainer = document.getElementById('deployment-container');
const monitoringContainer = document.getElementById('monitoring-container');

// Add event listeners
cybersecurityContainer.addEventListener('click', () => {
  console.log('Cybersecurity container clicked!');
});

dataScienceContainer.addEventListener('click', () => {
  console.log('Data Science container clicked!');
});

artificialIntelligenceContainer.addEventListener('click', () => {
  console.log('Artificial Intelligence container clicked!');
});

cloudComputingContainer.addEventListener('click', () => {
  console.log('Cloud Computing container clicked!');
});

devOpsContainer.addEventListener('click', () => {
  console.log('DevOps container clicked!');
});

testingContainer.addEventListener('click', () => {
  console.log('Testing container clicked!');
});

deploymentContainer.addEventListener('click', () => {
  console.log('Deployment container clicked!');
});

monitoringContainer.addEventListener('click', () => {
  console.log('Monitoring container clicked!');
});

// Function to toggle the display of the containers
function toggleDisplay(container) {
  if (container.style.display === 'block') {
    container.style.display = 'none';
  } else {
    container.style.display = 'block';
  }
}

// Add event listeners for the toggle buttons
document.getElementById('cybersecurity-toggle').addEventListener('click', () => {
  toggleDisplay(cybersecurityContainer);
});

document.getElementById('data-science-toggle').addEventListener('click', () => {
  toggleDisplay(dataScienceContainer);
});

document.getElementById('artificial-intelligence-toggle').addEventListener('click', () => {
  toggleDisplay(artificialIntelligenceContainer);
});

document.getElementById('cloud-computing-toggle').addEventListener('click', () => {
  toggleDisplay(cloudComputingContainer);
});

document.getElementById('devops-toggle').addEventListener('click', () => {
  toggleDisplay(devOpsContainer);
});

document.getElementById('testing-toggle').addEventListener('click', () => {
  toggleDisplay(testingContainer);
});

document.getElementById('deployment-toggle').addEventListener('click', () => {
  toggleDisplay(deploymentContainer);
});

document.getElementById('monitoring-toggle').addEventListener('click', () => {
  toggleDisplay(monitoringContainer);
});