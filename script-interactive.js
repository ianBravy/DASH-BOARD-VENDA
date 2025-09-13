// Dashboard interativo BRVY® - Sistema de análise de vendas com identidade visual moderna
const dashboardData = {
    evolutionData: {
        labels: ['04/09', '05/09', '06/09', '07/09', '08/09', '09/09', '10/09', '11/09', '12/09'],
        datasets: [{
            label: 'Leads',
            data: [900, 1100, 950, 1200, 1000, 1100, 1200, 1000, 1200],
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
            data: [2886, 2062, 1237, 1649, 247, 166],
            backgroundColor: ['#4A90E2', '#E1306C', '#1877F2', '#4285F4', '#06d6a0', '#9b59b6'],
            borderWidth: 0
        }]
    },
    
    leadsDayData: {
        labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        datasets: [{
            label: 'Leads',
            data: [1200, 1800, 2000, 1500, 1000, 800, 1400],
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
            label: 'Leads',
            data: [2886, 1649],
            backgroundColor: ['#1877F2', '#4285F4'],
            borderWidth: 0
        }]
    }
};

const chartConfigs = {
    line: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { 
            legend: { labels: { color: '#ffffff' } }
        },
        scales: {
            x: { 
                ticks: { 
                    color: '#ffffff',
                    maxRotation: 45,
                    minRotation: 45,
                    font: { size: 11 }
                }, 
                grid: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            y: { 
                ticks: { 
                    color: '#ffffff',
                    font: { size: 11 }
                }, 
                grid: { color: 'rgba(255, 255, 255, 0.1)' }
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
                    padding: 15, 
                    usePointStyle: true,
                    font: { size: 10 }
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
                    color: '#ffffff',
                    font: { size: 11 }
                } 
            } 
        },
        scales: {
            r: { 
                ticks: { 
                    color: '#ffffff',
                    font: { size: 9 }
                }, 
                grid: { color: 'rgba(255, 255, 255, 0.1)' }, 
                pointLabels: { 
                    color: '#ffffff',
                    font: { size: 10 }
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
                    color: '#ffffff',
                    font: { size: 11 }
                } 
            } 
        },
        scales: {
            x: { 
                ticks: { 
                    color: '#ffffff',
                    font: { size: 10 },
                    maxRotation: 45,
                    minRotation: 0
                }, 
                grid: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            y: { 
                ticks: { 
                    color: '#ffffff',
                    font: { size: 10 }
                }, 
                grid: { color: 'rgba(255, 255, 255, 0.1)' }
            }
        }
    }
};

