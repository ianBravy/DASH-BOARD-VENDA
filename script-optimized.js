// Dashboard otimizado para performance
const dashboardData = {
    evolutionData: {
        labels: ['2025-07-22', '2025-07-24', '2025-07-26', '2025-07-28', '2025-07-30', '2025-08-01', '2025-08-03', '2025-08-05', '2025-08-07'],
        datasets: [{
            label: 'Leads',
            data: [50, 120, 200, 600, 450, 300, 700, 400, 50],
            borderColor: '#d4af37',
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    },
    
    sourceData: {
        labels: ['Facebook', 'Instagram', 'Meta', 'Google', 'Acesso direto', 'Formulário Patrimonial'],
        datasets: [{
            data: [35, 25, 15, 20, 3, 2],
            backgroundColor: ['#4A90E2', '#E1306C', '#1877F2', '#4285F4', '#06d6a0', '#9b59b6'],
            borderWidth: 0
        }]
    },
    
    leadsDayData: {
        labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        datasets: [{
            label: 'Leads',
            data: [120, 180, 200, 150, 100, 80, 140],
            borderColor: '#d4af37',
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
            borderWidth: 2,
            fill: true
        }]
    },
    
    leadsHourData: {
        labels: ['0h', '3h', '6h', '9h', '12h', '15h', '18h', '21h'],
        datasets: [{
            label: 'Leads',
            data: [380, 420, 320, 200, 120, 520, 300, 400],
            backgroundColor: 'rgba(212, 175, 55, 0.8)',
            borderColor: '#d4af37',
            borderWidth: 1
        }]
    },
    
    comparisonData: {
        labels: ['META', 'Google'],
        datasets: [{
            data: [3200, 4200],
            backgroundColor: ['#1877F2', '#4285F4'],
            borderWidth: 0
        }]
    }
};

const chartConfigs = {
    line: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color: '#ffffff' } } },
        scales: {
            x: { ticks: { color: '#ffffff' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
            y: { ticks: { color: '#ffffff' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } }
        }
    },
    
    doughnut: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom', labels: { color: '#ffffff', padding: 20, usePointStyle: true } } }
    },
    
    radar: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color: '#ffffff' } } },
        scales: {
            r: { ticks: { color: '#ffffff' }, grid: { color: 'rgba(255, 255, 255, 0.1)' }, pointLabels: { color: '#ffffff' } }
        }
    },
    
    bar: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color: '#ffffff' } } },
        scales: {
            x: { ticks: { color: '#ffffff' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } },
            y: { ticks: { color: '#ffffff' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } }
        }
    }
};

// Inicializar quando carregar
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    initializeBasicInteractivity();
    loadMainMetrics();
});

// Carregar métricas principais
function loadMainMetrics() {
    const metrics = [
        { selector: '.metric-value', values: ['8,247', '92.7%', '68.5%'] },
        { selector: '.conversion-value', values: ['1', '1', '0.012%'] }
    ];
    
    metrics.forEach(metric => {
        const elements = document.querySelectorAll(metric.selector);
        elements.forEach((element, index) => {
            if (metric.values[index]) {
                element.textContent = metric.values[index];
            }
        });
    });
}

// Inicializar gráficos
function initializeCharts() {
    // Aguardar um pouco para garantir que o DOM está pronto
    setTimeout(() => {
        const charts = [
            { id: 'evolutionChart', type: 'line', data: dashboardData.evolutionData },
            { id: 'sourceChart', type: 'doughnut', data: dashboardData.sourceData },
            { id: 'leadsDayChart', type: 'radar', data: dashboardData.leadsDayData },
            { id: 'leadsHourChart', type: 'bar', data: dashboardData.leadsHourData },
            { id: 'comparisonChart', type: 'bar', data: dashboardData.comparisonData }
        ];
        
        charts.forEach(chart => {
            const element = document.getElementById(chart.id);
            if (element) {
                const ctx = element.getContext('2d');
                new Chart(ctx, {
                    type: chart.type,
                    data: chart.data,
                    options: chartConfigs[chart.type]
                });
            }
        });
    }, 100);
}

// Interatividade básica
function initializeBasicInteractivity() {
    // Botão limpar
    const clearBtn = document.querySelector('.clear-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            document.querySelector('.search-input').value = '';
            document.querySelectorAll('.search-select').forEach(select => select.selectedIndex = 0);
            showNotification('Filtros limpos!');
        });
    }
    
    // Busca simples
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const leadItems = document.querySelectorAll('.lead-item');
            
            leadItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(searchTerm) ? 'flex' : 'none';
            });
        });
    }
}

// Notificação simples
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed; top: 20px; right: 20px; z-index: 1000;
        background: #d4af37; color: #1a1a2e; padding: 10px 15px;
        border-radius: 5px; font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
}
