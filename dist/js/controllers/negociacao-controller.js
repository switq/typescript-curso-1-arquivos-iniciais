import { NegociacoesView } from './../views/negociacoes-view.js';
import { Negociacoes } from '../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegocicao();
        this.negociacoes.adicionar(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.limparFormulario();
    }
    criaNegocicao() {
        const expReg = /-/g;
        const date = new Date(this.inputData.value.replace(expReg, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