// Dados detalhados para os modais
const metricDetails = {
    'total-leads': {
        title: 'Total de Leads - Análise Detalhada',
        content: `
            <div class="metric-detail">
                <h4>Resumo Geral</h4>
                <div class="value">8,247</div>
                <div class="label">Total de Leads Capturados</div>
            </div>
            
            <h3>Distribuição por Período</h3>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Período</th>
                        <th>Leads</th>
                        <th>% do Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Últimos 7 dias</td><td>2,780</td><td>33.7%</td></tr>
                    <tr><td>Últimos 30 dias</td><td>5,420</td><td>65.7%</td></tr>
                    <tr><td>Últimos 90 dias</td><td>8,247</td><td>100%</td></tr>
                </tbody>
            </table>
            
            <h3>Evolução Diária</h3>
            <div class="chart-container">
                <canvas id="modal-evolution-chart"></canvas>
            </div>
            
            <h3>Top Fontes de Leads</h3>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Fonte</th>
                        <th>Leads</th>
                        <th>% do Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Google Ads</td><td>3,373</td><td>40.9%</td></tr>
                    <tr><td>Instagram</td><td>1,995</td><td>24.2%</td></tr>
                    <tr><td>Facebook</td><td>1,451</td><td>17.6%</td></tr>
                    <tr><td>Meta</td><td>800</td><td>9.7%</td></tr>
                    <tr><td>Outros</td><td>628</td><td>7.6%</td></tr>
                </tbody>
            </table>
            
            <h3>Lista de Leads Recentes (Últimos 10)</h3>
            <div style="max-height: 300px; overflow-y: auto; margin-top: 15px;">
                <table class="data-table">
                    <thead style="position: sticky; top: 0; background: #1a1a2e;">
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Fonte</th>
                            <th>Data</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Lucas Pereira</td><td>lucas.pereira@email.com</td><td>(11) 99999-1001</td><td>Google Ads</td><td>10/09/2025</td><td>Novo</td></tr>
                        <tr><td>Camila Santos</td><td>camila.santos@email.com</td><td>(11) 99999-1002</td><td>Instagram</td><td>10/09/2025</td><td>Contatado</td></tr>
                        <tr><td>Rafael Costa</td><td>rafael.costa@email.com</td><td>(11) 99999-1003</td><td>Facebook</td><td>09/09/2025</td><td>Qualificado</td></tr>
                        <tr><td>Beatriz Lima</td><td>beatriz.lima@email.com</td><td>(11) 99999-1004</td><td>Google Ads</td><td>09/09/2025</td><td>Novo</td></tr>
                        <tr><td>Gabriel Alves</td><td>gabriel.alves@email.com</td><td>(11) 99999-1005</td><td>Instagram</td><td>08/09/2025</td><td>Contatado</td></tr>
                        <tr><td>Larissa Souza</td><td>larissa.souza@email.com</td><td>(11) 99999-1006</td><td>Meta</td><td>08/09/2025</td><td>Qualificado</td></tr>
                        <tr><td>Felipe Ferreira</td><td>felipe.ferreira@email.com</td><td>(11) 99999-1007</td><td>Facebook</td><td>07/09/2025</td><td>Novo</td></tr>
                        <tr><td>Isabella Rocha</td><td>isabella.rocha@email.com</td><td>(11) 99999-1008</td><td>Google Ads</td><td>07/09/2025</td><td>Contatado</td></tr>
                        <tr><td>Thiago Mendes</td><td>thiago.mendes@email.com</td><td>(11) 99999-1009</td><td>Instagram</td><td>06/09/2025</td><td>Qualificado</td></tr>
                        <tr><td>Amanda Silva</td><td>amanda.silva@email.com</td><td>(11) 99999-1010</td><td>Facebook</td><td>06/09/2025</td><td>Novo</td></tr>
                    </tbody>
                </table>
                <div style="text-align: center; color: #888; padding: 10px; font-size: 12px;">
                    Mostrando últimos 10 de 8.247 leads totais
                </div>
            </div>
        `
    },
    
    'pre-checkout': {
        title: 'Pré-Checkout - Análise Detalhada',
        content: `
            <div class="metric-detail">
                <h4>Leads em Pré-Checkout</h4>
                <div class="value">1</div>
                <div class="label">Total de Leads no Pré-Checkout</div>
            </div>
            
            <h3>Status do Pré-Checkout</h3>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Quantidade</th>
                        <th>% do Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Iniciado</td><td>1</td><td>100%</td></tr>
                    <tr><td>Abandonado</td><td>0</td><td>0%</td></tr>
                    <tr><td>Concluído</td><td>0</td><td>0%</td></tr>
                </tbody>
            </table>
            
            <h3>Leads em Pré-Checkout</h3>
            <div style="max-height: 300px; overflow-y: auto; margin-top: 15px;">
                <table class="data-table">
                    <thead style="position: sticky; top: 0; background: #1a1a2e;">
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Produto</th>
                            <th>Valor</th>
                            <th>Iniciado em</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>João Silva</td><td>joao.silva@email.com</td><td>(11) 99999-0001</td><td>Proteção Patrimonial</td><td>R$ 2.497</td><td>10/09/2025 16:30</td><td>Em Andamento</td></tr>
                    </tbody>
                </table>
            </div>
            
            <h3>Detalhes do Lead Ativo</h3>
            <div class="metric-detail">
                <h4>João Silva - Em Pré-Checkout</h4>
                <p><strong>Email:</strong> joao.silva@email.com</p>
                <p><strong>Telefone:</strong> (11) 99999-0001</p>
                <p><strong>Produto:</strong> Proteção Patrimonial</p>
                <p><strong>Valor:</strong> R$ 2.497</p>
                <p><strong>Iniciado em:</strong> 10/09/2025 16:30</p>
                <p><strong>Última atividade:</strong> 10/09/2025 17:15</p>
                <p><strong>Progresso:</strong> 75% concluído</p>
            </div>
        `
    },
    
    'vendas': {
        title: 'Vendas - Análise Detalhada',
        content: `
            <div class="metric-detail">
                <h4>Total de Vendas</h4>
                <div class="value">1</div>
                <div class="label">Vendas Realizadas</div>
            </div>
            
            <h3>Análise de Conversão</h3>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Métrica</th>
                        <th>Valor</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Taxa de Conversão</td><td>0.012%</td><td>Baixa</td></tr>
                    <tr><td>Ticket Médio</td><td>R$ 2.497,00</td><td>Bom</td></tr>
                    <tr><td>Receita Total</td><td>R$ 2.497,00</td><td>Inicial</td></tr>
                </tbody>
            </table>
            
            <h3>Recomendações</h3>
            <div class="metric-detail">
                <h4>Otimizações Sugeridas</h4>
                <p>• Melhorar o processo de pré-checkout</p>
                <p>• Implementar follow-up automático</p>
                <p>• Ajustar preços e ofertas</p>
                <p>• Analisar pontos de abandono</p>
            </div>
        `
    },
    
    'conversao-final': {
        title: 'Conversão Final - Análise Detalhada',
        content: `
            <div class="metric-detail">
                <h4>Taxa de Conversão Final</h4>
                <div class="value">0.0%</div>
                <div class="label">Leads Convertidos em Vendas</div>
            </div>
            
            <h3>Funil de Conversão Detalhado</h3>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Etapa</th>
                        <th>Leads</th>
                        <th>Taxa de Conversão</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Total de Leads</td><td>8,247</td><td>100%</td></tr>
                    <tr><td>Pré-Checkout</td><td>1</td><td>0.012%</td></tr>
                    <tr><td>Vendas</td><td>1</td><td>0.012%</td></tr>
                </tbody>
            </table>
            
            <h3>Análise de Performance</h3>
            <div class="chart-container">
                <canvas id="modal-conversao-chart"></canvas>
            </div>
            
            <h3>Compradores - Lista Completa</h3>
            <div style="max-height: 300px; overflow-y: auto; margin-top: 15px;">
                <table class="data-table">
                    <thead style="position: sticky; top: 0; background: #1a1a2e;">
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Produto</th>
                            <th>Valor</th>
                            <th>Data Venda</th>
                            <th>Forma Pagamento</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Ana Silva</td><td>ana.silva@email.com</td><td>(11) 99999-0001</td><td>Proteção Patrimonial</td><td>R$ 2.497</td><td>10/09/2025</td><td>PIX</td><td>Pago</td></tr>
                    </tbody>
                </table>
            </div>
        `
    },
    
    'evolucao-data': {
        title: 'Evolução por Data - Análise Detalhada',
        content: `
            <div class="metric-detail">
                <h4>Período Analisado</h4>
                <div class="value">9 dias</div>
                <div class="label">De 04/09 a 12/09/2025</div>
            </div>
            
            <h3>Gráfico de Evolução</h3>
            <div class="chart-container">
                <canvas id="modal-evolucao-chart"></canvas>
            </div>
            
            <h3>Estatísticas do Período</h3>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Métrica</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Média Diária</td><td>308 leads</td></tr>
                    <tr><td>Pico Máximo</td><td>450 leads</td></tr>
                    <tr><td>Menor Volume</td><td>180 leads</td></tr>
                    <tr><td>Variação</td><td>150%</td></tr>
                </tbody>
            </table>
        `
    },
    
    'distribuicao-fonte': {
        title: 'Distribuição por Fonte - Análise Detalhada',
        content: `
            <div class="metric-detail">
                <h4>Fontes de Tráfego</h4>
                <div class="value">6</div>
                <div class="label">Fontes Ativas</div>
            </div>
            
            <h3>Gráfico de Distribuição</h3>
            <div class="chart-container">
                <canvas id="modal-distribuicao-chart"></canvas>
            </div>
            
            <h3>Ranking de Fontes</h3>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>Fonte</th>
                        <th>% do Total</th>
                        <th>Leads</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>1º</td><td>Facebook</td><td>35%</td><td>2,740</td></tr>
                    <tr><td>2º</td><td>Instagram</td><td>25%</td><td>1,956</td></tr>
                    <tr><td>3º</td><td>Meta</td><td>15%</td><td>1,174</td></tr>
                    <tr><td>4º</td><td>Google</td><td>20%</td><td>1,565</td></tr>
                    <tr><td>5º</td><td>Acesso Direto</td><td>3%</td><td>235</td></tr>
                    <tr><td>6º</td><td>Formulário</td><td>2%</td><td>155</td></tr>
                </tbody>
            </table>
        `
    },
    
    'funil-conversao': {
        title: 'Funil de Conversão - Análise Detalhada',
        content: `
            <div class="metric-detail">
                <h4>Funil de Conversão</h4>
                <div class="value">3 etapas</div>
                <div class="label">Processo de Conversão</div>
            </div>
            
            <h3>Análise por Etapa</h3>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Etapa</th>
                        <th>Leads</th>
                        <th>Taxa de Conversão</th>
                        <th>Perda</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Leads Iniciais</td><td>8,247</td><td>100%</td><td>-</td></tr>
                    <tr><td>Pré-Checkout</td><td>1</td><td>0.012%</td><td>99.988%</td></tr>
                    <tr><td>Vendas</td><td>1</td><td>0.012%</td><td>99.988%</td></tr>
                </tbody>
            </table>
            
            <h3>Gráfico do Funil</h3>
            <div class="chart-container">
                <canvas id="modal-funil-chart"></canvas>
            </div>
            
            <h3>Oportunidades de Melhoria</h3>
            <div class="metric-detail">
                <h4>Pontos Críticos</h4>
                <p>• Taxa de conversão muito baixa (0.012%)</p>
                <p>• Grande perda entre leads e pré-checkout</p>
                <p>• Necessário otimizar processo de qualificação</p>
            </div>
        `
    },
    
    'leads-dia-semana': {
        title: 'Leads por Dia da Semana - Análise Detalhada',
        content: `
            <div class="metric-detail">
                <h4>Padrão Semanal</h4>
                <div class="value">7 dias</div>
                <div class="label">Análise de Comportamento</div>
            </div>
            
            <h3>Gráfico Radar</h3>
            <div class="chart-container">
                <canvas id="modal-dia-semana-chart"></canvas>
            </div>
            
            <h3>Ranking por Dia</h3>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Dia</th>
                        <th>Leads</th>
                        <th>% da Semana</th>
                        <th>Performance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Terça</td><td>200</td><td>20.2%</td><td>Excelente</td></tr>
                    <tr><td>Segunda</td><td>180</td><td>18.2%</td><td>Boa</td></tr>
                    <tr><td>Sábado</td><td>140</td><td>14.1%</td><td>Boa</td></tr>
                    <tr><td>Domingo</td><td>120</td><td>12.1%</td><td>Média</td></tr>
                    <tr><td>Quarta</td><td>150</td><td>15.2%</td><td>Boa</td></tr>
                    <tr><td>Quinta</td><td>100</td><td>10.1%</td><td>Baixa</td></tr>
                    <tr><td>Sexta</td><td>80</td><td>8.1%</td><td>Muito Baixa</td></tr>
                </tbody>
            </table>
        `
    },
    
    'leads-hora': {
        title: 'Leads por Hora - Análise Detalhada',
        content: `
            <div class="metric-detail">
                <h4>Horário de Pico</h4>
                <div class="value">15h</div>
                <div class="label">Maior Volume de Leads</div>
            </div>
            
            <h3>Gráfico por Hora</h3>
            <div class="chart-container">
                <canvas id="modal-hora-chart"></canvas>
            </div>
            
            <h3>Análise de Horários</h3>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Período</th>
                        <th>Leads</th>
                        <th>% do Dia</th>
                        <th>Recomendação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>15h-18h</td><td>1,220</td><td>30.5%</td><td>Foco em anúncios</td></tr>
                    <tr><td>0h-6h</td><td>1,120</td><td>28.0%</td><td>Automação noturna</td></tr>
                    <tr><td>18h-21h</td><td>700</td><td>17.5%</td><td>Follow-up</td></tr>
                    <tr><td>9h-12h</td><td>320</td><td>8.0%</td><td>Otimizar</td></tr>
                    <tr><td>6h-9h</td><td>320</td><td>8.0%</td><td>Otimizar</td></tr>
                    <tr><td>21h-24h</td><td>400</td><td>10.0%</td><td>Manter</td></tr>
                </tbody>
            </table>
        `
    },
    
    'meta-vs-google': {
        title: 'Meta vs Google - Análise Detalhada',
        content: `
            <div class="metric-detail">
                <h4>Comparação de Performance</h4>
                <div class="value">Google Líder</div>
                <div class="label">Diferença de 1,000 leads</div>
            </div>
            
            <h3>Gráfico Comparativo</h3>
            <div class="chart-container">
                <canvas id="modal-comparacao-chart"></canvas>
            </div>
            
            <h3>Métricas Detalhadas</h3>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Métrica</th>
                        <th>Google</th>
                        <th>Meta</th>
                        <th>Diferença</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Total de Leads</td><td>8,247</td><td>8,247</td><td>+0</td></tr>
                    <tr><td>CTR Médio</td><td>3.2%</td><td>2.8%</td><td>+0.4%</td></tr>
                    <tr><td>CPC Médio</td><td>R$ 0.85</td><td>R$ 0.92</td><td>-R$ 0.07</td></tr>
                    <tr><td>Conversão</td><td>0.15%</td><td>0.12%</td><td>+0.03%</td></tr>
                </tbody>
            </table>
            
            <h3>Recomendações</h3>
            <div class="metric-detail">
                <h4>Estratégia Sugerida</h4>
                <p>• Aumentar investimento no Google (melhor ROI)</p>
                <p>• Otimizar campanhas do Meta</p>
                <p>• Testar novos formatos de anúncio</p>
            </div>
        `
    },
    
    'analise-geografica': {
        title: 'Análise Geográfica - Detalhada',
        content: `
            <div class="metric-detail">
                <h4>Cobertura Nacional</h4>
                <div class="value">59 estados</div>
                <div class="label">Estados com Leads</div>
            </div>
            
            <h3>Top 10 Estados</h3>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>Estado</th>
                        <th>Leads</th>
                        <th>% do Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>1º</td><td>São Paulo</td><td>1,878</td><td>24.0%</td></tr>
                    <tr><td>2º</td><td>Rio de Janeiro</td><td>1,527</td><td>19.5%</td></tr>
                    <tr><td>3º</td><td>Minas Gerais</td><td>868</td><td>11.1%</td></tr>
                    <tr><td>4º</td><td>Bahia</td><td>666</td><td>8.5%</td></tr>
                    <tr><td>5º</td><td>Pernambuco</td><td>467</td><td>6.0%</td></tr>
                    <tr><td>6º</td><td>Paraná</td><td>225</td><td>2.9%</td></tr>
                    <tr><td>7º</td><td>Santa Catarina</td><td>198</td><td>2.5%</td></tr>
                    <tr><td>8º</td><td>Goiás</td><td>156</td><td>2.0%</td></tr>
                    <tr><td>9º</td><td>Ceará</td><td>134</td><td>1.7%</td></tr>
                    <tr><td>10º</td><td>Pará</td><td>98</td><td>1.3%</td></tr>
                </tbody>
            </table>
            
            <h3>Análise Regional</h3>
            <div class="metric-detail">
                <h4>Distribuição por Região</h4>
                <p><strong>Sudeste:</strong> 4,500 leads (54.6%)</p>
                <p><strong>Nordeste:</strong> 1,476 leads (17.9%)</p>
                <p><strong>Sul:</strong> 445 leads (5.4%)</p>
                <p><strong>Centro-Oeste:</strong> 165 leads (2.0%)</p>
                <p><strong>Norte:</strong> 107 leads (1.3%)</p>
            </div>
        `
    },
    
    'top-fontes': {
        title: 'Top Fontes - Análise Detalhada',
        content: `
            <div class="metric-detail">
                <h4>Performance das Fontes</h4>
                <div class="value">5 fontes</div>
                <div class="label">Fontes Analisadas</div>
            </div>
            
            <h3>Ranking Completo</h3>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>Fonte</th>
                        <th>Leads</th>
                        <th>% do Total</th>
                        <th>ROI</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>1º</td><td>Google</td><td>4,620</td><td>56.1%</td><td>3.2x</td></tr>
                    <tr><td>2º</td><td>Instagram</td><td>1,990</td><td>24.2%</td><td>2.8x</td></tr>
                    <tr><td>3º</td><td>Facebook</td><td>1,450</td><td>17.6%</td><td>2.5x</td></tr>
                    <tr><td>4º</td><td>Meta</td><td>82</td><td>1.0%</td><td>1.8x</td></tr>
                    <tr><td>5º</td><td>Formulário</td><td>105</td><td>1.3%</td><td>4.1x</td></tr>
                </tbody>
            </table>
            
            <h3>Análise de ROI</h3>
            <div class="chart-container">
                <canvas id="modal-roi-chart"></canvas>
            </div>
            
            <h3>Recomendações por Fonte</h3>
            <div class="metric-detail">
                <h4>Estratégias Específicas</h4>
                <p><strong>Google:</strong> Aumentar investimento (melhor volume)</p>
                <p><strong>Instagram:</strong> Otimizar criativos visuais</p>
                <p><strong>Facebook:</strong> Testar novos públicos</p>
                <p><strong>Formulário:</strong> Expandir (melhor ROI)</p>
            </div>
        `
    },
    
    'top-anuncios': {
        title: 'Top Anúncios - Análise Detalhada',
        content: `
            <div class="metric-detail">
                <h4>Performance dos Anúncios</h4>
                <div class="value">5 anúncios</div>
                <div class="label">Anúncios Analisados</div>
            </div>
            
            <h3>Ranking de Anúncios</h3>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>Anúncio</th>
                        <th>Leads</th>
                        <th>CTR</th>
                        <th>CPC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>1º</td><td>AD94-</td><td>3,500</td><td>4.2%</td><td>R$ 0.75</td></tr>
                    <tr><td>2º</td><td>766064...</td><td>1,500</td><td>3.8%</td><td>R$ 0.82</td></tr>
                    <tr><td>3º</td><td>767401...</td><td>1,400</td><td>3.5%</td><td>R$ 0.88</td></tr>
                    <tr><td>4º</td><td>AD63+-...</td><td>1,200</td><td>3.2%</td><td>R$ 0.91</td></tr>
                    <tr><td>5º</td><td>767401...</td><td>647</td><td>2.9%</td><td>R$ 0.95</td></tr>
                </tbody>
            </table>
            
            <h3>Análise de Performance</h3>
            <div class="chart-container">
                <canvas id="modal-anuncios-chart"></canvas>
            </div>
            
            <h3>Insights dos Anúncios</h3>
            <div class="metric-detail">
                <h4>Padrões Identificados</h4>
                <p>• AD94- tem melhor performance geral</p>
                <p>• Anúncios com números altos performam melhor</p>
                <p>• CTR diminui conforme posição no ranking</p>
                <p>• CPC aumenta com menor performance</p>
            </div>
        `
    },
    
    'inteligencia-patrimonial': {
        title: 'Centro de Inteligência Patrimonial - Detalhado',
        content: `
            <div class="metric-detail">
                <h4>Base de Dados Patrimonial</h4>
                <div class="value">8,247</div>
                <div class="label">Leads com Dados Patrimoniais</div>
            </div>
            
            <h3>Distribuição por Faixa Patrimonial</h3>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Faixa</th>
                        <th>Leads</th>
                        <th>% do Total</th>
                        <th>Potencial</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Alto Patrimônio</td><td>8,227</td><td>99.8%</td><td>Alto</td></tr>
                    <tr><td>Urgência Alta</td><td>1,979</td><td>24.0%</td><td>Muito Alto</td></tr>
                    <tr><td>Interessados</td><td>6,655</td><td>80.7%</td><td>Alto</td></tr>
                    <tr><td>Prontos p/ Converter</td><td>2,606</td><td>31.6%</td><td>Máximo</td></tr>
                </tbody>
            </table>
            
            <h3>Análise de Urgência</h3>
            <div class="chart-container">
                <canvas id="modal-patrimonial-chart"></canvas>
            </div>
            
            <h3>Segmentação Estratégica</h3>
            <div class="metric-detail">
                <h4>Perfis Prioritários</h4>
                <p><strong>Hot Leads:</strong> 1,979 leads (24%) - Ação imediata</p>
                <p><strong>Warm Leads:</strong> 4,686 leads (56.8%) - Follow-up próximo</p>
                <p><strong>Cold Leads:</strong> 1,582 leads (19.2%) - Nutrição longa</p>
            </div>
        `
    },
    
    'leads-prioritarios': {
        title: 'Leads Prioritários - Análise Detalhada',
        content: `
            <div class="metric-detail">
                <h4>Leads Urgentes</h4>
                <div class="value">5</div>
                <div class="label">Leads Marcados como URGENTE</div>
            </div>
            
            <h3>Lista de Leads Prioritários</h3>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Usuário</th>
                        <th>Telefone</th>
                        <th>Score</th>
                        <th>Última Atividade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>NILZETE AI RODRIGUE</td><td>nilzeteaparec</td><td>55499918731</td><td>95</td><td>2h atrás</td></tr>
                    <tr><td>Cristiane</td><td>cristianeviola</td><td>551199476941</td><td>92</td><td>1h atrás</td></tr>
                    <tr><td>José Maurí</td><td>mfranco.mj4</td><td>55219872459</td><td>88</td><td>3h atrás</td></tr>
                    <tr><td>Roseane M</td><td>roseane.o.me</td><td>558598773118</td><td>85</td><td>4h atrás</td></tr>
                    <tr><td>Aires Gonç</td><td>aires.craveiro</td><td>55119722003</td><td>82</td><td>5h atrás</td></tr>
                </tbody>
            </table>
            
            <h3>Critérios de Priorização</h3>
            <div class="metric-detail">
                <h4>Sistema de Scoring</h4>
                <p><strong>Score 90-100:</strong> Ação imediata (2 leads)</p>
                <p><strong>Score 80-89:</strong> Contato em 1h (3 leads)</p>
                <p><strong>Score 70-79:</strong> Contato em 4h</p>
                <p><strong>Score 60-69:</strong> Contato em 24h</p>
            </div>
            
            <h3>Próximas Ações</h3>
            <div class="metric-detail">
                <h4>Plano de Contato</h4>
                <p>• Ligar para NILZETE e Cristiane (scores altos)</p>
                <p>• Enviar WhatsApp para José Maurí</p>
                <p>• Agendar follow-up para Roseane e Aires</p>
                <p>• Atualizar status após contato</p>
            </div>
        `
    },
    
    'status-whatsapp': {
        title: 'Status dos Grupos WhatsApp - Detalhado',
        content: `
            <div class="metric-detail">
                <h4>Grupos Ativos</h4>
                <div class="value">2</div>
                <div class="label">Grupos em Funcionamento</div>
            </div>
            
            <h3>Detalhamento dos Grupos</h3>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Grupo</th>
                        <th>Membros</th>
                        <th>Admins</th>
                        <th>Status</th>
                        <th>Ocupação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>#1 Jornada da Proteção</td><td>226</td><td>7</td><td>Ativo</td><td>85%</td></tr>
                    <tr><td>#2 Jornada da Proteção</td><td>214</td><td>7</td><td>Ativo</td><td>78%</td></tr>
                </tbody>
            </table>
            
            <h3>Lista de Membros dos Grupos (Últimos 10)</h3>
            <div style="max-height: 300px; overflow-y: auto; margin-top: 15px;">
                <table class="data-table">
                    <thead style="position: sticky; top: 0; background: #1a1a2e;">
                        <tr>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Grupo</th>
                            <th>Data Entrada</th>
                            <th>Tipo</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Pedro Oliveira</td><td>(11) 99999-2001</td><td>#1 Jornada</td><td>10/09/2025</td><td>Membro</td><td>Ativo</td></tr>
                        <tr><td>Mariana Costa</td><td>(11) 99999-2002</td><td>#1 Jornada</td><td>09/09/2025</td><td>Admin</td><td>Ativo</td></tr>
                        <tr><td>Bruno Lima</td><td>(11) 99999-2003</td><td>#2 Jornada</td><td>08/09/2025</td><td>Membro</td><td>Ativo</td></tr>
                        <tr><td>Natália Alves</td><td>(11) 99999-2004</td><td>#1 Jornada</td><td>07/09/2025</td><td>Membro</td><td>Ativo</td></tr>
                        <tr><td>Diego Souza</td><td>(11) 99999-2005</td><td>#2 Jornada</td><td>06/09/2025</td><td>Admin</td><td>Ativo</td></tr>
                        <tr><td>Carolina Ferreira</td><td>(11) 99999-2006</td><td>#1 Jornada</td><td>05/09/2025</td><td>Membro</td><td>Ativo</td></tr>
                        <tr><td>André Rocha</td><td>(11) 99999-2007</td><td>#2 Jornada</td><td>04/09/2025</td><td>Membro</td><td>Ativo</td></tr>
                        <tr><td>Vanessa Mendes</td><td>(11) 99999-2008</td><td>#1 Jornada</td><td>03/09/2025</td><td>Admin</td><td>Ativo</td></tr>
                        <tr><td>Rodrigo Silva</td><td>(11) 99999-2009</td><td>#2 Jornada</td><td>02/09/2025</td><td>Membro</td><td>Ativo</td></tr>
                        <tr><td>Priscila Santos</td><td>(11) 99999-2010</td><td>#1 Jornada</td><td>01/09/2025</td><td>Membro</td><td>Ativo</td></tr>
                    </tbody>
                </table>
                <div style="text-align: center; color: #888; padding: 10px; font-size: 12px;">
                    Mostrando últimos 10 de 5.651 membros totais (2.826 + 2.825)
                </div>
            </div>
            
            <h3>Métricas de Engajamento</h3>
            <div class="chart-container">
                <canvas id="modal-whatsapp-grupos-chart"></canvas>
            </div>
            
            <h3>Análise de Performance</h3>
            <div class="metric-detail">
                <h4>Indicadores de Sucesso</h4>
                <p><strong>Taxa de Ocupação Média:</strong> 81.5%</p>
                <p><strong>Mensagens por Dia:</strong> 156</p>
                <p><strong>Taxa de Resposta:</strong> 78.3%</p>
                <p><strong>Novos Membros/Dia:</strong> 12</p>
            </div>
            
            <h3>Leads Prioritários</h3>
            <div style="max-height: 300px; overflow-y: auto; margin-top: 15px;">
                <table class="data-table">
                    <thead style="position: sticky; top: 0; background: #1a1a2e;">
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Prioridade</th>
                            <th>Score</th>
                            <th>Último Contato</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Ana Silva</td><td>ana.silva@email.com</td><td>Alta</td><td>95</td><td>10/09/2025</td><td>Hot Lead</td></tr>
                        <tr><td>Carlos Santos</td><td>carlos.santos@email.com</td><td>Alta</td><td>92</td><td>09/09/2025</td><td>Hot Lead</td></tr>
                        <tr><td>Maria Oliveira</td><td>maria.oliveira@email.com</td><td>Média</td><td>78</td><td>08/09/2025</td><td>Warm Lead</td></tr>
                        <tr><td>João Costa</td><td>joao.costa@email.com</td><td>Média</td><td>75</td><td>07/09/2025</td><td>Warm Lead</td></tr>
                        <tr><td>Fernanda Lima</td><td>fernanda.lima@email.com</td><td>Baixa</td><td>45</td><td>06/09/2025</td><td>Cold Lead</td></tr>
                        <tr><td>Roberto Alves</td><td>roberto.alves@email.com</td><td>Alta</td><td>88</td><td>05/09/2025</td><td>Hot Lead</td></tr>
                        <tr><td>Patrícia Souza</td><td>patricia.souza@email.com</td><td>Média</td><td>72</td><td>04/09/2025</td><td>Warm Lead</td></tr>
                        <tr><td>Marcos Ferreira</td><td>marcos.ferreira@email.com</td><td>Baixa</td><td>38</td><td>03/09/2025</td><td>Cold Lead</td></tr>
                    </tbody>
                </table>
            </div>
            
            <h3>Recomendações</h3>
            <div class="metric-detail">
                <h4>Otimizações Sugeridas</h4>
                <p>• Criar terceiro grupo (capacidade próxima do limite)</p>
                <p>• Implementar automação de boas-vindas</p>
                <p>• Aumentar frequência de conteúdo</p>
                <p>• Treinar administradores</p>
            </div>
        `
    },
    
    'whatsapp-validos': {
        title: 'WhatsApp Válidos - Análise Detalhada',
        content: `
            <div class="metric-detail">
                <h4>Taxa de Validação</h4>
                <div class="value">92.7%</div>
                <div class="label">Leads com WhatsApp Válido</div>
            </div>
            
            <h3>Distribuição por Status</h3>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Quantidade</th>
                        <th>% do Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>WhatsApp Válido</td><td>7,647</td><td>92.7%</td></tr>
                    <tr><td>Número Inválido</td><td>371</td><td>4.5%</td></tr>
                    <tr><td>Não Possui WhatsApp</td><td>229</td><td>2.8%</td></tr>
                </tbody>
            </table>
            
            <h3>Leads com WhatsApp Válidos</h3>
            <div style="max-height: 300px; overflow-y: auto; margin-top: 15px;">
                <table class="data-table">
                    <thead style="position: sticky; top: 0; background: #1a1a2e;">
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>WhatsApp</th>
                            <th>Status WPP</th>
                            <th>Data Validação</th>
                            <th>Fonte</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Helena Costa</td><td>helena.costa@email.com</td><td>(11) 99999-3001</td><td>Válido</td><td>10/09/2025</td><td>Google Ads</td></tr>
                        <tr><td>Paulo Lima</td><td>paulo.lima@email.com</td><td>(11) 99999-3002</td><td>Válido</td><td>10/09/2025</td><td>Instagram</td></tr>
                        <tr><td>Cristina Alves</td><td>cristina.alves@email.com</td><td>(11) 99999-3003</td><td>Válido</td><td>09/09/2025</td><td>Facebook</td></tr>
                        <tr><td>Henrique Souza</td><td>henrique.souza@email.com</td><td>(11) 99999-3004</td><td>Válido</td><td>09/09/2025</td><td>Google Ads</td></tr>
                        <tr><td>Luciana Ferreira</td><td>luciana.ferreira@email.com</td><td>(11) 99999-3005</td><td>Válido</td><td>08/09/2025</td><td>Instagram</td></tr>
                        <tr><td>Márcio Rocha</td><td>marcio.rocha@email.com</td><td>(11) 99999-3006</td><td>Válido</td><td>08/09/2025</td><td>Meta</td></tr>
                        <tr><td>Simone Mendes</td><td>simone.mendes@email.com</td><td>(11) 99999-3007</td><td>Válido</td><td>07/09/2025</td><td>Facebook</td></tr>
                        <tr><td>Fábio Silva</td><td>fabio.silva@email.com</td><td>(11) 99999-3008</td><td>Válido</td><td>07/09/2025</td><td>Google Ads</td></tr>
                        <tr><td>Regina Santos</td><td>regina.santos@email.com</td><td>(11) 99999-3009</td><td>Válido</td><td>06/09/2025</td><td>Instagram</td></tr>
                        <tr><td>Leonardo Costa</td><td>leonardo.costa@email.com</td><td>(11) 99999-3010</td><td>Válido</td><td>06/09/2025</td><td>Facebook</td></tr>
                        <tr><td>Adriana Lima</td><td>adriana.lima@email.com</td><td>(11) 99999-3011</td><td>Válido</td><td>05/09/2025</td><td>Meta</td></tr>
                        <tr><td>Roberto Alves</td><td>roberto.alves@email.com</td><td>(11) 99999-3012</td><td>Válido</td><td>05/09/2025</td><td>Google Ads</td></tr>
                    </tbody>
                </table>
            </div>
            
            <h3>Validação por Fonte</h3>
            <div class="chart-container">
                <canvas id="modal-whatsapp-chart"></canvas>
            </div>
            
            <h3>Métricas de Qualidade</h3>
            <div class="metric-detail">
                <h4>Taxa de Resposta</h4>
                <div class="value">78.3%</div>
                <div class="label">Leads que respondem mensagens</div>
            </div>
            
            <div class="metric-detail">
                <h4>Tempo Médio de Resposta</h4>
                <div class="value">2.4h</div>
                <div class="label">Tempo médio para primeira resposta</div>
            </div>
        `
    },
    
    'entrou-grupo': {
        title: 'Entrada em Grupos - Análise Detalhada',
        content: `
            <div class="metric-detail">
                <h4>Taxa de Conversão</h4>
                <div class="value">68.5%</div>
                <div class="label">Leads que entraram em grupos</div>
            </div>
            
            <h3>Distribuição por Grupo</h3>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Grupo</th>
                        <th>Membros</th>
                        <th>Taxa de Entrada</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>#1 Jornada da Proteção</td><td>226</td><td>85.2%</td></tr>
                    <tr><td>#2 Jornada da Proteção</td><td>214</td><td>78.1%</td></tr>
                    <tr><td>Grupo VIP</td><td>89</td><td>45.3%</td></tr>
                </tbody>
            </table>
            
            <h3>Membros que Entraram nos Grupos (Últimos 10)</h3>
            <div style="max-height: 300px; overflow-y: auto; margin-top: 15px;">
                <table class="data-table">
                    <thead style="position: sticky; top: 0; background: #1a1a2e;">
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Grupo</th>
                            <th>Data Entrada</th>
                            <th>Fonte</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Eduardo Pereira</td><td>eduardo.pereira@email.com</td><td>#1 Jornada</td><td>10/09/2025</td><td>Google Ads</td><td>Ativo</td></tr>
                        <tr><td>Renata Costa</td><td>renata.costa@email.com</td><td>#1 Jornada</td><td>09/09/2025</td><td>Instagram</td><td>Ativo</td></tr>
                        <tr><td>Gustavo Lima</td><td>gustavo.lima@email.com</td><td>#2 Jornada</td><td>08/09/2025</td><td>Facebook</td><td>Ativo</td></tr>
                        <tr><td>Juliana Alves</td><td>juliana.alves@email.com</td><td>#1 Jornada</td><td>07/09/2025</td><td>Google Ads</td><td>Ativo</td></tr>
                        <tr><td>Leandro Souza</td><td>leandro.souza@email.com</td><td>#2 Jornada</td><td>06/09/2025</td><td>Instagram</td><td>Ativo</td></tr>
                        <tr><td>Fernanda Ferreira</td><td>fernanda.ferreira@email.com</td><td>#1 Jornada</td><td>05/09/2025</td><td>Meta</td><td>Ativo</td></tr>
                        <tr><td>Vinícius Rocha</td><td>vinicius.rocha@email.com</td><td>#2 Jornada</td><td>04/09/2025</td><td>Facebook</td><td>Ativo</td></tr>
                        <tr><td>Daniela Mendes</td><td>daniela.mendes@email.com</td><td>#1 Jornada</td><td>03/09/2025</td><td>Google Ads</td><td>Ativo</td></tr>
                        <tr><td>Alexandre Silva</td><td>alexandre.silva@email.com</td><td>#2 Jornada</td><td>02/09/2025</td><td>Instagram</td><td>Ativo</td></tr>
                        <tr><td>Monique Santos</td><td>monique.santos@email.com</td><td>#1 Jornada</td><td>01/09/2025</td><td>Facebook</td><td>Ativo</td></tr>
                    </tbody>
                </table>
                <div style="text-align: center; color: #888; padding: 10px; font-size: 12px;">
                    Mostrando últimos 10 de 5.651 membros que entraram nos grupos
                </div>
            </div>
            
            <h3>Evolução da Entrada em Grupos</h3>
            <div class="chart-container">
                <canvas id="modal-grupos-chart"></canvas>
            </div>
            
            <h3>Métricas de Engajamento</h3>
            <div class="metric-detail">
                <h4>Taxa de Participação</h4>
                <div class="value">42.1%</div>
                <div class="label">Membros que participam ativamente</div>
            </div>
            
            <div class="metric-detail">
                <h4>Mensagens por Dia</h4>
                <div class="value">156</div>
                <div class="label">Média de mensagens nos grupos</div>
            </div>
        `
    },
    
    'custo-lead': {
        title: 'Custo por Lead - Análise Financeira',
        content: `
            <div class="metric-detail">
                <h4>Custo Médio Atual</h4>
                <div class="value">R$ 12,50</div>
                <div class="label">Custo médio para aquisição de cada lead válido</div>
            </div>
            
            <h3>Análise por Fonte</h3>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Fonte</th>
                        <th>Custo por Lead</th>
                        <th>ROI</th>
                        <th>Leads Gerados</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Facebook</td><td>R$ 8,90</td><td>12.4x</td><td>2,886</td></tr>
                    <tr><td>Instagram</td><td>R$ 15,20</td><td>7.2x</td><td>2,062</td></tr>
                    <tr><td>Google</td><td>R$ 22,50</td><td>4.8x</td><td>1,649</td></tr>
                    <tr><td>Meta</td><td>R$ 11,80</td><td>9.6x</td><td>1,237</td></tr>
                </tbody>
            </table>
            
            <h3>Evolução do Custo (Últimos 30 dias)</h3>
            <div style="max-height: 300px; overflow-y: auto; margin-top: 15px;">
                <table class="data-table">
                    <thead style="position: sticky; top: 0; background: #1a1a1a;">
                        <tr>
                            <th>Data</th>
                            <th>Custo Total</th>
                            <th>Leads</th>
                            <th>Custo/Lead</th>
                            <th>Variação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>11/09/2025</td><td>R$ 103.125</td><td>8.247</td><td>R$ 12,50</td><td style="color: #06d6a0;">-5.4%</td></tr>
                        <tr><td>10/09/2025</td><td>R$ 109.040</td><td>8.120</td><td>R$ 13,43</td><td style="color: #ff6b6b;">+2.1%</td></tr>
                        <tr><td>09/09/2025</td><td>R$ 106.760</td><td>7.980</td><td>R$ 13,38</td><td style="color: #ff6b6b;">+1.8%</td></tr>
                        <tr><td>08/09/2025</td><td>R$ 104.880</td><td>7.850</td><td>R$ 13,36</td><td style="color: #06d6a0;">-0.3%</td></tr>
                        <tr><td>07/09/2025</td><td>R$ 105.195</td><td>7.820</td><td>R$ 13,45</td><td style="color: #06d6a0;">-2.1%</td></tr>
                    </tbody>
                </table>
                <div style="text-align: center; color: #888; padding: 10px; font-size: 12px;">
                    Mostrando últimos 5 dias de 30 registros
                </div>
            </div>
            
            <h3>Métricas de Performance</h3>
            <div class="metric-detail">
                <h4>Meta Mensal</h4>
                <div class="value">R$ 10,00</div>
                <div class="label">Custo por lead desejado</div>
            </div>
            
            <div class="metric-detail">
                <h4>ROI Médio</h4>
                <div class="value">8.2x</div>
                <div class="label">Retorno sobre investimento</div>
            </div>
            
            <div class="metric-detail">
                <h4>Economia vs Meta</h4>
                <div class="value">R$ 2,50</div>
                <div class="label">Diferença do custo atual para meta</div>
            </div>
            
            <canvas id="modal-custo-chart" width="400" height="200"></canvas>
        `
    }
};

