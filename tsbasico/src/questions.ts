import {prompt} from 'inquirer';

export class Perguntas {
    private dadosDoPedido : any;
    private dadosDaEntrega : any;
    public pizzaDelivery(){
        prompt(
            [
            {
                name: 'name',
                type: 'input',
                message: 'Qual o seu nome?\n',
            },
            {
                name: 'phone',
                type: 'input',
                message: 'Informe o seu telefone:\n'
            },
            {
                name: 'size',
                type: 'list',
                message: 'Escolha um tamanho:',
                choices: ['Pequena','Média','Grande']
            },
            {
                name: 'flavor',
                type: 'list',
                message: 'Escolha um sabor:',
                choices: ['Calabresa','Frango com Bacon','Peperroni','Banana Nevada','Café com Leite']
            },
            {
                name: 'qt',
                type: 'input',
                message: 'Quantas pizzas você deseja?:\n'
            },
            {
                name: 'delivery',
                type: 'list',
                message: 'Entrega?',
                choices: ['Entrega','Retirada no Balcão']
            },
        ]
        ).then(
            (answer : any) =>{
                this.dadosDoPedido = answer;
                if(answer.delivery == 'Entrega'){
                    this.makeEntrega();
                } else if(answer.delivery == 'Retirada no Balcão'){   
                    this.makeReport();
                }
            }
        );
    }
    public makeEntrega(){
        prompt(
            [
                {
                    name: 'city',
                    type: 'input',
                    message: 'Qual a sua cidade?\n'
                },
                {
                    name: 'neighborhood',
                    type: 'input',
                    message: 'Qual o seu bairro?\n'
                },
                {
                    name: 'street',
                    type: 'input',
                    message: 'Qual a sua rua?\n'
                },
                {
                    name: 'number',
                    type: 'input',
                    message: 'Qual o numero da sua casa?\n'
                },
                {
                    name: 'complement',
                    type: 'input',
                    message: 'Algum complemento ou ponto de referencia?\n'
                },
            ]
        ).then(
            (answer : any) => {
                this.dadosDaEntrega = answer;
                this.makeReport();
            }

        );
    }
    public makeReport(){
        console.log(this.dadosDoPedido.name +' '+ 'seu pedido de:'+'\n'+ this.dadosDoPedido.qt+' '+ this.dadosDoPedido.size +' '+'sabor: '+ this.dadosDoPedido.flavor+
        '\nPara: '+this.dadosDoPedido.delivery)
        if(this.dadosDoPedido.delivery === 'Entrega'){
            console.log('Pedido será entregue em: '+this.dadosDaEntrega.city+'\n'+this.dadosDaEntrega.neighborhood+'\n'+this.dadosDaEntrega.street+'\n'+this.dadosDaEntrega.number+
            '\n'+this.dadosDaEntrega.complement)
        }
    }
}   

