// Dados falsos para o dashboard
const dashboardData = {
    // Dados das métricas de marketing
    marketingData: {
        cpc: {
            value: 8.35,
            currency: 'BRL',
            trend: '+12.5%',
            description: 'Custo por clique nos anúncios pagos',
            benchmark: 'Meta do setor: R$ 6,50 - R$ 12,00',
            performance: 'Dentro da meta'
        },
        cpm: {
            value: 45.20,
            currency: 'BRL',
            trend: '-8.3%',
            description: 'Custo por mil impressões',
            benchmark: 'Meta do setor: R$ 35,00 - R$ 55,00',
            performance: 'Dentro da meta'
        },
        ctr: {
            value: 3.28,
            unit: '%',
            trend: '+15.2%',
            description: 'Taxa de cliques nos anúncios',
            benchmark: 'Meta do setor: 2,5% - 4,0%',
            performance: 'Acima da média'
        },
        connectRate: {
            value: 84.7,
            unit: '%',
            trend: '+5.1%',
            description: 'Taxa de conexão bem-sucedida',
            benchmark: 'Meta interna: 80%+',
            performance: 'Excelente'
        }
    },
    
    // Dados do funil de conversão expandido
    funnelData: {
        leads: 8247,
        preCheckout: 247,
        vendasSV: 18,
        vendasCroqui: 12,
        vendasHolding: 8,
        vendasMembership: 5,
        totalVendas: 43,
        receitaTotal: 2847500,
        conversaoTotal: 0.52,
        conversaoPreCheckout: 3.0,
        conversaoFinal: 0.52
    },
    
    // Dados do funil de engajamento
    engagementFunnelData: {
        cliques: 124580,
        leads: 8247,
        entradaGrupo: 5649,
        respostaPesquisa: 6292,
        cpcMedio: 8.35,
        taxaLeadClique: 6.6,
        taxaEntradaGrupo: 68.5,
        taxaResposta: 76.3
    },
    
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
    console.log('DOM carregado, iniciando funcionalidades...');
    initializeCharts();
    initializeInteractivity();
    startAutoRefresh();
    
    // Debug: Verificar se todos os elementos existem
    setTimeout(() => {
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modal-body');
        const clickableCards = document.querySelectorAll('.clickable-card[data-metric]');
        
        console.log('Modal encontrado:', !!modal);
        console.log('Modal body encontrado:', !!modalBody);
        console.log('Cards clicáveis encontrados:', clickableCards.length);
        
        clickableCards.forEach((card, index) => {
            console.log(`Card ${index + 1}:`, card.getAttribute('data-metric'), card.className);
        });
        
        // Se poucos cards foram encontrados, tentar método alternativo
        if (clickableCards.length < 15) {
            console.log('Poucos cards encontrados, tentando método alternativo...');
            addModalListeners();
        }
    }, 1000);
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
    
    // Inicializar gráficos UTM
    initializeUTMCharts();
}

// Função para inicializar gráficos UTM
function initializeUTMCharts() {
    const utmSources = [
        { id: 'utmFacebookChart', leads: 2886, color: '#4A90E2' },
        { id: 'utmInstagramChart', leads: 2062, color: '#E1306C' },
        { id: 'utmGoogleChart', leads: 1649, color: '#4285F4' },
        { id: 'utmMetaChart', leads: 1237, color: '#1877F2' },
        { id: 'utmDirectChart', leads: 247, color: '#06d6a0' },
        { id: 'utmFormularioChart', leads: 166, color: '#9b59b6' }
    ];
    
    utmSources.forEach(source => {
        const canvas = document.getElementById(source.id);
        if (canvas) {
            const ctx = canvas.getContext('2d');
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [source.leads, 8247 - source.leads],
                        backgroundColor: [source.color, 'rgba(255,255,255,0.1)'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    cutout: '70%'
                }
            });
        }
    });
}

