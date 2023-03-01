import Header from '../../components/Header'

import styles from './Carrinho.module.scss'

import { useSelector } from 'react-redux'
import { Item } from '../../components/Item'

export default function Carrinho() {
  const carrinho = useSelector((state: any) => {
    const carrinhoReduce = state.carrinho.reduce(
      (itens: any, itemNoCarrinho: any) => {
        const item = state.itens.find(
          (item: any) => item.id === itemNoCarrinho.id,
        )
        itens.push({
          ...item,
          quantidade: itemNoCarrinho.quantidade,
        })
        return itens
      },
      [],
    )
    return carrinhoReduce
  })
  return (
    <div>
      <Header
        titulo="Carrinho de compras"
        descricao="Confira produtos que você adicionou ao carrinho"
      />
      <div className={styles.carrinho}>
        {carrinho.map((item: any) => (
          <Item key={item.id} {...item} carrinho />
        ))}
        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong> R$ {(0.0).toFixed(2)} </strong>
          </span>
        </div>
      </div>
    </div>
  )
}
