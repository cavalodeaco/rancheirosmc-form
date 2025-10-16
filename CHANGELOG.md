# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Unreleased]

### Added
- **Novas funcionalidades serão documentadas aqui**

### Changed
- **Mudanças em funcionalidades existentes serão documentadas aqui**

### Fixed
- **Correções de bugs serão documentadas aqui**

### Enhanced
- **Melhorias de performance e UX serão documentadas aqui**

### Technical
- **Mudanças técnicas e de infraestrutura serão documentadas aqui**

## [2.0.0] - 2025-01-16

### Pull Requests
- **PR #15**: 🚀 Migração para Nova API Pública - Integração Completa - [Ver PR](https://github.com/cavalodeaco/rancheirosmc-form/pull/15)

### Added
- **Integração com API Pública**: Integração completa com nova API pública do backend
  - Busca automática de cidades disponíveis via `/locations/public/cities`
  - Envio de inscrições via `/enrollments/public`
  - Tratamento de respostas com status HTTP correto (201/409)

- **Seleção Dinâmica de Cidades**: Sistema de seleção de cidades baseado em dados da API
  - Carregamento automático de cidades ao inicializar o formulário
  - Select component populado dinamicamente com dados do backend
  - Ordenação alfabética das cidades no frontend
  - Busca/filtro de cidades no select

- **Validação por ID de Cidade**: Atualizada validação para usar ID em vez de hash
  - Schema Zod atualizado para validar `cityId` como string
  - Remoção de sistema de hash MD5 desnecessário
  - Validação mais simples e eficiente

### Changed
- **Estrutura de Dados**: Atualizada estrutura de dados para nova API
  - Campo `city` alterado para `cityId` no formulário
  - Remoção de dados de termos do payload enviado ao backend
  - Manutenção de termos apenas no frontend para validação

- **Endpoint de API**: Atualizado endpoint para nova API pública
  - Mudança de endpoint antigo para `/enrollments/public`
  - Configuração via variável de ambiente `REACT_APP_BACKEND_ADDRESS`

### Fixed
- **Tratamento de Respostas**: Corrigido tratamento de respostas da API
  - Detecção correta de status 409 para inscrições duplicadas
  - Detecção correta de status 201 para novas inscrições
  - Exibição de mensagens apropriadas para cada cenário

- **Validação de Email**: Campo email mantido como opcional
  - Schema Zod configurado para aceitar email vazio ou válido
  - Interface do usuário não mostra asterisco de obrigatoriedade
  - Descrição clara sobre opcionalidade do campo

### Enhanced
- **Experiência do Usuário**: Melhorias na interface e usabilidade
  - Mensagens de erro mais claras e específicas
  - Feedback visual adequado para diferentes estados
  - Carregamento de cidades transparente para o usuário

- **Performance**: Otimizações no carregamento e validação
  - Carregamento de cidades apenas uma vez ao inicializar
  - Validação client-side otimizada
  - Redução de dados desnecessários no payload

### Technical
- **Integração com Backend**: Implementação robusta de integração
  - Tratamento de erros de rede e API
  - Fallback para casos de falha na busca de cidades
  - Logs de erro para debugging

- **Configuração de Ambiente**: Sistema de configuração via variáveis de ambiente
  - Variável `REACT_APP_BACKEND_ADDRESS` para URL do backend
  - Arquivo `env-example.txt` com exemplo de configuração
  - Documentação clara sobre variáveis necessárias

## [1.0.0] - Initial Release

### Added
- Sistema de formulário de inscrição em múltiplas etapas
- Validação client-side com Zod
- Interface responsiva com Mantine UI
- Integração com API de validação brasileira (js-brasil)
- Sistema de stepper para navegação entre etapas
- Validação de dados pessoais (nome, telefone, CNH)
- Seleção de cidade para treinamento
- Campos opcionais para email e informações da motocicleta
- Aceite de termos e condições
- Feedback visual para diferentes estados de submissão