// Função para inicializar interatividade
function initializeInteractivity() {
    // Animações nos cards ao hover (incluindo marketing cards)
    const cards = document.querySelectorAll('.metric-card, .conversion-card, .patrimonial-card, .marketing-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Adicionar cliques para TODOS os cards clicáveis
    const clickableCards = document.querySelectorAll('.clickable-card[data-metric]');
    console.log('Cards encontrados:', clickableCards.length); // Debug
    
    clickableCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const metric = this.getAttribute('data-metric');
            console.log('Card clicado:', metric); // Debug
            
            if (this.classList.contains('marketing-card')) {
                console.log('Abrindo modal de marketing para:', metric); // Debug
                showMarketingModal(metric);
            } else {
                console.log('Abrindo modal geral para:', metric); // Debug
                showGeneralModal(metric);
            }
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
        updateInfo.textContent = `Última atualização: ${timestamp} | Dashboard Ultimate V5.8 para BRVY®`;
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

// Função para mostrar modal das métricas gerais
function showGeneralModal(metric) {
    console.log('showGeneralModal chamada para:', metric); // Debug
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) {
        console.error('Modal ou modalBody não encontrado!');
        return;
    }
    
    let modalContent = '';
    
    switch(metric) {
        case 'total-leads':
            modalContent = `
                <h2>👥 Total de Leads</h2>
                <div class="metric-detail">
                    <h4>Valor Atual</h4>
                    <div class="value">8,247</div>
                    <div class="label">Leads Captados</div>
                </div>
                <h3>📊 Análise Detalhada</h3>
                <p><strong>Período:</strong> Setembro 2025</p>
                <p><strong>Crescimento:</strong> +15.3% vs mês anterior</p>
                <p><strong>Meta:</strong> 8.000 leads (Meta superada!)</p>
                <h3>📈 Distribuição por Fonte</h3>
                <p>• Facebook: 2.886 leads (35.0%)</p>
                <p>• Instagram: 2.062 leads (25.0%)</p>
                <p>• Google: 1.649 leads (20.0%)</p>
                <p>• Meta: 1.237 leads (15.0%)</p>
                <p>• Outros: 413 leads (5.0%)</p>
            `;
            break;
        case 'whatsapp-validos':
            modalContent = `
                <h2>📱 WhatsApp Válidos</h2>
                <div class="metric-detail">
                    <h4>Taxa Atual</h4>
                    <div class="value">92.7%</div>
                    <div class="label">Números Válidos</div>
                </div>
                <h3>📊 Análise Detalhada</h3>
                <p><strong>Total Válidos:</strong> 7.645 números</p>
                <p><strong>Total Inválidos:</strong> 602 números</p>
                <p><strong>Benchmark:</strong> Meta interna 90%+</p>
                <h3>💡 Insights</h3>
                <p>• Taxa excelente de números válidos</p>
                <p>• Qualidade alta na captura de leads</p>
                <p>• Processo de validação eficiente</p>
            `;
            break;
        case 'funil-conversao':
            modalContent = `
                <h2>📈 Funil de Conversão</h2>
                <div class="metric-detail">
                    <h4>Taxa de Conversão Total</h4>
                    <div class="value">0.52%</div>
                    <div class="label">43 vendas de 8.247 leads</div>
                </div>
                <h3>📊 Detalhamento do Funil</h3>
                <p><strong>Leads:</strong> 8.247 (100%)</p>
                <p><strong>Pré-checkout:</strong> 247 (3.0%)</p>
                <p><strong>Vendas SV:</strong> 18 (0.22%)</p>
                <p><strong>Vendas Croqui:</strong> 12 (0.15%)</p>
                <p><strong>Vendas Holding:</strong> 8 (0.10%)</p>
                <p><strong>Vendas Membership:</strong> 5 (0.06%)</p>
                <p><strong>Total Vendas:</strong> 43 (0.52%)</p>
                <h3>💰 Receita Total</h3>
                <p><strong>R$ 2.847.500</strong> (+15.8%)</p>
                <h3>📈 Performance</h3>
                <p>• Taxa de pré-checkout: 3.0% (247 de 8.247)</p>
                <p>• Taxa de conversão final: 0.52% (43 de 8.247)</p>
                <p>• Taxa pré-checkout → venda: 17.4% (43 de 247)</p>
            `;
            break;
        case 'funil-engajamento':
            modalContent = `
                <h2>🎯 Funil de Engajamento</h2>
                <div class="metric-detail">
                    <h4>Performance Geral</h4>
                    <div class="value">6.6%</div>
                    <div class="label">Taxa Clique → Lead</div>
                </div>
                <h3>📊 Detalhamento Completo</h3>
                <p><strong>Cliques:</strong> 124.580 (100%)</p>
                <p><strong>Leads:</strong> 8.247 (6.6%)</p>
                <p><strong>Entraram no Grupo:</strong> 5.649 (68.5%)</p>
                <p><strong>Responderam Pesquisa:</strong> 6.292 (76.3%)</p>
                <h3>💡 Insights</h3>
                <p>• Taxa clique→lead acima da média (2-4%)</p>
                <p>• Alto engajamento no grupo WhatsApp</p>
                <p>• Excelente taxa de resposta às pesquisas</p>
            `;
            break;
        case 'entrou-grupo':
            modalContent = `
                <h2>💬 Entraram no Grupo</h2>
                <div class="metric-detail">
                    <h4>Taxa Atual</h4>
                    <div class="value">68.5%</div>
                    <div class="label">5.649 de 8.247 leads</div>
                </div>
                <h3>📊 Análise Detalhada</h3>
                <p><strong>Total no Grupo:</strong> 5.649 pessoas</p>
                <p><strong>Não Entraram:</strong> 2.598 pessoas (31.5%)</p>
                <p><strong>Meta:</strong> 70%+ (Próximo da meta)</p>
                <h3>💡 Insights</h3>
                <p>• Taxa de adesão muito boa (68.5%)</p>
                <p>• Interesse alto no conteúdo oferecido</p>
                <p>• Qualidade dos leads confirmada</p>
            `;
            break;
        case 'custo-lead':
            modalContent = `
                <h2>💰 Custo Por Lead</h2>
                <div class="metric-detail">
                    <h4>Custo Atual</h4>
                    <div class="value">R$ 12,50</div>
                    <div class="label">Investimento por lead</div>
                </div>
                <h3>📊 Análise Detalhada</h3>
                <p><strong>Investimento Total:</strong> R$ 103.125</p>
                <p><strong>Total de Leads:</strong> 8.247</p>
                <p><strong>Benchmark:</strong> R$ 8,00 - R$ 15,00</p>
                <h3>📈 Por Fonte</h3>
                <p>• Facebook: R$ 11,20 por lead</p>
                <p>• Instagram: R$ 13,80 por lead</p>
                <p>• Google: R$ 14,50 per lead</p>
                <p>• Meta: R$ 10,90 por lead</p>
            `;
            break;
        case 'resposta-pesquisa':
            modalContent = `
                <h2>📋 Responderam Pesquisa</h2>
                <div class="metric-detail">
                    <h4>Taxa Atual</h4>
                    <div class="value">76.3%</div>
                    <div class="label">6.292 de 8.247 leads</div>
                </div>
                <h3>📊 Análise Detalhada</h3>
                <p><strong>Responderam:</strong> 6.292 pessoas</p>
                <p><strong>Não Responderam:</strong> 1.955 pessoas (23.7%)</p>
                <p><strong>Meta:</strong> 70%+ (Meta superada!)</p>
                <h3>💡 Insights</h3>
                <p>• Excelente taxa de engajamento</p>
                <p>• Leads altamente qualificados</p>
                <p>• Interesse genuíno no produto/serviço</p>
            `;
            break;
        case 'leads-dia-semana':
            modalContent = `
                <h2>📅 Leads por Dia da Semana</h2>
                <div class="metric-detail">
                    <h4>Análise Semanal</h4>
                    <div class="value">8,247</div>
                    <div class="label">Total de Leads</div>
                </div>
                <h3>📊 Distribuição Semanal</h3>
                <p><strong>Segunda-feira:</strong> 1.180 leads (14.3%)</p>
                <p><strong>Terça-feira:</strong> 1.200 leads (14.5%)</p>
                <p><strong>Quarta-feira:</strong> 1.150 leads (13.9%)</p>
                <p><strong>Quinta-feira:</strong> 1.100 leads (13.3%)</p>
                <p><strong>Sexta-feira:</strong> 980 leads (11.9%)</p>
                <p><strong>Sábado:</strong> 1.140 leads (13.8%)</p>
                <p><strong>Domingo:</strong> 1.497 leads (18.2%)</p>
                <h3>💡 Insights</h3>
                <p>• Domingo é o melhor dia (18.2%)</p>
                <p>• Sexta-feira tem menor volume (11.9%)</p>
                <p>• Início da semana tem boa performance</p>
            `;
            break;
        case 'utm-campanhas':
            modalContent = `
                <h2>🎯 Análise por UTM</h2>
                <div class="metric-detail">
                    <h4>Total de Campanhas</h4>
                    <div class="value">6</div>
                    <div class="label">Fontes Ativas</div>
                </div>
                <h3>📊 Performance por Fonte</h3>
                <p><strong>Facebook:</strong> 2.886 leads (35.0%)</p>
                <p><strong>Instagram:</strong> 2.062 leads (25.0%)</p>
                <p><strong>Google:</strong> 1.649 leads (20.0%)</p>
                <p><strong>Meta:</strong> 1.237 leads (15.0%)</p>
                <p><strong>Direct:</strong> 247 leads (3.0%)</p>
                <p><strong>Formulário:</strong> 166 leads (2.0%)</p>
                <h3>💡 Insights</h3>
                <p>• Facebook é a fonte líder (35%)</p>
                <p>• Redes sociais dominam (75% do total)</p>
                <p>• Google tem boa performance orgânica</p>
            `;
            break;
        case 'pre-checkout':
            modalContent = `
                <h2>🛒 Pré-Checkout</h2>
                <div class="metric-detail">
                    <h4>Total Atual</h4>
                    <div class="value">247</div>
                    <div class="label">Pessoas interessadas</div>
                </div>
                <h3>📊 Análise Detalhada</h3>
                <p><strong>Taxa de Conversão:</strong> 3.0% (247 de 8.247 leads)</p>
                <p><strong>Meta:</strong> 2.5%+ (Meta superada!)</p>
                <p><strong>Tendência:</strong> +8.5% vs mês anterior</p>
                <h3>📈 Breakdown por Fonte</h3>
                <p>• Facebook: 87 pré-checkouts (35.2%)</p>
                <p>• Instagram: 62 pré-checkouts (25.1%)</p>
                <p>• Google: 49 pré-checkouts (19.8%)</p>
                <p>• Meta: 37 pré-checkouts (15.0%)</p>
                <p>• Outros: 12 pré-checkouts (4.9%)</p>
                <h3>💡 Insights</h3>
                <p>• Excelente qualificação de leads</p>
                <p>• Alto interesse no produto/serviço</p>
                <p>• Funil funcionando eficientemente</p>
            `;
            break;
        case 'vendas':
            modalContent = `
                <h2>💰 Total de Vendas</h2>
                <div class="metric-detail">
                    <h4>Vendas Realizadas</h4>
                    <div class="value">43</div>
                    <div class="label">Conversões efetivadas</div>
                </div>
                <h3>📊 Breakdown por Categoria</h3>
                <p><strong>Vendas SV:</strong> 18 vendas (41.9%)</p>
                <p><strong>Vendas Croqui:</strong> 12 vendas (27.9%)</p>
                <p><strong>Vendas Holding:</strong> 8 vendas (18.6%)</p>
                <p><strong>Vendas Membership:</strong> 5 vendas (11.6%)</p>
                <h3>💰 Receita por Categoria</h3>
                <p>• SV: R$ 1.260.000 (44.3%)</p>
                <p>• Croqui: R$ 840.000 (29.5%)</p>
                <p>• Holding: R$ 560.000 (19.7%)</p>
                <p>• Membership: R$ 187.500 (6.6%)</p>
                <h3>📈 Performance</h3>
                <p><strong>Receita Total:</strong> R$ 2.847.500</p>
                <p><strong>Ticket Médio:</strong> R$ 66.221</p>
                <p><strong>Taxa Conversão:</strong> 0.52% (43 de 8.247)</p>
            `;
            break;
        case 'conversao-final':
            modalContent = `
                <h2>🎯 Conversão Final</h2>
                <div class="metric-detail">
                    <h4>Taxa Final</h4>
                    <div class="value">0.52%</div>
                    <div class="label">43 vendas de 8.247 leads</div>
                </div>
                <h3>📊 Análise do Funil Completo</h3>
                <p><strong>Leads:</strong> 8.247 (100.0%)</p>
                <p><strong>Pré-checkout:</strong> 247 (3.0%)</p>
                <p><strong>Vendas:</strong> 43 (0.52%)</p>
                <p><strong>Eficiência Pré→Venda:</strong> 17.4%</p>
                <h3>🎯 Benchmarks</h3>
                <p>• Setor Jurídico: 0.3% - 0.8%</p>
                <p>• Nossa Performance: 0.52% ✅</p>
                <p>• Meta Interna: 0.5%+ (Atingida!)</p>
                <h3>💡 Insights</h3>
                <p>• Taxa dentro do esperado para o setor</p>
                <p>• Qualidade alta dos leads gerados</p>
                <p>• Processo de vendas eficiente</p>
            `;
            break;
        case 'evolucao-data':
            modalContent = `
                <h2>📈 Evolução por Data</h2>
                <div class="metric-detail">
                    <h4>Período Analisado</h4>
                    <div class="value">30 dias</div>
                    <div class="label">Setembro 2025</div>
                </div>
                <h3>📊 Tendências Identificadas</h3>
                <p><strong>Crescimento Médio:</strong> +15.3% vs agosto</p>
                <p><strong>Melhor Dia:</strong> 15/09 (420 leads)</p>
                <p><strong>Pior Dia:</strong> 03/09 (180 leads)</p>
                <p><strong>Média Diária:</strong> 275 leads</p>
                <h3>📅 Padrões Identificados</h3>
                <p>• Início do mês: Performance alta</p>
                <p>• Meio do mês: Estabilidade</p>
                <p>• Final do mês: Crescimento acelerado</p>
                <h3>🔮 Projeção</h3>
                <p>• Meta Outubro: 9.500 leads</p>
                <p>• Tendência: Crescimento sustentado</p>
                <p>• Recomendação: Manter estratégia atual</p>
            `;
            break;
        case 'distribuicao-fonte':
            modalContent = `
                <h2>🎯 Distribuição por Fonte</h2>
                <div class="metric-detail">
                    <h4>Total de Fontes</h4>
                    <div class="value">6</div>
                    <div class="label">Canais ativos</div>
                </div>
                <h3>📊 Performance Detalhada</h3>
                <p><strong>Facebook:</strong> 2.886 leads (35.0%)</p>
                <p><strong>Instagram:</strong> 2.062 leads (25.0%)</p>
                <p><strong>Google:</strong> 1.649 leads (20.0%)</p>
                <p><strong>Meta:</strong> 1.237 leads (15.0%)</p>
                <p><strong>Direct:</strong> 247 leads (3.0%)</p>
                <p><strong>Formulário:</strong> 166 leads (2.0%)</p>
                <h3>💰 ROI por Fonte</h3>
                <p>• Facebook: 4.2x ROI</p>
                <p>• Instagram: 3.8x ROI</p>
                <p>• Google: 5.1x ROI</p>
                <p>• Meta: 3.9x ROI</p>
                <h3>🎯 Recomendações</h3>
                <p>• Aumentar investimento no Google (melhor ROI)</p>
                <p>• Otimizar campanhas do Instagram</p>
                <p>• Manter estratégia atual do Facebook</p>
            `;
            break;
        default:
            modalContent = `
                <h2>📊 Métrica Selecionada</h2>
                <p>Informações detalhadas sobre esta métrica estarão disponíveis em breve.</p>
                <p><strong>Métrica:</strong> ${metric}</p>
                <p>Esta métrica será implementada na próxima atualização do dashboard.</p>
            `;
    }
    
    modalBody.innerHTML = modalContent;
    modal.style.display = 'block';
    
    // Fechar modal ao clicar no X
    const closeBtn = modal.querySelector('.close');
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        }
    }
    
    // Fechar modal ao clicar fora
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

