import { useState, useEffect, useRef } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces'

interface useProductArgs {
  product: Product
  onChange?: (args: onChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}

const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value)

  const isMounted = useRef(false)

  console.log(initialValues)

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0)
    if (initialValues?.maxCount && newValue > initialValues?.maxCount) {
      newValue = initialValues.maxCount
    }
    setCounter(newValue)

    if (onChange) {
      onChange({ count: newValue, product })
    }
  }

  const reset = () => {
    setCounter(initialValues?.count || value || 0)
  }

  useEffect(() => {
    if (!isMounted.current) return
    setCounter(value)
  }, [value])

  useEffect(() => {
    isMounted.current = true
  }, [])

  return {
    counter,
    increaseBy,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset,
  }
}

export default useProduct
