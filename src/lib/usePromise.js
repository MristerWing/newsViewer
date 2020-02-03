import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
	// 대기중 / 완료 / 실패에 대한 상태 관리
	const [loading, setLoading] = useState(false);
	const [resolved, setResolved] = useState(null);
	const [error, setError] = useState(null);

	/**
	 * Promise의 대기중, 완료결과, 실패 결과에 대한 상태를 관리하며, 이를 의존배열 deps에 피라미터로 받아온다.
	 * 이때 경고가 나타나게 되는데 이를 무시하기 위해서 eslint를 무시하는 규칙을 추가한다.
	 * */

	useEffect(() => {
		const process = async () => {
			setLoading(true);
			try {
				const resolved = await promiseCreator();
				setResolved(resolved);
			} catch (e) {
				setError(e);
			}
			setLoading(false);
		};
		process();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps);

	return [loading, resolved, error];
}