// Função alternativa para adicionar event listeners (fallback)
function addModalListeners() {
    console.log('Adicionando event listeners alternativos...');
    
    // Tentar novamente após um delay
    setTimeout(() => {
        const allCards = document.querySelectorAll('[data-metric]');
        console.log('Total de cards com data-metric encontrados:', allCards.length);
        
        allCards.forEach(card => {
            // Remover listeners existentes e adicionar novos
            const newCard = card.cloneNode(true);
            card.parentNode.replaceChild(newCard, card);
            
            newCard.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const metric = this.getAttribute('data-metric');
                console.log('Card clicado (fallback):', metric);
                
                if (this.classList.contains('marketing-card')) {
                    showMarketingModal(metric);
                } else {
                    showGeneralModal(metric);
                }
            });
        });
    }, 2000);
}

// Função para mostrar modal das métricas de marketing
function showMarketingModal(metric) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    const data = dashboardData.marketingData[metric];
    if (!data) return;
    
    let modalContent = '';
    
    switch(metric) {
        case 'cpc':
            modalContent = `
                <h2>💰 CPC - Custo Por Clique</h2>
                <div class="metric-detail">
                    <h4>Valor Atual</h4>
                    <div class="value">R$ ${data.value.toFixed(2)}</div>
                    <div class="label">Tendência: ${data.trend}</div>
                </div>
                <h3>📊 Análise Detalhada</h3>
                <p><strong>Descrição:</strong> ${data.description}</p>
                <p><strong>Benchmark:</strong> ${data.benchmark}</p>
                <p><strong>Performance:</strong> ${data.performance}</p>
                <h3>💡 Insights</h3>
                <p>• O CPC atual está dentro da faixa esperada para o setor</p>
                <p>• Tendência positiva indica aumento na concorrência</p>
                <p>• Recomenda-se otimizar palavras-chave e segmentação</p>
                <h3>🎯 Recomendações</h3>
                <p>• Revisar palavras-chave de baixa performance</p>
                <p>• Testar novos grupos de anúncios</p>
                <p>• Melhorar Quality Score dos anúncios</p>
            `;
            break;
        case 'cpm':
            modalContent = `
                <h2>👁️ CPM - Custo Por Mil Impressões</h2>
                <div class="metric-detail">
                    <h4>Valor Atual</h4>
                    <div class="value">R$ ${data.value.toFixed(2)}</div>
                    <div class="label">Tendência: ${data.trend}</div>
                </div>
                <h3>📊 Análise Detalhada</h3>
                <p><strong>Descrição:</strong> ${data.description}</p>
                <p><strong>Benchmark:</strong> ${data.benchmark}</p>
                <p><strong>Performance:</strong> ${data.performance}</p>
                <h3>💡 Insights</h3>
                <p>• CPM em queda indica boa otimização de público</p>
                <p>• Valor competitivo no mercado atual</p>
                <p>• Alcance eficiente do público-alvo</p>
                <h3>🎯 Recomendações</h3>
                <p>• Manter estratégia atual de segmentação</p>
                <p>• Expandir públicos similares de alta performance</p>
                <p>• Testar novos formatos de anúncio</p>
            `;
            break;
        case 'ctr':
            modalContent = `
                <h2>📈 CTR - Taxa de Cliques</h2>
                <div class="metric-detail">
                    <h4>Taxa Atual</h4>
                    <div class="value">${data.value}${data.unit}</div>
                    <div class="label">Tendência: ${data.trend}</div>
                </div>
                <h3>📊 Análise Detalhada</h3>
                <p><strong>Descrição:</strong> ${data.description}</p>
                <p><strong>Benchmark:</strong> ${data.benchmark}</p>
                <p><strong>Performance:</strong> ${data.performance}</p>
                <h3>💡 Insights</h3>
                <p>• CTR acima da média indica alta relevância dos anúncios</p>
                <p>• Crescimento constante na taxa de engajamento</p>
                <p>• Público bem segmentado e interessado</p>
                <h3>🎯 Recomendações</h3>
                <p>• Continuar com criativos de alta performance</p>
                <p>• Expandir campanhas similares</p>
                <p>• Testar variações de copy e imagens</p>
            `;
            break;
        case 'connect-rate':
            modalContent = `
                <h2>🔗 Connect Rate - Taxa de Conexão</h2>
                <div class="metric-detail">
                    <h4>Taxa Atual</h4>
                    <div class="value">${data.value}${data.unit}</div>
                    <div class="label">Tendência: ${data.trend}</div>
                </div>
                <h3>📊 Análise Detalhada</h3>
                <p><strong>Descrição:</strong> ${data.description}</p>
                <p><strong>Benchmark:</strong> ${data.benchmark}</p>
                <p><strong>Performance:</strong> ${data.performance}</p>
                <h3>💡 Insights</h3>
                <p>• Taxa excelente de conexão com leads</p>
                <p>• Qualidade alta na segmentação de público</p>
                <p>• Processo de follow-up eficiente</p>
                <h3>🎯 Recomendações</h3>
                <p>• Manter estratégia atual de abordagem</p>
                <p>• Documentar processos de sucesso</p>
                <p>• Treinar equipe com base nas melhores práticas</p>
            `;
            break;
    }
    
    modalBody.innerHTML = modalContent;
    modal.style.display = 'block';
    
    // Fechar modal ao clicar no X
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
    
    // Fechar modal ao clicar fora
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
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
