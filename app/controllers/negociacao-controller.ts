import { Negociacoes } from '../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');   
    }

    adiciona(): void {
        const negociacao = this.criaNegocicao();
        this.negociacoes.adicionar(negociacao);
        this.limparFormulario();

        console.log(this.negociacoes);
    }

    criaNegocicao(): Negociacao {
        const expReg = /-/g;
        const date = new Date(this.inputData.value.replace(expReg, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus();
    }
}