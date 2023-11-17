import { useState } from 'react'
import styles from './Ordenador.module.scss'
import opcoes from './opoes.json'
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

interface Props {
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>,
}

export default function Ordenador({ ordenador, setOrdenador }: Props) {

    const [aberto, setAberto] = useState(false);
    const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;

    return (
        <button
            className={classNames({
                [styles.ordenador]:true,
                [styles['ordenador--ativo']]:ordenador !== '',
            })}
            onBlur={() => setAberto(false)}
            onClick={() => setAberto(!aberto)}> {/*  onClick={() => setAberto(!aberto)} Por se tratar de um booleano, só com isso consigo inverter a chave */}
            <span>{nomeOrdenador || 'Ordenar por'}</span>
            {aberto ? < MdKeyboardArrowUp size={20} /> : < MdKeyboardArrowDown size={20} />}
            <div className={classNames({
                [styles.ordenador__options]: true,
                [styles["ordenador__options--ativo"]]: aberto,
            })}>
                {
                    opcoes.map((opcao) => (
                        <div key={opcao.value} className={styles.ordenador__option} onClick={() => setOrdenador(opcao.value)}>
                            {opcao.nome}
                        </div>
                    ))
                }
            </div>
        </button>
    )
}
