const translatePraca = cod => {
    switch(cod){
        case 'praca-da-estacao':
            return 'Praça da estação';

        case 'praca-do-coreto':
            return 'Praça do coreto';

        case 'praca-das-carretas':
            return 'Praça das Carretas';
        
        case 'praca-santos-dumont':
            return 'Praça Santos Dumont';

        case 'praca-da-catedral':
            return 'Praça da Catedral';

        case 'praca-dos-desportos':
            return 'Praça dos desportos';

        case 'praca-dom-diogo':
            return 'Praça Dom Diogo';

        case 'praca-do-silveira':
            return 'Praça do Silveira';

        case 'praca-dr-albano':
            return 'Praça Dr. Albano';

        case 'praca-do-calcadao':
            return 'Praça do Calçadão';
    }
}

export default translatePraca;