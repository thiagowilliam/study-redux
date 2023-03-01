import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import { Item } from '../../components/Item'

import styles from './Categoria.module.scss'

export default function Categoria() {
  const { nomeCategoria } = useParams()
  const { categoria, itens } = useSelector((state: any) => ({
    categoria: state.categorias.find(
      (categoria: any) => categoria.id === nomeCategoria,
    ),
    itens: state.itens.filter((item: any) => item.categoria === nomeCategoria),
  }))
  return (
    <>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.header}
      />
      <div className={styles.itens}>
        {itens?.map((item: any) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </>
  )
}
