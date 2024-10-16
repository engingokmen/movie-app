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

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [ref])

    return ref
}
