import filtros from './filtros.json'
import styles from './Filtros.module.scss'
import classNames from 'classnames';

//Método mais novo, coloamos IOpcao porque é um tipo interface, por baixo dos panos ele leu o json e viu os tipos e criou a interface
type IOpcao = typeof filtros[0];

//Método mais comum
// interface Opcao {
//     id: number;
//     label: string;
// }

interface Props {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function Filtros({ filtro, setFiltro }: Props) {

    function selecionarFiltro(opcao: IOpcao) {
        if(filtro === opcao.id) return setFiltro(null); //Abreviação do if
        return setFiltro(opcao.id)
     }

    return (
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button
                    className={classNames({
                        [styles.filtros__filtro]:true,
                        [styles['filtros__filtro--ativo']]: filtro === opcao.id
                    })} //Usamos a biblioteca classNames para não ter que concatenar usando operador ternário
                    key={opcao.id}
                    onClick={() => selecionarFiltro(opcao)}>
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}
