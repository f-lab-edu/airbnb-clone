import { useCallback } from 'react'
import { useSearchParams } from 'next/navigation'

/**
 * URL 쿼리 문자열을 생성하는 커스텀 훅
 *
 * 이 훅은 현재 URL의 검색 파라미터를 기반으로 새로운 쿼리 문자열을 생성합니다.
 * 특정 파라미터를 추가하거나 업데이트할 때 사용됩니다.
 *
 * @returns
 *
 * @example
 *
 * const createQueryString = useCreateQueryString();
 * const newQueryString = createQueryString('page', '2');
 * 결과: 현재 URL 파라미터에 'page=2'가 추가되거나 업데이트된 쿼리 문자열
 *
 */
export const useCreateQueryString = () => {
    const searchParams = useSearchParams()

    return useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    )
}
