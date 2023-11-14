import filtros from './filtros.json'
import styles from './Filtros.module.scss'

//Método mais novo, coloamos IOpcao porque é um tipo interface, por baixo dos panos ele leu o json e viu os tipos e criou a interface
type IOpcao = typeof filtros[0];

//Método mais comum
// interface Opcao {
//     id: number;
//     label: string;
// }

export default function Filtros() {

    function selecionarFiltro (opcao : IOpcao) {}

    return (
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button className={styles.filtros__filtro} key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}