// Inicializar quando carregar
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    initializeInteractivity();
    loadMainMetrics();
});

// Carregar métricas principais
function loadMainMetrics() {
    const metrics = [
        { selector: '.metric-value', values: ['8,247', '92.7%', '68.5%', 'R$ 12,50'] },
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

// Inicializar interatividade
function initializeInteractivity() {
    // Modal
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    
    // Fechar modal
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
    
    // Fechar clicando fora do modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
    
    // Cards clicáveis
    const clickableCards = document.querySelectorAll('.clickable-card');
    clickableCards.forEach(card => {
        card.addEventListener('click', function() {
            const metric = this.getAttribute('data-metric');
            showMetricDetails(metric);
        });
    });
    
    // Botão limpar
    const clearBtn = document.querySelector('.clear-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            document.querySelector('.search-input').value = '';
            document.querySelectorAll('.search-select').forEach(select => select.selectedIndex = 0);
            showNotification('Filtros limpos!');
        });
    }
    
    // Busca
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

// Mostrar detalhes da métrica
function showMetricDetails(metric) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    if (metricDetails[metric]) {
        const detail = metricDetails[metric];
        modalBody.innerHTML = detail.content;
        
        // Criar gráficos específicos do modal
        setTimeout(() => {
            createModalCharts(metric);
        }, 100);
        
        modal.style.display = 'block';
    }
}

