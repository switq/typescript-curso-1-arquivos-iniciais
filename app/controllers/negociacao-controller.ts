import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { NegociacoesView } from './../views/negociacoes-view.js';
import { Negociacoes } from '../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';
import { MensagemView } from '../views/mensagem-view.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);   
    }

    public adiciona(): void {
        const negociacaoTemp = new Negociacao(null, 0, 0);
        const negociacao = negociacaoTemp.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if ( !this.verificaDiaUtil(negociacao.data) ) {
            this.mensagemView
                .update('Apenas negociações em dias úteis são aceitas');
            return;
        }

        this.negociacoes.adicionar(negociacao);
        this.limparFormulario();
        this.atualizaView();  
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }

    private verificaDiaUtil(data: Date): boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }
}