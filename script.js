// Dados falsos para o dashboard
const dashboardData = {
    // Dados para evolução por data
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
    
    // Dados para distribuição por fonte
    sourceData: {
        labels: ['Facebook', 'Instagram', 'Meta', 'Google', 'Acesso direto', 'Formulário Patrimonial'],
        datasets: [{
            data: [35, 25, 15, 20, 3, 2],
            backgroundColor: [
                '#4A90E2',
                '#E1306C',
                '#1877F2',
                '#4285F4',
                '#06d6a0',
                '#9b59b6'
            ],
            borderWidth: 0
        }]
    },
    
    // Dados para leads por dia da semana
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
    
    // Dados para leads por hora
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
    
    // Dados para comparação Meta vs Google
    comparisonData: {
        labels: ['META', 'Google'],
        datasets: [{
            data: [3200, 4200],
            backgroundColor: ['#1877F2', '#4285F4'],
            borderWidth: 0
        }]
    }
};

// Configurações dos gráficos
const chartConfigs = {
    line: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#ffffff'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            y: {
                ticks: {
                    color: '#ffffff'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        }
    },
    
    doughnut: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#ffffff',
                    padding: 20,
                    usePointStyle: true
                }
            }
        }
    },
    
    radar: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff'
                }
            }
        },
        scales: {
            r: {
                ticks: {
                    color: '#ffffff'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                pointLabels: {
                    color: '#ffffff'
                }
            }
        }
    },
    
    bar: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#ffffff'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            },
            y: {
                ticks: {
                    color: '#ffffff'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        }
    }
};

// Inicializar gráficos quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    initializeInteractivity();
    startAutoRefresh();
});

// Função para inicializar todos os gráficos
function initializeCharts() {
    // Gráfico de evolução por data
    const evolutionCtx = document.getElementById('evolutionChart').getContext('2d');
    new Chart(evolutionCtx, {
        type: 'line',
        data: dashboardData.evolutionData,
        options: chartConfigs.line
    });
    
    // Gráfico de distribuição por fonte
    const sourceCtx = document.getElementById('sourceChart').getContext('2d');
    new Chart(sourceCtx, {
        type: 'doughnut',
        data: dashboardData.sourceData,
        options: chartConfigs.doughnut
    });
    
    // Gráfico de leads por dia da semana (radar)
    const leadsDayCtx = document.getElementById('leadsDayChart').getContext('2d');
    new Chart(leadsDayCtx, {
        type: 'radar',
        data: dashboardData.leadsDayData,
        options: chartConfigs.radar
    });
    
    // Gráfico de leads por hora
    const leadsHourCtx = document.getElementById('leadsHourChart').getContext('2d');
    new Chart(leadsHourCtx, {
        type: 'bar',
        data: dashboardData.leadsHourData,
        options: chartConfigs.bar
    });
    
    // Gráfico de comparação Meta vs Google
    const comparisonCtx = document.getElementById('comparisonChart').getContext('2d');
    new Chart(comparisonCtx, {
        type: 'bar',
        data: dashboardData.comparisonData,
        options: chartConfigs.bar
    });
}

// Função para inicializar interatividade
function initializeInteractivity() {
    // Animações nos cards ao hover
    const cards = document.querySelectorAll('.metric-card, .conversion-card, .patrimonial-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efeito de clique nos botões
    const buttons = document.querySelectorAll('.clear-btn, .search-input, .search-select');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Efeito de hover nas listas
    const listItems = document.querySelectorAll('.source-item, .ad-item, .lead-item, .group-item, .feature-item');
    listItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.background = 'rgba(255, 255, 255, 0.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.background = 'rgba(255, 255, 255, 0.05)';
        });
    });
    
    // Funcionalidade do botão limpar
    const clearBtn = document.querySelector('.clear-btn');
    clearBtn.addEventListener('click', function() {
        // Limpar campos de busca
        document.querySelector('.search-input').value = '';
        document.querySelectorAll('.search-select').forEach(select => {
            select.selectedIndex = 0;
        });
        
        // Efeito visual
        this.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)';
        setTimeout(() => {
            this.style.background = 'linear-gradient(135deg, #d4af37 0%, #b8860b 100%)';
        }, 300);
        
        // Mostrar notificação
        showNotification('Filtros limpos com sucesso!');
    });
    
    // Funcionalidade de busca
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const leadItems = document.querySelectorAll('.lead-item');
        
        leadItems.forEach(item => {
            const leadName = item.querySelector('.lead-name').textContent.toLowerCase();
            const leadUsername = item.querySelector('.lead-username').textContent.toLowerCase();
            const leadPhone = item.querySelector('.lead-phone').textContent.toLowerCase();
            
            if (leadName.includes(searchTerm) || leadUsername.includes(searchTerm) || leadPhone.includes(searchTerm)) {
                item.style.display = 'flex';
                item.style.animation = 'fadeInUp 0.3s ease-out';
            } else {
                item.style.display = 'none';
            }
        });
    });
    
    // Filtros por período
    const periodSelect = document.querySelectorAll('.search-select')[0];
    periodSelect.addEventListener('change', function() {
        const period = this.value;
        updateChartsByPeriod(period);
        showNotification(`Dados filtrados por: ${period}`);
    });
    
    // Filtros por fonte
    const sourceSelect = document.querySelectorAll('.search-select')[1];
    sourceSelect.addEventListener('change', function() {
        const source = this.value;
        updateChartsBySource(source);
        showNotification(`Dados filtrados por fonte: ${source}`);
    });
}

