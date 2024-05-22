import { QuantityContainer } from './styles'
import { Plus, Minus } from '@phosphor-icons/react'

export function QuantityInput() {
  return (
    <QuantityContainer>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      <span>0</span>
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </QuantityContainer>
  )
}
