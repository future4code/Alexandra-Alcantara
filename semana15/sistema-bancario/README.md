# Projeto Sistema Bancário

## Estrutura de Dados

### Contas:

- `nome`
- `CPF` (único)
- `data` de nascimento (idade >= 18)
- `saldo` (começa zerado)
- `extrato` (array de transações)
  - `valor`
  - `data`
  - `descrição`

## Funcionalidades

### Criar Conta

- Informar `nome`, `CPF` e `data` de nascimento.

### Verificar Saldo

- Passando `nome` e `CPF`.

### Adicionar Saldo

- Passando `nome`, `CPF` e `valor`.

### Pagar Conta

- Passando `valor`, `descrição` e `data` de pagamento;
- Caso ele não informe a `data`, considerar pagamento no mesmo dia;
- Não pode haver agendamento para data passada;
- Não pode haver pagamento sem que haja saldo suficiente.

- Passando seu `nome` e `CPF`, assim como o `nome` e `CPF` do destinatário e o `valor` a ser transferido;
- Transferências não podem ser agendadas;

## Requisitos Mínimos

- Criar conta;
- Pegar contas;
- Adicionar validação de idade.

### Etapas de Desenvolvimento

<ol>
 <li>Crie um <b>tipo</b> para representar uma conta para o usuário.</li>
 <li>Crie um array global que armazene usuários na aplicação. Caso queira, pode iniciar este array com valores pré-definidos.</li>
 <li>Crie mais um <b>tipo</b>: para representar as <b>transações</b> que serão salvas no extrato.</li>
 <li>Dentro da definição do usuário, crie um array que armazene as transações de um cliente.</li>
 <li>Crie um endpoint que utilize o método <font color="blue">POST</font> da entidade <font color="#b7aa6b">users</font> que será responsável por cadastrar um usuário em um array de usuários. Neste momento, não se preocupe com as validaçẽs descritas nas funcionalidades.</li>
 <li>Crie um método <font color="blue">GET</font> na entidade users, função que será responsável por pegar todos os usuários existentes no array de usuários.</li>
 <li>Adicione uma validação no item 1 (Criar conta): o usuário deve possuir mais do que 18 anos para conseguir se cadastrar. Caso não possua, exiba uma mensagem de erro.</li>
</ol>
