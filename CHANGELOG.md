# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [PR #17] - Unreleased

### Added
- [PR #17] **Migração GraphQL**: Implementação completa de Apollo Client para substituir REST API
- [PR #17] **Apollo Client**: Configuração completa do Apollo Client
- [PR #17] **GraphQL Queries**: Queries para cidades e criação de inscrições
- [PR #17] **Custom Hooks**: Hooks para operações GraphQL
- [PR #17] **Form Integration**: Integração do formulário com GraphQL
- [PR #17] **Error Handling**: Tratamento de erros GraphQL
- [PR #17] **Loading States**: Estados de carregamento
- [PR #17] **Success Handling**: Tratamento de diferentes status de resposta
- [PR #17] **Email Validation**: Campo email opcional com validação

### Changed
- [PR #17] **Arquitetura**: Migração completa de REST para GraphQL
- [PR #17] **Data Fetching**: Substituição de fetch nativo por Apollo Client
- [PR #17] **Form Submission**: Sistema de submissão migrado para GraphQL

### Removed
- [PR #17] **REST API**: Removidas todas as chamadas REST
- [PR #17] **Fetch Native**: Removido fetch nativo
- [PR #17] **REST Hooks**: Removidos hooks REST obsoletos

### Technical
- [PR #17] **Apollo Client**: Configuração completa do Apollo Client
- [PR #17] **GraphQL Schema**: Integração com schema GraphQL do backend
- [PR #17] **Error Handling**: Tratamento robusto de erros GraphQL
- [PR #17] **Loading States**: Estados de carregamento nos formulários

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

- **Configurações de Deploy**: Arquivos de configuração para plataformas de deploy
  - Arquivo `netlify.toml` para deploy no Netlify com Node.js 22
  - Arquivo `vercel.json` para deploy no Vercel com Node.js 22
  - Configurações otimizadas para build e deploy automático

### Changed
- **Estrutura de Dados**: Atualizada estrutura de dados para nova API
  - Campo `city` alterado para `cityId` no formulário
  - Remoção de dados de termos do payload enviado ao backend
  - Manutenção de termos apenas no frontend para validação

- **Endpoint de API**: Atualizado endpoint para nova API pública
  - Mudança de endpoint antigo para `/enrollments/public`
  - Configuração via variável de ambiente `REACT_APP_BACKEND_ADDRESS`

- **Pré-requisitos do Sistema**: Atualizados requisitos mínimos
  - Node.js atualizado de versão 16+ para versão 22+
  - npm atualizado para versão 10+
  - Documentação atualizada com instruções de instalação

### Fixed
- **Tratamento de Respostas**: Corrigido tratamento de respostas da API
  - Detecção correta de status 409 para inscrições duplicadas
  - Detecção correta de status 201 para novas inscrições
  - Exibição de mensagens apropriadas para cada cenário

- **Validação de Email**: Campo email mantido como opcional
  - Schema Zod configurado para aceitar email vazio ou válido
  - Interface do usuário não mostra asterisco de obrigatoriedade
  - Descrição clara sobre opcionalidade do campo

- **Erro de Versão do Node.js**: Resolvido erro de versão descontinuada
  - Corrigido erro "Node.js Version 18.x is discontinued and must be upgraded"
  - Especificação explícita da versão 22.x em arquivos de configuração
  - Compatibilidade com plataformas de deploy modernas

### Enhanced
- **Experiência do Usuário**: Melhorias na interface e usabilidade
  - Mensagens de erro mais claras e específicas
  - Feedback visual adequado para diferentes estados
  - Carregamento de cidades transparente para o usuário

- **Performance**: Otimizações no carregamento e validação
  - Carregamento de cidades apenas uma vez ao inicializar
  - Validação client-side otimizada
  - Redução de dados desnecessários no payload

- **Performance e Compatibilidade**: Melhorias com Node.js 22
  - Build otimizado com redução de 10KB no tamanho final
  - Melhor performance de desenvolvimento e produção
  - Suporte a recursos mais recentes do JavaScript/TypeScript
  - Compatibilidade com ferramentas modernas de desenvolvimento

### Technical
- **Integração com Backend**: Implementação robusta de integração
  - Tratamento de erros de rede e API
  - Fallback para casos de falha na busca de cidades
  - Logs de erro para debugging

- **Configuração de Ambiente**: Sistema de configuração via variáveis de ambiente
  - Variável `REACT_APP_BACKEND_ADDRESS` para URL do backend
  - Arquivo `env-example.txt` com exemplo de configuração
  - Documentação clara sobre variáveis necessárias

- **Atualização para Node.js 22**: Migração completa para Node.js 22.x
  - Adicionado arquivo `.nvmrc` especificando versão 22
  - Adicionado arquivo `.node-version` para compatibilidade com ferramentas
  - Atualizado `package.json` com engines para Node.js >=22.0.0 e npm >=10.0.0
  - Atualizado `@types/node` de versão 18.x para 22.x
  - Documentação atualizada no README com instruções de instalação
  - Instruções para uso com nvm (Node Version Manager)
  - Build testado e funcionando com Node.js 22
  - Performance melhorada com versão mais recente do Node.js

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
