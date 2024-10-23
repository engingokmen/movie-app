import { useEffect, useRef } from 'react'
export const useOutsideClick = (callback: Function) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClick = (event: any) => {
            if (
                ref.current &&
                !ref.current.contains(event.target as HTMLElement)
            ) {
                callback()
            }
        }

        let element = null
        if (typeof window !== 'undefined') {
            element = window.document
            element.addEventListener('click', handleClick)
        }

        return () => {
            if (typeof window !== 'undefined' && element) {
                element.removeEventListener('click', handleClick)
            }
        }
    }, [ref])

    return ref
}