// Função para atualizar gráficos por período
function updateChartsByPeriod(period) {
    // Simular atualização de dados baseada no período
    const multipliers = {
        'Todo período': 1,
        'Últimos 7 dias': 0.3,
        'Últimos 30 dias': 0.7,
        'Últimos 90 dias': 0.9
    };
    
    const multiplier = multipliers[period] || 1;
    
    // Atualizar métricas principais
    const metricValues = document.querySelectorAll('.metric-value');
    const baseValues = [7825, 92.7, 68.5];
    
    metricValues.forEach((element, index) => {
        if (index < 3) {
            const newValue = Math.round(baseValues[index] * multiplier);
            animateValue(element, parseInt(element.textContent.replace(/,/g, '')), newValue, 1000);
        }
    });
}

// Função para atualizar gráficos por fonte
function updateChartsBySource(source) {
    // Simular atualização de dados baseada na fonte
    const sourceMultipliers = {
        'Todas as fontes': 1,
        'Google': 0.4,
        'Facebook': 0.3,
        'Instagram': 0.2,
        'Meta': 0.05,
        'Formulário': 0.05
    };
    
    const multiplier = sourceMultipliers[source] || 1;
    
    // Atualizar métricas principais
    const metricValues = document.querySelectorAll('.metric-value');
    const baseValues = [7825, 92.7, 68.5];
    
    metricValues.forEach((element, index) => {
        if (index < 3) {
            const newValue = Math.round(baseValues[index] * multiplier);
            animateValue(element, parseInt(element.textContent.replace(/,/g, '')), newValue, 1000);
        }
    });
}

// Função para animar valores
function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    const isPercentage = element.textContent.includes('%');
    
    function updateValue(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.round(start + (end - start) * progress);
        
        if (isPercentage) {
            element.textContent = current + '%';
        } else {
            element.textContent = current.toLocaleString();
        }
        
        if (progress < 1) {
            requestAnimationFrame(updateValue);
        }
    }
    
    requestAnimationFrame(updateValue);
}

// Função para mostrar notificações
function showNotification(message) {
    // Remover notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Criar nova notificação
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #d4af37 0%, #b8860b 100%);
        color: #1a1a2e;
        padding: 15px 20px;
        border-radius: 8px;
        font-weight: 600;
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Função para auto-refresh (simular atualização automática)
function startAutoRefresh() {
    setInterval(() => {
        // Simular atualização de dados
        updateRandomMetrics();
    }, 60000); // Atualizar a cada 60 segundos (reduzido)
}

// Função para atualizar métricas aleatoriamente
function updateRandomMetrics() {
    const metricValues = document.querySelectorAll('.metric-value');
    
    metricValues.forEach((element, index) => {
        const currentValue = parseInt(element.textContent.replace(/,/g, ''));
        const variation = Math.floor(Math.random() * 20) - 10; // Variação de -10 a +10
        const newValue = Math.max(0, currentValue + variation);
        
        if (element.textContent.includes('%')) {
            element.textContent = newValue + '%';
        } else {
            element.textContent = newValue.toLocaleString();
        }
    });
    
    // Atualizar timestamp
    const updateInfo = document.querySelector('.update-info span');
    if (updateInfo) {
        const now = new Date();
        const timestamp = now.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        updateInfo.textContent = `Última atualização: ${timestamp} | Dashboard Ultimate V5.8 para XRM`;
    }
}

// Adicionar estilos CSS para animações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`;
document.head.appendChild(style);

// Função para simular carregamento de dados - SIMPLIFICADO
function simulateDataLoading() {
    const cards = document.querySelectorAll('.metric-card, .conversion-card, .patrimonial-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease-out';
            card.style.opacity = '1';
        }, index * 50); // Reduzido de 100ms para 50ms
    });
}

// Inicializar animação de carregamento
setTimeout(simulateDataLoading, 500);

// Função para adicionar efeito de partículas nos cards - DESABILITADO PARA PERFORMANCE
function addParticleEffect() {
    // Desabilitado para melhorar performance
    return;
}

// Função para criar partículas
function createParticle(element) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: #d4af37;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
    `;
    
    const rect = element.getBoundingClientRect();
    particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
    particle.style.top = (rect.top + Math.random() * rect.height) + 'px';
    
    document.body.appendChild(particle);
    
    // Animar partícula
    particle.animate([
        { transform: 'translateY(0) scale(1)', opacity: 1 },
        { transform: 'translateY(-50px) scale(0)', opacity: 0 }
    ], {
        duration: 1000,
        easing: 'ease-out'
    }).onfinish = () => {
        particle.remove();
    };
}

// Inicializar efeito de partículas
addParticleEffect();

// Função para adicionar efeito de digitação nos números
function typewriterEffect(element, finalValue, duration = 2000) {
    const startValue = 0;
    const increment = finalValue / (duration / 16);
    let currentValue = startValue;
    
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
            currentValue = finalValue;
            clearInterval(timer);
        }
        
        if (element.textContent.includes('%')) {
            element.textContent = Math.round(currentValue) + '%';
        } else {
            element.textContent = Math.round(currentValue).toLocaleString();
        }
    }, 16);
}

// Aplicar efeito de digitação nos valores principais - DESABILITADO PARA PERFORMANCE
// setTimeout(() => {
//     const mainValues = document.querySelectorAll('.metric-value');
//     const values = [7825, 92.7, 68.5];
//     
//     mainValues.forEach((element, index) => {
//         if (index < 3) {
//             typewriterEffect(element, values[index], 2000);
//         }
//     });
// }, 1000);