// Criar gráficos específicos do modal
function createModalCharts(metric) {
    if (metric === 'total-leads') {
        const ctx = document.getElementById('modal-evolution-chart');
        if (ctx) {
            new Chart(ctx, {
                type: 'line',
                data: dashboardData.evolutionData,
                options: chartConfigs.line
            });
        }
    } else if (metric === 'whatsapp-validos') {
        const ctx = document.getElementById('modal-whatsapp-chart');
        if (ctx) {
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Válido', 'Inválido', 'Sem WhatsApp'],
                    datasets: [{
                        data: [92.7, 4.5, 2.8],
                        backgroundColor: ['#06d6a0', '#ff6b6b', '#ffa726']
                    }]
                },
                options: chartConfigs.doughnut
            });
        }
    } else if (metric === 'entrou-grupo') {
        const ctx = document.getElementById('modal-grupos-chart');
        if (ctx) {
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
                    datasets: [{
                        label: 'Entradas em Grupos',
                        data: [45, 62, 58, 71],
                        backgroundColor: '#d4af37'
                    }]
                },
                options: chartConfigs.bar
            });
        }
    } else if (metric === 'leads-dia-semana') {
        const ctx = document.getElementById('modal-dia-semana-chart');
        if (ctx) {
            new Chart(ctx, {
                type: 'radar',
                data: dashboardData.leadsDayData,
                options: chartConfigs.radar
            });
        }
    } else if (metric === 'leads-hora') {
        const ctx = document.getElementById('modal-hora-chart');
        if (ctx) {
            new Chart(ctx, {
                type: 'bar',
                data: dashboardData.leadsHourData,
                options: chartConfigs.bar
            });
        }
    } else if (metric === 'meta-vs-google') {
        const ctx = document.getElementById('modal-comparacao-chart');
        if (ctx) {
            new Chart(ctx, {
                type: 'bar',
                data: dashboardData.comparisonData,
                options: chartConfigs.bar
            });
        }
    } else if (metric === 'distribuicao-fonte') {
        const ctx = document.getElementById('modal-distribuicao-chart');
        if (ctx) {
            new Chart(ctx, {
                type: 'doughnut',
                data: dashboardData.sourceData,
                options: chartConfigs.doughnut
            });
        }
    } else if (metric === 'evolucao-data') {
        const ctx = document.getElementById('modal-evolucao-chart');
        if (ctx) {
            new Chart(ctx, {
                type: 'line',
                data: dashboardData.evolutionData,
                options: chartConfigs.line
            });
        }
    } else if (metric === 'custo-lead') {
        const ctx = document.getElementById('modal-custo-chart');
        if (ctx) {
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['07/09', '08/09', '09/09', '10/09', '11/09'],
                    datasets: [{
                        label: 'Custo por Lead (R$)',
                        data: [13.45, 13.36, 13.38, 13.43, 12.50],
                        borderColor: '#ffffff',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: chartConfigs.line
            });
        }
    } else if (metric === 'status-whatsapp') {
        const ctx = document.getElementById('modal-whatsapp-grupos-chart');
        if (ctx) {
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
                    datasets: [{
                        label: 'Mensagens por Dia',
                        data: [142, 156, 168, 158],
                        backgroundColor: '#06d6a0'
                    }, {
                        label: 'Novos Membros',
                        data: [8, 12, 15, 11],
                        backgroundColor: '#d4af37'
                    }]
                },
                options: chartConfigs.bar
            });
        }
    }
}

// Notificação BRVY®
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed; top: 20px; right: 20px; z-index: 1000;
        background: #ffffff; color: #000000; padding: 10px 15px;
        border-radius: 5px; font-weight: 600;
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.5);
    `;
    
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
}

// Mensagem de boas-vindas do dashboard BRVY®
function showDashboardWelcome() {
    const welcomeMessage = "Bem-vindo ao Dashboard BRVY® - Sistema de análise de vendas interativo";
    console.log(`🚀 ${welcomeMessage}`);
    showNotification(welcomeMessage);
}

// Inicializar dashboard BRVY®
document.addEventListener('DOMContentLoaded', function() {
    showDashboardWelcome();
});
