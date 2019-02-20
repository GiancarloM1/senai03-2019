import {prompt} from 'inquirer';
import { VpHttp } from './http/vphttp';

export class prova {
    private dadosCategoria : any;
    private dadosProduto : any;
    private estoque : any;
    private produtos : any[] = [];
    private dataCategoria : any[] = [];

    public prova(){
        this.getCategoria();

    }
    public buscaCategoria(){
        prompt(
            [
            {
                name: 'categoria',
                type: 'list',
                message: 'Escolha uma das seguintes categorias: \n',
                choices: this.dataCategoria
            },
            ]

        ).then(
            (answer : any) =>{
                this.dadosCategoria = answer;
                this.makeReport();
            }
            
        );

    }
    public makeReport(){
        console.log('\nCategoria: '+this.dadosCategoria.categoria);
        this.produtos.forEach((element:any) => {
            
            if(element.plataforma == this.dadosCategoria.categoria ){
                this.dadosProduto = element.jogos;
                this.estoque = element.saldo;
                
                console.log('\nProduto nesta categoria:' + this.dadosProduto + '||||' + this.estoque);

            }

        });

    }
    public getCategoria(){
        let http = new VpHttp('http://5c6c7bf2d51de300146f5b66.mockapi.io/categoria');

        http.get().subscribe(
            (data : any) => {
                data.forEach((element:any) => {
                    this.dataCategoria.push(element.Categoria);
                });
                this.getProduto();
            },
            (error : any) =>{
                console.log('Não foi possivel buscar dados na inicialização do programa');
            }
        )
    }
    public getProduto(){
        let http = new VpHttp('http://5c6c7bf2d51de300146f5b66.mockapi.io/produtos');

        http.get().subscribe(
            (data : any) => {
                this.produtos = data;
                this.buscaCategoria();
            },
            (error : any) =>{
                console.log('Não foi possivel buscar dados na inicialização do programa');
            }
        );

    }

}

