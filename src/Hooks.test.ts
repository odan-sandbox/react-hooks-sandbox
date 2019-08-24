import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from './Hooks'

describe('useCounter について', () => {
    it('型が正しい', () => {
        const { result } = renderHook(() => useCounter())
      
        expect(result.current.count).toBe(0)
        expect(result.current.increment).toBeInstanceOf(Function)
    })

    it('インクリメントされる', () => {
        const { result } = renderHook(() => useCounter())

        expect(result.current.count).toBe(0)

        act(() => {
            result.current.increment()
        })

        expect(result.current.count).toBe(1)
    })
})
